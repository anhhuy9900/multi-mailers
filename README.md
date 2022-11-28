# multi-mailers
The packages using libraries to the use choose to send mail

Setup project in VS Code top menu: **Terminal** -> **New Terminal**

### Install dependencies

Install dependencies with npm:

```bash
npm i
```

### Test

Test your code with Jest framework:

```bash
npm run test
```

Run test with specific file

```bash
 npm test -- test/mailtrap.test.ts 
```

**Note:** Example TypeScript Package uses [husky](https://typicode.github.io/husky/), [pinst](https://github.com/typicode/pinst) and [commitlint](https://commitlint.js.org/) to automatically execute test and [lint commit message](https://www.conventionalcommits.org/) before every commit.

### Build

Build production (distribution) files in your **dist** folder:

```bash
npm run build
```

### Try it before publishing

Run:

```bash
npm link
```
