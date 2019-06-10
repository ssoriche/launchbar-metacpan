# MetaCPAN LaunchBar Action

This is a [MetaCPAN](https://metacpan.org)
[LaunchBar](https://www.obdev.at/products/launchbar) action that can search
MetaCPAN based on your input. Including autosuggestion completion.

## Installing

### Automatic

Download the recent release, unzip and double click to have LaunchBar
automatically install the action.

### Manually from Source

If you'd like to use the latest features as they are added to the `master`
branch you can clone the repository to your LaunchBar Actions folder:

```
mkdir -p ~/Library/Application\ Support/LaunchBar/Actions/
git clone \
  https://github.com/ssoriche/launchbar-metacpan \
  ~/Library/Application\ Support/LaunchBar/Actions/metacpan.lbaction
cd ~/Library/Application\ Support/LaunchBar/Actions/metacpan.lbaction
./script/build
```
