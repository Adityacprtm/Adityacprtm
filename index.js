#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import { select } from "@inquirer/prompts";
import open from "open";

process.stdout.write("\x1Bc");

const data = {
  name: chalk.bold.cyan("Aditya Pratama"),
  handle: chalk.dim("@adityacprtm"),
  role: chalk.bold("DevOps · SRE · Cloud Engineer"),
  tagline: chalk.dim("Building reliable systems at scale."),

  web: chalk.cyan("https://adityacprtm.dev"),
  blog: chalk.cyan("https://adityacprtm.dev/blog"),
  github: chalk.cyan("https://github.com/Adityacprtm"),
  linkedin: chalk.cyan("https://linkedin.com/in/adityacprtm"),
  twitter: chalk.cyan("https://x.com/adityacprtm"),
  email: chalk.cyan("aditya@adityacprtm.dev"),

  labelWeb: chalk.white.bold("      Web"),
  labelBlog: chalk.white.bold("     Blog"),
  labelGitHub: chalk.white.bold("   GitHub"),
  labelLinkedIn: chalk.white.bold(" LinkedIn"),
  labelTwitter: chalk.white.bold("        X"),
  labelEmail: chalk.white.bold("    Email"),
};

const sep = chalk.dim("──────────────────────────────────────────");

const box = boxen(
  [
    `${data.name}  ${data.handle}`,
    `${data.role}`,
    `${data.tagline}`,
    ``,
    sep,
    ``,
    `${data.labelWeb}  ${chalk.dim("→")}  ${data.web}`,
    `${data.labelBlog}  ${chalk.dim("→")}  ${data.blog}`,
    `${data.labelGitHub}  ${chalk.dim("→")}  ${data.github}`,
    `${data.labelLinkedIn}  ${chalk.dim("→")}  ${data.linkedin}`,
    `${data.labelTwitter}  ${chalk.dim("→")}  ${data.twitter}`,
    `${data.labelEmail}  ${chalk.dim("→")}  ${data.email}`,
    ``,
    sep,
    ``,
    chalk.dim("AWS · GCP · Kubernetes · Terraform · Docker"),
    chalk.dim("Prometheus · Grafana · Kong · Elastic Stack"),
  ].join("\n"),
  {
    borderColor: "cyan",
    borderStyle: "round",
    padding: 1,
    margin: 1,
    float: "center",
    textAlignment: "left",
  }
);

console.log(box);

console.log(
  chalk.dim(
    "  Tip: " +
    chalk.bold("cmd/ctrl + click") +
    " any link above to open it directly.\n"
  )
);

const actions = {
  website:  () => { open("https://adityacprtm.dev");               console.log(chalk.dim("\nOpening website...\n")); },
  linkedin: () => { open("https://linkedin.com/in/adityacprtm");  console.log(chalk.dim("\nOpening LinkedIn...\n")); },
  email:    () => { open("mailto:aditya@adityacprtm.dev");         console.log(chalk.dim("\nOpening email client...\n")); },
  exit:     () => { console.log(chalk.dim("\nSee you around.\n")); },
};

async function main() {
  const action = await select({
    message: "What would you like to do?",
    choices: [
      { name: "Open website",  value: "website" },
      { name: "Open LinkedIn", value: "linkedin" },
      { name: "Send an email", value: "email" },
      { name: "Exit",          value: "exit" },
    ],
  }).catch(() => "exit");

  actions[action]();
}

main();
