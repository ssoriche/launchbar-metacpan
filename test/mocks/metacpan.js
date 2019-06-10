// This class is designed to be used inside of a LaunchBar Action where
// the HTTP global is supplied for interaction with the external sources.
class MetaCPAN {
  constructor(apiURL, homepageURL) {
    this.apiURL = apiURL || 'https://fastapi.metacpan.org/v1';
    this.homepageURL = homepageURL || 'https://metacpan.org';
  }

  get podURL() {
    return `${this.homepageURL}/pod`;
  }

  get suggestURL() {
    return `${this.apiURL}/suggest?q=`;
  }

  getPodLocation(distribution) {
    return `${this.podURL}/${distribution}`;
  }

  suggest(query) {
    const myFilter = new RegExp(`${query}.*`);
    return [
      {
        "deprecated": 0,
        "name": "Moo",
        "distribution": "Moo",
        "release": "Moo-2.003004",
        "author": "HAARG"
      },
      {
        "author": "ETHER",
        "distribution": "Moose",
        "release": "Moose-2.2011",
        "name": "Moose",
        "deprecated": 0
      },
      {
        "name": "Moose::Role",
        "deprecated": 0,
        "author": "ETHER",
        "release": "Moose-2.2011",
        "distribution": "Moose"
      },
      {
        "distribution": "Moose",
        "release": "Moose-2.2011",
        "author": "ETHER",
        "deprecated": 0,
        "name": "Moose::Util"
      },
    ].filter( distribution => distribution.name.match(myFilter));
  }
}

if (typeof module !== 'undefined') {
  module.exports.MetaCPAN = MetaCPAN;
}
