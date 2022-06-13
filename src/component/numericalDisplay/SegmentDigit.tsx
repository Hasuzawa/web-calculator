import styled from "styled-components"
import { IStyled, Digit } from "../../type"
import { segment } from "./Segment"
import { converter } from "./converter"

export type SegmentFlags = {
	a: boolean
	b: boolean
	c: boolean
	d: boolean
	e: boolean
	f: boolean
	g: boolean
}

interface SegmentDigitProps extends IStyled {
	n: Digit
}

const RawSegmentDigit = (props: SegmentDigitProps) => {
	const { a, b, c, d, e, f, g } = converter[props.n]
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
	column-gap: 40px;
	flex-flow: row nowrap;
`

const SegmentDigit = styled(RawSegmentDigit)`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`

export { SegmentDigit }
