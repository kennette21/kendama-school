import "./App.css";
import styled from "styled-components";

const GridContainer = styled.div`
	height: 95vh;
	display: grid;
	gap: 1rem;
	grid-template-areas:
		"header header header header header"
		"tutorial tutorial tutorial tricks tricks"
		"more more more tricks tricks"
		"footer footer footer footer footer";
	grid-template-rows: 100px auto 100px 120px;
	margin: 1rem;
`;

const CenteredTextBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: solid 1px red;
`;

const Header = styled(CenteredTextBox)`
	grid-area: header;
	font-family: Rock Salt;
	font-size: 40px;
	text-align: center;
`;

const Footer = styled(CenteredTextBox)`
	grid-area: footer;
`;

const Tutorial = styled(CenteredTextBox)`
	grid-area: tutorial;
`;

const Tricks = styled(CenteredTextBox)`
	grid-area: tricks;
`;

const More = styled(CenteredTextBox)`
	grid-area: more;
`;

function GridPlayground() {
	return (
		<GridContainer>
			<Header>Kendama School</Header>
			<Tutorial>tutorial here</Tutorial>
			<Tricks>Tricks outchea</Tricks>
			<More>Gimmi more</More>
			<Footer>footer i am</Footer>
		</GridContainer>
	);
}

export default GridPlayground;
