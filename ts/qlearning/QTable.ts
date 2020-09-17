import Q from "./Q.js";

export default class QTable<S> {
  table: Q<S>[] = [];
  constructor() {}
  addQ(state: S, invalid_actions: number[]) {}
}
