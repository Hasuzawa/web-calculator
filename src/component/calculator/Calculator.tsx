import styled from "styled-components"
import { IStyled } from "../../type"
import { useState, useEffect } from "react"
import { NumericalDisplay } from "../numericalDisplay/NumericalDisplay"
import { NumberButton } from "./NumberButton"

const CALCULATOR_WIDTH = 400
const CALCULATOR_HEIGHT = 600

interface CalculatorProps extends IStyled {}

const RawCalculator = (props: CalculatorProps) => {
	const [value, setValue] = useState<number>(0)

	const onDigitInput = (n: number) => {
		setValue(value * 10 + n) // no decimal point (.)
	}
	// const onOperationInput = (operator: any) => {

	// }
	return (
		<div className={props.className}>
			<NumberButton label={"1"} onClick={() => setValue(1)} />
			<NumberButton label={"2"} onClick={() => setValue(2)} />
			<NumberButton label={"3"} onClick={() => setValue(3)} />
			<NumberButton label={"+"} onClick={() => setValue(3)} />
			<NumberButton label={"4"} onClick={() => setValue(4)} />
			<NumberButton label={"5"} onClick={() => setValue(5)} />
			<NumberButton label={"6"} onClick={() => setValue(6)} />
			<NumberButton label={"-"} onClick={() => setValue(3)} />
			<NumberButton label={"7"} onClick={() => setValue(7)} />
			<NumberButton label={"8"} onClick={() => setValue(8)} />
			<NumberButton label={"9"} onClick={() => setValue(9)} />
			<NumberButton label={"*"} onClick={() => setValue(9)} />

			<NumberButton label={"0"} onClick={() => setValue(0)} />
			<NumberButton label={"="} onClick={() => setValue(0)} />
			<NumberButton label={"/"} onClick={() => setValue(0)} />
			<span>{value}</span>
		</div>
	)
}

const Calculator = styled(RawCalculator)`
	width: ${CALCULATOR_WIDTH}px;
	height: ${CALCULATOR_HEIGHT}px;
	background-color: lightcoral;
	display: flex;
	flex-flow: row wrap;
	place-content: start;

	font-family: "Inter UI", sans-serif;
	user-select: none;
`

export { Calculator }
