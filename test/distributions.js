const assert = require('assert');

const MetaCPAN = require('./mocks/metacpan').MetaCPAN;
const Distributions = require('../Contents/Scripts/distributions').Distributions;

describe('Distributions', function() {
  const metacpan = new MetaCPAN();
  let dists = new Distributions(metacpan);

  describe('#suggest', function() {

    it('returns a list of LaunchBar objects', function() {

      const results = [
      {
        "title": "Moo",
        "url": "https://metacpan.org/pod/Moo",
        "icon": "font-awesome:share-alt",
      },
      {
        "title": "Moose",
        "url": "https://metacpan.org/pod/Moose",
        "icon": "font-awesome:share-alt",
      },
      {
        "title": "Moose::Role",
        "url": "https://metacpan.org/pod/Moose::Role",
        "icon": "font-awesome:share-alt",
      },
      {
        "title": "Moose::Util",
        "url": "https://metacpan.org/pod/Moose::Util",
        "icon": "font-awesome:share-alt",
      },
      ];

      assert.deepEqual(results, dists.find('Moo'));
    });

    it('returns an empty list of objects', function() {
      assert.deepEqual([], dists.find('Test'));
    });
  });
});
