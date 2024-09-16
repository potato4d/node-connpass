> **This library is no longer maintained**
> connpass has ended free API access for individuals. Therefore, this library no longer works.

# Connpass API Adapter for Node.js

The connpass API client library for Node.js.

## Installation

```bash
$ yarn add connpass
```

## Usage

```ts
import Connpass from 'connpass'

async function run() {
  const client = new Connpass()
  const { events } = await client.getEvents()
}
```

## Type definition

See [here](https://github.com/potato4d/node-connpass/blob/master/src/types.ts).

## LICENCE

MIT
