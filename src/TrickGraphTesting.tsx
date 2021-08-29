import React, { useEffect, useState } from "react";
import "react-dropdown/style.css";

enum Grip {
	ken = "ken",
	sara = "sara",
	tama = "tama",
	// todo: add spike grip (?)
}

enum Position {
	hanging = "hanging",
	big = "big",
	small = "small",
	base = "base",
	spike = "spike",
	// todo: add stalls
}

enum Transition {
	to = "to",
	flip = "flip",
	juggle = "juggle",
	griptrade = "griptrade",
}

const GripMustStayTransitions = [Transition.to];
const GripMustChangeTransitions = [Transition.griptrade];
const PositionMustChangeTransitions = [Transition.to];

class State {
	grip: Grip;
	position: Position;

	constructor(grip: Grip, pos: Position) {
		this.grip = grip;
		this.position = pos;
	}
}

class Progression {
	/** progression is [start state] -(transition)> [end state] */
	start: State;
	transition: Transition;
	end: State;
	invalid: boolean;
	difficulty: number;

	constructor(start: State, tran: Transition, end: State) {
		this.invalid = this.isInvalid(start, tran, end);
		this.start = start;
		this.transition = tran;
		this.end = end;
		this.difficulty = this.calculateDifficulty(start, tran, end);
	}

	calculateDifficulty(
		start: State,
		transition: Transition,
		end: State
	): number {
		let d = 0;
		if (start.grip !== end.grip) {
			d++;
		}
		if (transition !== Transition.to) {
			d++;
		}
		if (end.position == Position.spike) {
			d++;
		}
		return d;
	}

	isInvalid(start: State, tran: Transition, end: State): boolean {
		// only noobs go to hanging, it is only valid to start at hanging
		if (end.position === Position.hanging) {
			return true;
		}
		if (GripMustStayTransitions.includes(tran)) {
			if (start.grip !== end.grip) {
				return true;
			}
		} else if (GripMustChangeTransitions.includes(tran)) {
			if (start.grip === end.grip) {
				return true;
			}
		}
		if (PositionMustChangeTransitions.includes(tran)) {
			if (start.position === end.position) {
				return true;
			}
		}
		return false;
	}
}

class Trick {
	/** Trick is a squence of 1 or more progressions */
	trick: Progression[];

	constructor(progList: Progression[]) {
		// todo: this assumes only valid progressions passed
		this.trick = progList;
	}
}

function TrickGraphTesting() {
	const [posProgs, setPosProgs] = useState<Progression[]>([]);
	const [curState, setCurState] = useState<State>(
		new State(Grip.ken, Position.big)
	);
	const calculateProgressions = (startState: State) => {
		const newProgs = [];
		for (let tran in Transition) {
			for (let pos in Position) {
				for (let g in Grip) {
					const prog = new Progression(
						startState,
						Transition[tran as keyof typeof Transition],
						new State(
							Grip[g as keyof typeof Grip],
							Position[pos as keyof typeof Position]
						)
					);
					if (!prog.invalid) {
						console.log(prog);
						newProgs.push(prog);
					}
				}
			}
		}
		setPosProgs(newProgs);
	};

	const generatePosProgsList = posProgs
		.sort((a, b) => a.difficulty - b.difficulty)
		.map((p) => (
			<li>
				{p.difficulty}--({p.transition})-- {p.end.grip} {p.end.position}
				<button
					onClick={() => {
						setCurState(new State(p.end.grip, p.end.position));
						calculateProgressions(curState);
					}}
				>
					Generate from here
				</button>
			</li>
		));

	return (
		<div>
			<h1>
				current state: {curState.grip} {curState.position}
			</h1>
			<button onClick={() => calculateProgressions(curState)}>
				Generate Tricks
			</button>
			<ul>{generatePosProgsList}</ul>
		</div>
	);
}

export default TrickGraphTesting;
