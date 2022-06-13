import { Digit } from "../../type"
import { SegmentFlags } from "./SegmentDigit"

type Converter = {
	[key in Digit]: SegmentFlags
}

export const converter: Converter = {
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
}
