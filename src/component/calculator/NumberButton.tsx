import styled from "styled-components"
import { Digit, Operator, IStyled } from "../../type"

interface NumberButtonProps extends IStyled {
	label: Digit | Operator | "="
	onClick: () => void
}

const RawNumberButton = (props: NumberButtonProps) => {
	return <span className={props.className}>{props.label}</span>
}

const NumberButton = styled(RawNumberButton)`
	display: inline-block;
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

export { NumberButton }
