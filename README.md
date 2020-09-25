linkztxt-vscode
===============

A vscode extension for conviently browsing linkz.txt files from within vscode.

## Motivation

See this [link](https://apps.walialu.com/linkz.txt) for more information about the motivation behind linkz.txt.

## Installation

Via [vscode marketplace](https://marketplace.visualstudio.com/items?itemName=superevilmegaco.linkztxt-vscode).

## Usage

 - `Linkz List` to open up a quickpick window with all linkz.

## linkz.txt file

Put a `linkz.txt` in the root of your project.

```text
About this plugin
https://apps.walialu.com/linkz.txt

About the author
https://about.walialu.com/

Create an issue
https://github.com/walialu/linkztxt-vscode/issues

View the source
https://github.com/walialu/linkztxt-vscode

VsCode Marketplace Link
https://marketplace.visualstudio.com/items?itemName=superevilmegaco.linkztxt-vscode
```

Each link consists of a title and an URI:

```text
This is an example title
http://example.com/
```

All links are separated via a blank line (two consecutive new lines `\n`).

```text
This is an example title
http://example.com/

This is another example title
http://example.com/
```

There is no trailing new line at the end of the `linkz.txt` file.
