import styled from "styled-components"
import { IStyled } from "../../type"

interface SegmentProps extends IStyled {
	active: boolean
	length?: number
	thickness?: number
}

const RawSegment = (props: SegmentProps) => {
	return <span className={props.className} />
}

const HorizontalSegment = styled(RawSegment)`
	display: block;
	width: ${({ length }) => length ?? 40}px;
	height: ${({ thickness }) => thickness ?? 6}px;
	background-color: ${({ active }) => (active ? "black" : "transparent")};
`
const VerticalSegment = styled(HorizontalSegment)`
	width: ${({ thickness }) => thickness ?? 6}px;
	height: ${({ length }) => length ?? 40}px;
`

export const segment = {
	Horizontal: HorizontalSegment,
	Vertical: VerticalSegment,
}
