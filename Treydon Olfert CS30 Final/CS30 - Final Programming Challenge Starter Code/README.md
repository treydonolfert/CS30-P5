# Setting Up a Text Editor

## Required

Although you can use any text editor you want, the instructions below will use VS Code.

- Install [Visual Studio Code](https://code.visualstudio.com/)

- Install the following packages in VS Code
  - `Live Server` (lets you run your code on your local machine for testing, by adding a "Go Live" button to the bottom of your VS Code window)
  - `p5js Snippets` (lets VS Code auto-complete p5 functions for you)


## Optional

There is a configuration file in this folder template called `.eslintrc.js` that helps provide instant feedback about possible problems in your code using a tool called ESLint (for example, warning you that you didn't declare a variable before using it, or that your indentation is incorrect). Setting up your machine to use this may not be feasible in a computer lab scenario, as it requires admin rights to install Node.js. If you cannot install Node.js, the VS Code setup  will still work just fine, but you will not get instant feedback from ESLint about possible problems in your code.

- Install Node.js from https://nodejs.org (which also installs npm -- node package manager)
  - in VS Code, open Terminal and type `npm install -g eslint`
  - if you have installation problems with eslint, you can try updating npm [in VS Code, open Terminal and type `npm install npm@latest -g`]

- Install the following packages in VS Code
  - `ESLint` (allows VS Code to use ESLint, which helps you write better formatted JavaScript, and warns you of errors as you type your code)


## For Each New Project

- make a copy of this template folder
- rename the folder to whatever you want your project to be called (your project will be at yourusername.github.io/projectname)
- move the newly renamed template folder into your GitHub repository folder
- edit `sketch.js` with your p5js code
- to see your project, click on the "Go Live" button on the bottom (footer) bar of VS Code, which will start a local development webserver and automatically open up your index.html file
- commit your changes to GitHub (via the GitHub desktop app)
- push your changes to the server

## Daily GitHub Workflow

- Fetch Origin (pull any changes from GitHub repo)
- do your work
- commit changes to GitHub
- push your changes

Following this workflow **every** time you work on your code is especially important when using GitHub at home and at school. If you forget to fetch origin before coding, and have made changes to your code on another machine, there are likely to be "clashes" in your code, which are time consuming to fix.