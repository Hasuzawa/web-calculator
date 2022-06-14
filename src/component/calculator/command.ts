import { ArithmeticFunction } from "./operation"

type binaryFunction<T1, T2, T3> = (a: T1, b: T2) => T3
type uniaryFunction<T> = (a: T) => T
type nullaryFunction<T> = () => T

interface Command {
	execute: Function
	undo?: Function
}

// interface ArithmeticOperations extends Command<number> {
// 	before: number
// 	operand?: number
// 	after: number
// 	operation: binaryFunction<number, number, number>

// 	execute: () => number
// 	undo: () => number
// }

class ArithmeticOperation implements Command {
	before: number
	operand: number
	operation: ArithmeticFunction

	constructor(
		before: number,
		operand: number,
		operation: ArithmeticFunction
	) {
		this.before = before
		this.operand = operand
		this.operation = operation
	}

	execute() {
		return this.operation.apply(this.before, this.operand)
	}

	undo() {
		return this.before
	}
}

export {}
