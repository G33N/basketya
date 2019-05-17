# Basketya 

## About

This is an tap application to starter projects using

* Firebase
* Redux
* React Native
* Over Expo

## How redux works?

Reference-style: 
![alt text][reduxdiagram]

[reduxdiagram]: https://firebasestorage.googleapis.com/v0/b/bastetya-c45f3.appspot.com/o/reduxDiagram.gif?alt=media&token=9a622d3c-bfdc-488d-b80c-505499b39eef "ReduxDiagram"

## 🚀 Getting Started

1. Clone and Install
*It's recommended that you install React Native Debugger and open before yarn start.

```
# Clone the repo
git clone https://github.com/mcnamee/react-native-starter-kit.git

# Install dependencies
yarn install
```

2.1. Run the React Native App

```
# Start the React Native packager
yarn start
```

Instructions are shown in the terminal. You can select to open it in:

* An emulator (either iOS or Android)
* Your mobile device with the Expo app. It will reload if you save edits to your files and you will see build errors and logs in the terminal.

## Get Started with Firebase
We've created a quick little "API server" on Google's Firebase Platform. You can get your own API up and running within minutes too:

1. Signup for a Firebase account
2. Create a new project - eg. "React Native Starter App"
3. Enable email/password Authentication under the 'Sign-in method' tab.
4. Create a Realtime Database, and import the firebase-sample-data.json file found in this repo using the hamburger menu on the top right.
4. Get the Firebase project's API credentials, and add them to the respective variables in your /src/constants/firebase.js file. You can get your projects details from Firebase by clicking on 'Authentication' on the left, underneath 'Develop' > select 'Web setup'.
5. Add the following rules to the Database
```
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": true,
    ".write": true
  }
}

```