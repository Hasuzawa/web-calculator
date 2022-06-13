import "./App.css"
import { SegmentDigit } from "./component/numericalDisplay/SegmentDigit"
import { NumericalDisplay } from "./component/numericalDisplay/NumericalDisplay"

function App() {
	return (
		<div className="App">
			{/* <SegmentDigit /> */}
			<NumericalDisplay n={Math.floor(Math.random() * 100_000_000)} />
		</div>
	)
}

export default App
