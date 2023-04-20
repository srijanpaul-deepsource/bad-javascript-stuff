const popup = window.open('www.github.com')
popup?.postMessage("hello :)");

const smth = { postMessage(msg: string) { return msg; } }
smth.postMessage("message");

postMessage(":D")

// @ts-ignore
export const invalid = 1 + false

// @ts-ignore i'm dumb and this is ok
export const invalid2 = 1 + false

// @ts-expect-error this is also ok :>
export const invalid3 = 2 + false

// @ts-expect-error
export const invalid4 = 3 + false // <- this is not ok

fetch("www.dog.ceo");
