import styled from "styled-components"
import { IStyled } from "../../type"
import { NumericalDisplay } from "../numericalDisplay/NumericalDisplay"

interface DigitalDisplayProps extends IStyled {
	n: number
}

const RawDigitalDisplay = (props: DigitalDisplayProps) => {
	return (
		<div className={props.className}>
			<NumericalDisplay n={props.n} minDigit={5} />
		</div>
	)
}

const DigitalDisplay = styled(RawDigitalDisplay)``

export { DigitalDisplay }
