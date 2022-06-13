import styled from "styled-components"
import { IStyled } from "../../type"
import { segment } from "./Segment"

interface SegmentDigitProps extends IStyled {}

const RawSegmentDigit = (props: SegmentDigitProps) => {
	return (
		<span className={props.className}>
			<segment.Horizontal active />
			<Span>
				<segment.Vertical active />
				<segment.Vertical active />
			</Span>
			<segment.Horizontal active />
			<Span>
				<segment.Vertical active />
				<segment.Vertical active />
			</Span>
			<segment.Horizontal active />
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

export default SegmentDigit
