import { Digit, Default, SegmentId } from "../../type"

type Converter = {
	[key in Digit | Default]: number
}

export const digitConverter: Converter = {
	"0": 0b1111110,
	"1": 0b0110000,
	"2": 0b1101101,
	"3": 0b1111001,
	"4": 0b0110011,
	"5": 0b1011011,
	"6": 0b1011111,
	"7": 0b1110000,
	"8": 0b1111111,
	"9": 0b1111011,
	default: 0b0000000,
}

type BitVector = {
	[key in SegmentId]: number // binary number
}

// const bitVector = new Map<Digit, number>

const bitVector: BitVector = {
	a: 0b1000000,
	b: 0b0100000,
	c: 0b0010000,
	d: 0b0001000,
	e: 0b0000100,
	f: 0b0000010,
	g: 0b0000001,
}

const project = (bitVector: number, base: BitVector) => {
	return {
		a: bitVector & base.a,
		b: bitVector & base.b,
		c: bitVector & base.c,
		d: bitVector & base.d,
		e: bitVector & base.e,
		f: bitVector & base.f,
		g: bitVector & base.g,
	}
}

const digitHandler = {
	get: (obj: any, property: any) => {
		// obj.hasOwnProperty(property) will throw error
		if (property in obj && typeof property) {
			const vector = <number>obj[property]
			return project(vector, bitVector)
		} else {
			return project(obj["default"], bitVector)
		}
	},
}

export const digitConverterProxy = new Proxy(digitConverter, digitHandler)
