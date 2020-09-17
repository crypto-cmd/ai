export default class Q<S> {
  private state: S;
  private actions: number[];
  constructor(state: S, no_of_actions: number, invalid_actions: number[] = []) {
    if (no_of_actions < 1) throw new Error("No actions are available");
    this.state = state;
    this.actions = new Array(no_of_actions).fill(0);

    if (
      invalid_actions.filter((val) => val >= this.actions.length || val < 0)
        .length > 0
    ) {
      throw new Error("Action is out of Bounds");
    }
    invalid_actions?.forEach((action) => (this.actions[action] = NaN));
    if (this.actions.filter((val) => val != NaN).length == 0)
      throw new Error(`No actions are available fo QState ${this.state}`);
  }
  getBestAction() {
    let best = -Infinity;
    let bestIndex = 0;
    this.actions.forEach((reward, index) => {
      if (reward == NaN) return;
      if (reward >= best) {
        best = reward;
        bestIndex = index;
      }
    });
    return bestIndex;
  }
  getRandomAction() {
    const actions = this.actions
      .map((value, index) => {
        return { reward: value, index: index };
      })
      .filter((obj) => obj.reward != NaN);
    const rand = Math.floor(Math.random() * actions.length);
    return actions[rand].index;
  }
  update() {
    // To update the Q
  }
}
