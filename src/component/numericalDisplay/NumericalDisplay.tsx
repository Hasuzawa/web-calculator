import styled from "styled-components"
import { IStyled } from "../../type"
import { SegmentDigit } from "./SegmentDigit"

interface NumericalDisplayProps extends IStyled {}

const RawNumericalDisplay = (props: NumericalDisplayProps) => {
	return (
		<div className={props.className}>
			<SegmentDigit n={"0"} />
			<SegmentDigit n={"1"} />
			<SegmentDigit n={"2"} />
			<SegmentDigit n={"3"} />
			<SegmentDigit n={"4"} />
			<SegmentDigit n={"5"} />
			<SegmentDigit n={"6"} />
			<SegmentDigit n={"7"} />
			<SegmentDigit n={"8"} />
			<SegmentDigit n={"9"} />
		</div>
	)
}

const NumericalDisplay = styled(RawNumericalDisplay)`
	display: flex;
	flex-flow: row nowrap;
	column-gap: 10px;
`

export { NumericalDisplay }
