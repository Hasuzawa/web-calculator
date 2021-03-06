import styled from "styled-components"
import { IStyled } from "../../type"
import { SegmentDigit } from "./SegmentDigit"
import { Digit } from "../../type"

interface NumericalDisplayProps extends IStyled {
	n: number
	minDigit: number
}

const RawNumericalDisplay = (props: NumericalDisplayProps) => {
	const { n, minDigit } = props
	let digits = n.toString().split("") as Digit[]
	while (digits.length < minDigit) {
		digits = ["0", ...digits]
	}
	return (
		<div className={props.className}>
			{digits.map((x: Digit, idx: number) => (
				<SegmentDigit n={x} key={idx} />
			))}
			{/* <SegmentDigit n={"0"} />
			<SegmentDigit n={"1"} />
			<SegmentDigit n={"2"} />
			<SegmentDigit n={"3"} />
			<SegmentDigit n={"4"} />
			<SegmentDigit n={"5"} />
			<SegmentDigit n={"6"} />
			<SegmentDigit n={"7"} />
			<SegmentDigit n={"8"} />
			<SegmentDigit n={"9"} /> */}
		</div>
	)
}

const NumericalDisplay = styled(RawNumericalDisplay)`
	display: flex;
	flex-flow: row nowrap;
	column-gap: 10px;
`

export { NumericalDisplay }
