import { Enum } from './enum'

// doc-comment :D
export function func(en: Enum) {
  switch (en) {
    case Enum.A: func(Enum.B); break;
    case Enum.B: func(Enum.A); break;
    case Enum.C: func(Enum.C); break;
  }
  return
}


// @ts-ignore
export const invalid = 1 + false

// @ts-ignore i'm dumb and this is ok
export const invalid2 = 1 + false
