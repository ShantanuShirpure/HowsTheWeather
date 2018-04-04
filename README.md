The author of react-sparklines library *accidentally* deployed a broken build, specifically version 1.7.0.  As such, we want to avoid that build.  So when we install the react-sparklines package in the next video, run this command instead of the one you see in the video

yarn add react-sparklines@1.6.0 

This will install version 1.6.0, which doesn't have the broken code.

There is a github issue tracking this problem, you can read more about it here: https://github.com/borisyankov/react-sparklines/issues/89
