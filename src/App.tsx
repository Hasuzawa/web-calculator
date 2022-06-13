import "./App.css"
// import Segment from "./component/numericalDisplay/Segment"
import { SegmentDigit } from "./component/numericalDisplay/SegmentDigit"
import { NumericalDisplay } from "./component/numericalDisplay/NumericalDisplay"

function App() {
	return (
		<div className="App">
			{/* <SegmentDigit /> */}
			<NumericalDisplay />
		</div>
	)
}

export default App
