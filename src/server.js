
import express from 'express';
import markoMiddleware from '@marko/express';
import Entrypoint from './www.marko';

const Assets = require( process.env.RAZZLE_ASSETS_MANIFEST )

const app = express();

app
.disable('x-powered-by')
.use( markoMiddleware() ) // Enable res.marko
.use(express.static(process.env.RAZZLE_PUBLIC_DIR))

.get('/', (req, res) => {

  const scope = {
    title: 'Setup Note App',
    Assets
  }
 
  res.marko( Entrypoint, scope )
});

export default app;
 