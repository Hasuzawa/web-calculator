import styled from "styled-components"
import { IStyled } from "../../type"

interface HistoryProps extends IStyled {}

const RawHistory = (props: HistoryProps) => {
	return <div className={props.className}></div>
}

const History = styled(RawHistory)`
	display: flex;
	flex-wrap: column nowrap;
`

export { History }
