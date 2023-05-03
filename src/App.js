export class App {
  render() {
    // does not use `this`. but won't be flagged
    // since this pattern is common.
    return <> This is some stuff </>
  }
}

