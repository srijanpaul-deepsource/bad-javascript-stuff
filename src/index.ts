import { Inject } from "some-module";

// doc
export class C {
  param: number;
  constructor(@Inject(1) param: number) {
    this.param = param;
  }
}
