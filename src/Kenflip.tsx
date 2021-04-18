import "./App.css";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Dama } from "./graphics/damadarkColors.svg";
import { ReactComponent as Ken } from "./graphics/KendarkColors.svg";

const damaKenFlip = keyframes`
    0%, 10% {
        transform: translateY(65px) translateX(4px) rotate(8deg);
    }
    20% {
        transform: rotate(-10deg) translateY(0px) translateX(-3px);
    }
    70% {
        transform: rotate(-360deg) translateX(0);
    }
    100% {
        transform: translateY(65px) translateX(4px) rotate(8deg);
    }
`;

const kenKenFlip = keyframes`
    0%, 10% {
        transform: translateY(0px) translateX(-3px) rotate(5deg);
    }
    20% {
        transform: translateY(-20px) rotate(-5deg);
    }
    70% {
        transform: translateY(-10px) rotate(0deg);
    }
    100%{
        transform: translateY(0px) translateX(-3px) rotate(5deg);
    }
`;

const StyledDama = styled(Dama)`
	position: absolute;
	top: -80px;
	left: 10px;
	z-index: 100;
	animation: ${damaKenFlip} 2s ease infinite;
`;
const StyledKen = styled(Ken)`
	position: absolute;
	animation: ${kenKenFlip} 2s ease infinite;
`;
const Container = styled.div`
	display: flex;
	width: 100%;
	height: 500px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const AnimationContianer = styled.div`
	position: relative;
`;

function Kenflip() {
	return (
		<Container>
			<AnimationContianer>
				<StyledDama />
				<StyledKen />
			</AnimationContianer>
		</Container>
	);
}

export default Kenflip;
