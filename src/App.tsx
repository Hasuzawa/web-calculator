import "./App.css"
import { SegmentDigit } from "./component/numericalDisplay/SegmentDigit"
import { NumericalDisplay } from "./component/numericalDisplay/NumericalDisplay"
import { Calculator } from "./component/calculator/Calculator"

function App() {
	return (
		<div className="App">
			{/* <SegmentDigit /> */}
			<NumericalDisplay n={Math.floor(Math.random() * 100_000_000)} />
			<Calculator />
		</div>
	)
}

export default App
