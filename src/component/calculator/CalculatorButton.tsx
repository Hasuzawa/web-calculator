import styled from "styled-components"
import { Digit, Operator, IStyled } from "../../type"

interface CalculatorButtonProps extends IStyled {
	label: Digit | Operator | "=" | "."
	onClick: () => void
}

const RawCalculatorButton = (props: CalculatorButtonProps) => {
	return (
		<button className={props.className} onClick={props.onClick}>
			{props.label}
		</button>
	)
}

const CalculatorButton = styled(RawCalculatorButton)`
	display: inline-block;
	cursor: pointer;
	/* justify-content: center;
	align-items: center; */
	/* vertical-align: center; */
	/* text-align:  */
	/* vertical-align: text-bottom; */
	/* vertical-align: middle; */
	width: 100px;
	height: 100px;
	font-size: 40px;
	background-color: lightblue;
	color: black;

	&&:hover {
		background-color: lightcyan;
	}
`

export { CalculatorButton }
