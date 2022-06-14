import { Digit, Default, SegmentId } from "../../type"
import { SegmentFlags } from "./SegmentDigit"

type Converter = {
	[key in Digit | Default]: SegmentFlags
}

export const digitConverter: Converter = {
	"0": {
		a: true,
		b: true,
		c: true,
		d: true,
		e: true,
		f: true,
		g: false,
	},
	"1": {
		a: false,
		b: true,
		c: true,
		d: false,
		e: false,
		f: false,
		g: false,
	},
	"2": {
		a: true,
		b: true,
		c: false,
		d: true,
		e: true,
		f: false,
		g: true,
	},
	"3": {
		a: true,
		b: true,
		c: true,
		d: true,
		e: false,
		f: false,
		g: true,
	},
	"4": {
		a: false,
		b: true,
		c: true,
		d: false,
		e: false,
		f: true,
		g: true,
	},
	"5": {
		a: true,
		b: false,
		c: true,
		d: true,
		e: false,
		f: true,
		g: true,
	},
	"6": {
		a: true,
		b: false,
		c: true,
		d: true,
		e: true,
		f: true,
		g: true,
	},
	"7": {
		a: true,
		b: true,
		c: true,
		d: false,
		e: false,
		f: false,
		g: false,
	},
	"8": {
		a: true,
		b: true,
		c: true,
		d: true,
		e: true,
		f: true,
		g: true,
	},
	"9": {
		a: true,
		b: true,
		c: true,
		d: true,
		e: false,
		f: true,
		g: true,
	},
	default: {
		a: false,
		b: false,
		c: false,
		d: false,
		e: false,
		f: false,
		g: false,
	},
}

type BitVector = {
	[key in SegmentId]: number // binary number
}

const bitVector: BitVector = {
	a: 0b1000000,
	b: 0b0100000,
	c: 0b0010000,
	d: 0b0001000,
	e: 0b0000100,
	f: 0b0000010,
	g: 0b0000001,
}

const digitHandler = {
	// .hasOwnProp() &&  != typeof != Default
	// & bitVector[]
}

const digitProxy = new Proxy(digitConverter, digitHandler)
