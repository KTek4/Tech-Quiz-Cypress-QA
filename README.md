# Tech Quiz Test Suite

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The tech quiz test suite is a Cypress & CLI program that runs tests on a basic web app that gives a quiz to test your knowledge on Python. The program will run 2 end to end and 4 component tests on the program, which should come back successful when the testing is completed. Tests can run either in your CLI or in the Cypress GUI.

## Installation
  
Prerequisite: You must have node.js and npm (npm is typically included with node) installed in your local git-compatible command line interface prior to installing this program. If you do not have node & npm installed, please follow the installation instructions [here](https://nodejs.org/).\
NOTE: It is recommended that you run this program on a high-performing machine, or a machine that is rated to run tests, as the app that runs the tests (Cypress) is resource intensive, and may fail to run on lower performing machines.

Download the source code for the project with a <code>git clone</code> on this repository in your CLI using the URL or SSH link provided in the "code" button at the top of this repository. Then, <code>cd</code> in your terminal to the directory that contains the cloned repo, and run an <code>npm i</code> to ensure that you have all required dependencies to run the package successfully.

## Usage
  
To use, make sure you are CDed to the directory the source files live in. You can choose to either run the tests directly in the CLI/Terminal or in the Cypress GUI. If running an E2E test, make sure you run an <code>npm run start:dev</code> to start the server. Then, open a new terminal, and run either: <code>npm run test</code> to run both the End to End and Component tests in the terminal, or <code>npm run cypress</code> to open the Cypress GUI, and run the tests from there. If using the Cypress GUI, simply select which tests you would like to run, select the browser to run the tests in (Electron is most recommended), and then selec the "Quiz" option to run the tests.

The End to End test will check for:\
"should start the quiz when the button is clicked"\
"should display my score when the quiz is completed"

The component test will test for:\
"component renders"\
"mounts and displays the "start quiz" button"\
"should display the first question when the "start quiz" button is clicked"\
"shows a loading message when the array of question objects is empty"

## License

This project uses MIT License.

Please refer to LICENSE file for more information.

## Credits

Majority of the test code was provided by edX Bootcamp and their respective developers. Additional troubleshooting and code was updated by Kalana Ranatunga (KTek4) with the help of ChatGPT

## Tests
  
To test, follow usage instructions above.