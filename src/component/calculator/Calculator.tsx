import styled from "styled-components"
import { IStyled } from "../../type"
import { useState, useEffect } from "react"
import { DigitalDisplay } from "./DigitalDisplay"
import { InputPad } from "./InputPad"

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
			<DigitalDisplay n={value} />
			<InputPad setValue={setValue} />
		</div>
	)
}

const Calculator = styled(RawCalculator)`
	width: ${CALCULATOR_WIDTH}px;
	height: ${CALCULATOR_HEIGHT}px;
	background-color: lightcoral;

	display: flex;
	flex-flow: column nowrap;
`

export { Calculator }
