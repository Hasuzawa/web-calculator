import styled from "styled-components"
import { IStyled } from "../../type"
import { CalculatorButton } from "./CalculatorButton"

interface InputPadProps extends IStyled {
	setValue: any
}

const RawInputPad = (props: InputPadProps) => {
	const { setValue } = props
	return (
		<div className={props.className}>
			<CalculatorButton label={"1"} onClick={() => setValue(1)} />
			<CalculatorButton label={"2"} onClick={() => setValue(2)} />
			<CalculatorButton label={"3"} onClick={() => setValue(3)} />
			<CalculatorButton label={"+"} onClick={() => setValue(3)} />
			<CalculatorButton label={"4"} onClick={() => setValue(4)} />
			<CalculatorButton label={"5"} onClick={() => setValue(5)} />
			<CalculatorButton label={"6"} onClick={() => setValue(6)} />
			<CalculatorButton label={"-"} onClick={() => setValue(3)} />
			<CalculatorButton label={"7"} onClick={() => setValue(7)} />
			<CalculatorButton label={"8"} onClick={() => setValue(8)} />
			<CalculatorButton label={"9"} onClick={() => setValue(9)} />
			<CalculatorButton label={"*"} onClick={() => setValue(9)} />
			<CalculatorButton label={"0"} onClick={() => setValue(0)} />
			<CalculatorButton label={"."} onClick={() => setValue(0)} />
			<CalculatorButton label={"="} onClick={() => setValue(0)} />
			<CalculatorButton label={"/"} onClick={() => setValue(0)} />
		</div>
	)
}

const InputPad = styled(RawInputPad)`
	display: flex;
	flex-flow: row wrap;
	place-content: start;

	font-family: "Inter UI", sans-serif;
`

export { InputPad }
