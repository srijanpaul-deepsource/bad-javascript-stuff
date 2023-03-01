import { Inject } from "some-module";

// doc
export default class Class {
  constructor(@Inject("SEQUELIZE") private readonly param: number) {}
}
