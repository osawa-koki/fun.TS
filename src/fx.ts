
const mailRegex = `^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$`;

const NAMESPACE_OF_SVG = "http://www.w3.org/2000/svg";
const SPACE = " ";


const eq = (a: any, b: any): boolean => a === b;
const ne = (a: any, b: any): boolean => a !== b;
const gt = (a: any, b: any): boolean => a > b;
const gtEq = (a: any, b: any): boolean => a >= b;
const lt = (a: any, b: any): boolean => a < b;
const ltEq = (a: any, b: any): boolean => a <= b;

const add = (a: number, b: number): number => a + b;
const reduce = (a: number, b: number): number => a - b;
const times = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => a / b;
const power = (a: number, b: number): number => a ** b;

const fst = (a: any[]): any => a[0];
const snd = (a: any[]): any => a[1];
const last = (a: any[]): any => a[a.length - 1];

const min = ([a, b, ...c]: number[]): number => (fst(c) !== undefined) ? min([(a <= b) ? a : b, ...c]) : (a <= b) ? a : b;
const max = ([a, b, ...c]: number[]): number => (fst(c) !== undefined) ? max([(b <= a) ? a : b, ...c]) : (b <= a) ? a : b;

const and = (a: boolean, b: boolean): boolean => a && b;
const or = (a: boolean, b: boolean): boolean => a || b;
const xor = (a: boolean, b: boolean): boolean => (a || b) && !(a && b);
const not = (a: boolean): boolean => !a;
const truthy = (a: any): boolean => Boolean(a); // ts doesn't need this.
const falsy = (a: any): boolean => !truthy(a); // ts doesn't need this.

const apply = (fx: (arg: any) => any): any => (arg: any): any => fx(arg);
const rec = (fx: (arg: any) => any): any => fx(fx);

const filter = (fx: (arg: any, i: number) => boolean, [a, ...b]: any[], i: number = 0): any[] => (a !== undefined) ? (fx(a, i)) ? [a, ...filter(fx, b)] : [...filter(fx, b)] : [];
const map = (fx: (arg: any, i: number) => any, [a, ...b]: any[], i: number = 0): any[] => (a !== undefined) ? [fx(a, i), ...map(fx, b, i + 1)] : [];
const looper = ([a, ...b]: any[], fx: (arg: any, i: number) => any, i: number = 0): any[] => (a !== undefined) ? [fx(a, i), ...looper(b, fx, i + 1)] : [];
const any = ([a, ...b]: any[], fx: (arg: any) => boolean): boolean => (a !== undefined) ? or(fx(a), any(b, fx)) : false;
const all = ([a, ...b]: any[], fx: (arg: any) => boolean): boolean => (a !== undefined) ? and(fx(a), all(b, fx)) : true;
const anyIndex = ([a, ...b]: any[], fx: (arg: any, i: number) => boolean, i: number = 0): boolean => (a !== undefined) ? or(fx(a, i), anyIndex(b, fx, i + 1)) : false;
const allIndex = ([a, ...b]: any[], fx: (arg: any, i: number) => boolean, i: number = 0): boolean => (a !== undefined) ? and(fx(a, i), allIndex(b, fx, i + 1)) : true;
const countSatisfy = ([a, ...b]: any[], fx: (arg: any) => boolean, i: number = 0): number => (a !== undefined) ? countSatisfy(b, fx, i + (fx(a) ? 1 : 0)) : i;
const minFx = ([a, b, ...c]: any[], fx: (arg: any) => number, eq: boolean = true): any => (fst(c) !== undefined) ? minFx([((eq) ? ltEq : lt)(fx(a), fx(b)) ? a : b, ...c], fx) : ((eq) ? ltEq : lt)(fx(a), fx(b)) ? a : b;
const maxFx = ([a, b, ...c]: any[], fx: (arg: any) => number, eq: boolean = true): any => (fst(c) !== undefined) ? maxFx([((eq) ? gtEq : gt)(fx(a), fx(b)) ? a : b, ...c], fx) : ((eq) ? gtEq : gt)(fx(a), fx(b)) ? a : b;
const reducer = ([a, ...b]: any[], fx: (arg: any) => any, fxComprehensive = add): any => (a !== undefined && 0 < b.length) ? fxComprehensive(fx(a), reducer(b, fx, fxComprehensive)) : fx(a);

const getElms = ([a, ...b]: string[]): (HTMLElement | null)[] => (a !== undefined) ? [document.getElementById(a), ...getElms(b)] : [];
const mkElms = ([a, ...b]: string[]): HTMLElement[] => (a !== undefined) ? [document.createElement(a), ...mkElms(b)] : [];
const mkElmSVGs = ([a, ...b]: string[]): SVGElement[] => (a !== undefined) ? [document.createElementNS(NAMESPACE_OF_SVG, a), ...mkElmSVGs(b)] : [];
const zFill = (n: number, len: number): string => (Array(len).join("0") + n).slice(-len);
// const URLencodeAssoc = (obj: object): string => Object.keys(obj).map(key => key + "=" + encodeURIComponent(obj[key])).join("&");
const between = (a: number, b: number) => (c: string): boolean => and(a <= c.length, c.length <= b);
const switcher = (tf: boolean, afx: (arg: any) => any, bfx: (arg: any) => any, arg: any = null): any => (tf) ? afx(arg) : bfx(arg);

const regex = (a: string) => (b: string): RegExpMatchArray | null => b.match(a);
const mailCheck = regex(mailRegex);

const regexGrouping = (a: string, b: string): {[key: string]: string} | undefined => a.match(b)?.groups;

const removeChildren = (parent: HTMLElement): any[] => (parent.firstChild) ? [parent.removeChild(parent.firstChild), removeChildren(parent)] : [];

const append = ([a, ...b]: HTMLElement[], parent: HTMLElement): any[] => (a !== undefined) ? [parent.appendChild(a), ...append(b, parent)] : [];
const mkBr = (): HTMLElement => document.createElement("br");
// const appendText = ([a, ...b]: string[], parent: HTMLElement): any[] => (a !== undefined && 1 <= b.length) ? [append([document.createTextNode(a), mkBr()], parent), appendText(b, parent)] : (b.length === 0) ? append([document.createTextNode(a)], parent) : [];
const push = ([a, ...b]: any[], list: any[]): any[] => (a !== undefined) ? [list.push(a), ...push(b, list)] : [];

const doNtimes = (n: number, fx: (arg: any) => any, i: number = 0): any[] => (i < n) ? [fx(i), ...doNtimes(n, fx, i + 1)] : [];

const random = (a: number, b: number): number => Math.floor(Math.random() * (b + 1 - a) + a);
const round = (n: number) => (i: number): number => Math.round(i * n) / n;
const round100 = round(100);

const NxN = (a: number, b: number, c: any = null): any[][] => [new Array(a).fill(new Array(b).fill(c))];
const NxNfx = (a: number, b: number, fx: () => any): any[][] => [new Array(a).fill(new Array(b).fill(fx()))];

const fromAtoB = (a: number, b: number, step: number = 1, eq: boolean = true, i: number = 0): number[] => (((eq) ? ltEq : lt)(a + i, b)) ? [a + i, ...fromAtoB(a, b, step, eq, i + step)] : [];

const removeClassifiedItems = (a: string): any[] => looper(Array.from(document.getElementsByClassName(a)), b => b.classList.remove(a));
