# Documentation

<br>

> ## Index
>
> - [Introduction](#introduction)
> - [Syntax](#syntax)
> - [Function Structure](#function-structure)
> - [Function Structure Description](#function-structure-description)
> - [Usage](#usage)

<br>

## Introduction

It is used by call a function named `setupFooter`

<br>

## Syntax

```
setupFooter(object);
```

Where the `object` is the parameter which holds some propperties to setup the footer text.

<br>

## Function Structure

```
function setupFooter(object: {
    target: string;
    company: string;
    copyrightNote: string;
    copyrightStatus: boolean;
    yearStarted: number;
    yearEnded: number;
    yearPosition: "start" | "end";
})
```

<br>

## Function Structure Description

| Property          | Type    | Default value         | Description                                                                                                          |
| ----------------- | ------- | --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `target`          | string  | "footer"              | It consists of a string, which acts as a query selector.                                                             |
| `company`         | string  | "Company"             | It consists of a string, which represents the name of a company.                                                     |
| `copyrightNote`   | string  | "All Rights Reserved" | It contains a string, that represents your reserved copyrights.                                                      |
| `copyrightStatus` | boolean | false                 | It contains a boolean, It works like a flag which enable/disable the the word 'Copyright &copy;' in the footer text. |
| `yearStarted`     | string  | `currentYear`         | It consists of a number that defines the year in which the company started.                                          |
| `yearEnded`       | string  | `currentYear`         | It consists of a number, which defines the year in which the company was dissolved/discontinued.                     |
| `yearPosition`    | string  | "end"                 | It contains a string, which can be "start"/"end".                                                                    |

<br>

## Usage

```
setupFooter({
  target: ".site-footer h6",
  company: "Company",
  copyrightNote: "All Rights Reserved.",
  copyrightStatus: true,
  yearStarted: 2020,
  yearEnded: 2020,
  yearPosition: "",
});
```
