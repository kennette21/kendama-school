import React, { useEffect, useState } from "react";
import { FaBeer, FaHireAHelper } from "react-icons/fa";
import "./App.css";
import styled from "styled-components";

const Page = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 20px;
	background-color: #f7f4cc;
	height: 100%;
`;

const BodyContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	border: 4px dotted red;
`;

const TricksContainer = styled.div`
	display: flex;
	flex-direction: column; // how to do card layout with flex?
	border: 4px dotted blue;
`;

const TutorialContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5px 10px;
	flex: 1;
	border: 4px dotted lightblue;
`;

const TutorialVisual = styled.div`
	display: flex;
	position: relative;
	flex: 1;
	border: 4px dotted lightblue;
`;

const TutorialActions = styled.div`
	display: flex;
	flex: 1;
	border: 4px dotted lightblue;
`;

const Resources = styled.div`
	display: flex;
	width: auto;
	margin: 20px;
	flex: 1;
	border: 4px dotted #e6dbad;
`;

const Actions = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-around;
	border: 4px dotted #479147;
`;

const Footer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	height: 60px;
	border: 4px dotted greenyellow;
`;

const CompletedButton = styled.div`
	border: 2px solid gray;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FoooterItem = styled.div`
	border: 4px solid gray;
	font-size: 20px;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const VideoContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 50px;
	position: relative;
`;

declare global {
	interface Window {
		iframely: any;
	}
}

function App() {
	console.log("rendering...");
	const [iframeHtml, setIframeHtml] = useState("");

	useEffect(() => {
		const getIframelyPieceHtml = async (url: string) => {
			const resp = await (
				await fetch(
					"https://iframe.ly/api/iframely?url=" +
						url +
						"&api_key=532610e8a5ae3742540e3a&iframe=1&omit_script=1"
				)
			).json();

			console.log("resp is as such ", resp);

			setIframeHtml(resp.html);
		};

		getIframelyPieceHtml("https://www.youtube.com/watch?v=xSKYv5BcdQE");
	}, []);

	const getPieceSection = () => {
		if (iframeHtml !== "") {
			console.log("we have something here! ", iframeHtml);
			return (
				<VideoContainer
					dangerouslySetInnerHTML={{ __html: iframeHtml }}
				/>
			);
		}
		return null;
	};

	return (
		<Page className="App">
			<BodyContainer className="body-container">
				<TutorialContainer>
					<TutorialVisual>{getPieceSection()}</TutorialVisual>
					<TutorialActions>
						<Resources>other rescources about the trick</Resources>
						<Actions>
							<CompletedButton
								onClick={() => console.log("congrats!")}
							>
								Completed! <FaBeer />
							</CompletedButton>
							<CompletedButton>
								<FaHireAHelper />
							</CompletedButton>
						</Actions>
					</TutorialActions>
				</TutorialContainer>
				<TricksContainer>
					List of foundational tricsks, with some suggestions
				</TricksContainer>
			</BodyContainer>
			<Footer>
				<FoooterItem>Pencil</FoooterItem>
				<FoooterItem>Standard</FoooterItem>
				<FoooterItem>Dama</FoooterItem>
			</Footer>
		</Page>
	);
}

export default App;
