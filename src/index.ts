import { Inject } from "some-module";

// doc
export class C {
  constructor(@Inject("SEQUELIZE") private readonly param: number) {}
}
