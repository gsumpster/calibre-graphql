# calibre-graphql

This is a module designed to allow you to point us to your Calibre's metadata.db and generate a GraphQL API with the data contained in there.



## Usage 

```javascript
import express from "express";
import calibreGraphQL from 'calibre-graphql';

const app = express();

calibreGraphQL(app, { calibrePath: "./calibre", prefix: 'calibre_api' });
```

