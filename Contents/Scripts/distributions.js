class Distributions {
  constructor(metacpan) {
    this.metacpan = metacpan || new MetaCPAN();
  }

  find(input) {
    return this.metacpan.suggest(input).map(
      distribution => ({
        title: distribution.name,
        url: this.metacpan.getPodLocation(distribution.name),
        icon: "font-awesome:archive",
      })
    );
  }

}

if (typeof module !== 'undefined') {
  module.exports.Distributions = Distributions;
}
