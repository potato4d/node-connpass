# Connpass API Adapter for Node.js

The connpass API client library for Node.js.

## Installation

```bash
$ yarn add node-connpass
```

## Usage

```ts
import Connpass from 'node-connpass'

async function run() {
  const client = new Connpass()
  const { events } = await client.getEvents()
}
```

## LICENCE

MIT
