import styled from "styled-components"
import { IStyled, Digit, SegmentId } from "../../type"
import { segment } from "./Segment"
import { digitConverter } from "./converter"
import { HORIZONTAL_WIDTH } from "./conf"

export type SegmentFlags = {
	[key in SegmentId]: boolean
}

interface SegmentDigitProps extends IStyled {
	n: Digit
}

const RawSegmentDigit = (props: SegmentDigitProps) => {
	const { a, b, c, d, e, f, g } = digitConverter[props.n]
	return (
		<span className={props.className}>
			<segment.Horizontal active={a} />
			<Span>
				<segment.Vertical active={f} />
				<segment.Vertical active={b} />
			</Span>
			<segment.Horizontal active={g} />
			<Span>
				<segment.Vertical active={e} />
				<segment.Vertical active={c} />
			</Span>
			<segment.Horizontal active={d} />
		</span>
	)
}

interface SpanProps extends IStyled {}

const RawSpan = (props: SpanProps) => {
	return <span className={props.className}>{props.children}</span>
}

const Span = styled(RawSpan)`
	display: flex;
	column-gap: ${HORIZONTAL_WIDTH}px;
	flex-flow: row nowrap;
`

const SegmentDigit = styled(RawSegmentDigit)`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`

export { SegmentDigit }
