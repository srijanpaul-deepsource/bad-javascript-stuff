import { Enum } from './enum'

// doc-comment :D
export function func(en: Enum) {
  switch (en) {
    case Enum.A: func(Enum.B); break;
    case Enum.B: func(Enum.A); break;
  }
  return
}

