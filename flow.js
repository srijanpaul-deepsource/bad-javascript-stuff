type foo = {};
// Message: Object type must be exact.

type foof = { bar: string };
// Message: Object type must be exact.

// Options: ["always"]
type foofoo = Array<{bar: string}>;
// Message: Object type must be exact.

// Options: ["always"]
(foofoof: Array<{bar: string}>) => {};
// Message: Object type must be exact.