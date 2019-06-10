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

  suggest(input) {
    const query = encodeURIComponent(input);
    const result = HTTP.getJSON(`${this.suggestURL}${query}`);

    return result.data.suggestions;
  }
}

if (typeof module !== 'undefined') { module.exports.MetaCPAN = MetaCPAN; }
