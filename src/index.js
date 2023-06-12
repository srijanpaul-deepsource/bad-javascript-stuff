export default 1 && 2
export const or = 1 || 2
export const something = or || "default"

// doc comment
function myFunc(a, b, c) {
  return a + b + c;
}

export const myExport = myFunc(12, 13, undefined);
export const myExport2 = myFunc(1 + 3, undefined, undefined);
export const myExport3 = myFunc(1 + 1, undefined, 3 + 1);
export const myExport35 = myFunc(1 * 1, undefined, 3 + 1);
export const myExport4 = myFunc((() => {
  return 123;
})(), undefined, 3 + 1);

