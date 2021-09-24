# Documentation

<br>

> ## Index
>
> - Introduction
> - Syntax
> - Structure
> - Structure Description
> - Usage

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

## Structure

```
function setupFooter(object: {
    target: string;
    company: string;
    copyrightNote: string;
    copyrightStatus: boolean;
    yearStarted: number;
    yearEnded: number;
    yearPosition: "start" | "end";
}): {
    footerText: string;
    ... 6 more ...;
    yearStarted: number;
}
```

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
