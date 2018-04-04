# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

the author of this library *accidentally* deployed a broken build, specifically version 1.7.0.  As such, we want to avoid that build.  So when we install the react-sparklines package in the next video, run this command instead of the one you see in the video

yarn add react-sparklines@1.6.0 

This will install version 1.6.0, which doesn't have the broken code.

There is a github issue tracking this problem, you can read more about it here: https://github.com/borisyankov/react-sparklines/issues/89
