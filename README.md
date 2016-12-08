# node-connpass
The [connpass](https://connpass.com/) API wrapper library for Node.js.

## Installation

Install on NPM.

```bash
$ npm install -S connpass
```

## Usage

#### connpass.get({options})

Get events for connpass API.  
Options list is [here](https://connpass.com/about/api/).

It's Promise function, You should use `then()` and `catch()`.

```js
const connpass = require("connpass");
connpass.get()
.then((events)=>{
  console.log(events);
})
.catch((error)=>{
  console.log(error);
});
```

#### connpass.version()

Return version of this library.

```js
const connpass = require("connpass");
connpass.version(); // 0.1.0
```
