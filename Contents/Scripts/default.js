class MetaCPANLB {
  constructor() {
    let handle = Action.preferences.viewerHandle || '';
  }

  run( input, options ) {
    if (input.length > 0) {
      return this.displayMenuItemFor(input);
    }
  }

  // This is all built for future expansion with the thought in mind
  // that searching for more than just distributions would be available.
  displayMenuItemFor(input) {
    if (input === undefined) {
      LaunchBar.alert("No argument was passed to the action");
    }
    return this.findDistributions(input);
  }

  findDistributions(input) {
    const dist = new Distributions();
    return dist.find(input);
  }

}

MetaCPANLB.VERSION = 'v' + Action.version + '-' + LaunchBar.version;

const app = new MetaCPANLB();

function run(argument) {
  return app.run(argument);
}
