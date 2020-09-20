# Econverse CLI

This is an amazing CLI to help [Econverse](http:#econverse.digital/) in their project creations.

You might need to use **Econverse CLI** if you need to start a new project and have no patience to get all those files from an already finished project.

> I'm assuming you actually work there.

## Content tree

- [Quick Start](#quick-start)
  - [Change file's name](#change-file's-name)
- [Global Installation](#global-installation)
- [Commands](#commands)
- [Contribution](#contribution)

### Quick Start

```sh
# Start a new project in ./emania/
$ npx econverse new emania

# this message will appear if everything works as planned
> Your files were created successfully
```

This command will create a tree of **already configured** files for you, like this one:

![Project tree image](https://imgur.com/0p6IkpS.png)

And every file's name will have the selected **path name**:

![Project tree image](https://imgur.com/luIZ5HF.png)

> If you create a new project with dot (`.`), the file's name will be the same as it's parent's folder

### Change file's name

To change **all** the initial file's name is actually pretty simple, just initialize the project with the flag `--file-name`, or simply `-f`.

For example:

```sh
# Set file's name to be emania-general
$ npx econverse new emania --file-name emania-general

# Or, more simple
$ npx econverse new emania -f emania-general
```

It will change every main file name to `emania-general`, as you can see here:

![Project tree image](https://imgur.com/1aypPCB.png)

But the actual project's name will be, either the **path** you selected, or the **parent folder's name**, as we can see here in package.json

![Getting parent folder's name image](https://imgur.com/4fZlSZD.png)

### More examples

If you want more examples of any command, just type `econverse <command> -h`.

For example, `npx econverse new -h` returns:

![Help example image](https://imgur.com/K2y3OIx.png)

## Global Installation

You can install this package **globally** (which i highly recommend) with:

```sh
# with npm
$ npm install -g econverse

# or with yarn
$ yarn global add econverse
```

To see if it's actually working, type `econverse -v`.

> Sometimes you need to restart your terminal

## Commands

**There is not** more than this 1 command right now 😞, so you are actually welcome to help me and create more commands!

## Contribution

This CLI was made with [oclif](https://oclif.io/docs), so you can go and take a look at their docs.

<br />

If you want to contribute with this project, you can go to [this repository](https://github.com/gasampaiosouza/econverse-cli) and clone it with:

```sh
$ git clone https://github.com/gasampaiosouza/econverse-cli.git

# or with hub
$ hub clone gasampaiosouza/econverse-cli
```

<br />

You can create **new commands** by creating a new `.ts` file inside `src/commands`, and pasting this template:

```typescript
// src/commands/yourNewCommand.ts

import Command from '@oclif/command'

// yeah, it must be a class.. but it's also cool, don't worry!
export class MyCommand extends Command {
  static description = 'your command description...'

  // this function is the only required part
  async run() {
    console.log('running my command')
  }
}
```

> Or you can [create one by yourself](https://oclif.io/docs/introduction)

Then, you can create any command the way you want. Be creative 🎉!

### Thank you 💚

Thank you for passing by, and feel free to use this CLI.

<br />

[Go back to the top](#)
