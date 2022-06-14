export interface ArithmeticFunction {
	apply: (a: number, b: number) => number
}

export const plus: ArithmeticFunction = (a: number, b: number) => a + b

export const minus: ArithmeticFunction = (a: number, b: number) => a - b

export const multiplication: ArithmeticFunction = (a: number, b: number) =>
	a * b

export const divide = (a: number, b: number) => {
	if (Math.abs(b) < 0.000_000_1)
		return 0 // for more flexible representation we need to revamp the whole system
	else return a / b
}
