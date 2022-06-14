import styled from "styled-components"
import { IStyled } from "../../type"
import {
	HORIZONTAL_WIDTH,
	HORIZONTAL_HEIGHT,
	ACTIVE_COLOR,
	INACTIVE_COLOR,
	VERTICAL_WIDTH,
	VERTICAL_HEIGHT,
} from "./conf"

interface SegmentProps extends IStyled {
	active: boolean
	horizontalWidth?: number
	horizontalHeight?: number
	verticalWidth?: number
	verticalHeight?: number
}

const RawSegment = (props: SegmentProps) => {
	return <span className={props.className} />
}

// RawSegment.defaultProps = {
// 	active: false,
// 	horizontalWidth: HORIZONTAL_WIDTH,
// 	horizontalHeight: HORIZONTAL_HEIGHT,
// 	verticalWidth: VERTICAL_WIDTH,
// 	verticalHeight: VERTICAL_HEIGHT,
// }

const HorizontalSegment = styled(RawSegment)`
	display: block;
	width: ${({ horizontalWidth }) => horizontalWidth ?? HORIZONTAL_WIDTH}px;
	height: ${({ horizontalHeight }) =>
		horizontalHeight ?? HORIZONTAL_HEIGHT}px;
	background-color: ${({ active }) =>
		active ? ACTIVE_COLOR : INACTIVE_COLOR};
`
const VerticalSegment = styled(HorizontalSegment)`
	width: ${({ verticalWidth }) => verticalWidth ?? VERTICAL_WIDTH}px;
	height: ${({ verticalHeight }) => verticalHeight ?? VERTICAL_HEIGHT}px;
`

export const segment = {
	Horizontal: HorizontalSegment,
	Vertical: VerticalSegment,
}
