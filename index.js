#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

var prompt = inquirer.createPromptModule();

const data = {
  name: chalk.bold.blue("Aditya Chamim Pratama"),
  nickname: chalk.bold("Adityacprtm"),

  web: chalk.green("https://adityacprtm.dev    "),
  blog: chalk.green("https://adityacprtm.dev/blog "),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("adityacprtm"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~adityacprtm"),
  github: chalk.gray("https://github.com/") + chalk.white("Adityacprtm"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("adityacprtm"),
  npx: chalk.red("npx") + " " + chalk.white("adityacprtm"),

  labelWeb: chalk.white.bold("Web:"),
  labelBlog: chalk.white.bold(" Blog:"),
  labelTwitter: chalk.white.bold("Twitter:"),
  labelNpm: chalk.white.bold("  npm:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelCard: chalk.white.bold("Card:"),
};

const box = boxen(
  [
    `${data.name} | ${data.nickname} 🚀`,
    ``,
    `${data.labelWeb}  ${data.web}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelNpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    ``,
    `${data.npx}`,
    ``,
    `${chalk.italic.bold("I am an enthusiastic newbie.")}`,
    `${chalk.italic("There is much to learn and much more to build.")}`,
    `${chalk.italic("So far and for this, I am very grateful.")}`,
  ].join("\n"),
  {
    borderColor: "blue",
    borderStyle: "double",
    padding: 1,
    margin: 1,
    float: "center",
    textAlignment: "center",
  }
);

const questions = [
  {
    type: "list",
    name: "action",
    message: "What's next?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:aditya@adityacprtm.dev");
          console.log(
            "\nPlease wait, your email application will pop up soon,\nsee ya.\n"
          );
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        },
      },
    ],
  },
];

console.log(box);

const tip = [
  `${chalk.white.bold(
    "Tip"
  )}: if the terminal supports, try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} the link above 😉`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
