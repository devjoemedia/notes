import express from 'express';
import markoMiddleware from '@marko/express';
import mongoose from 'mongoose';
import Note from './notesModel';

import Entrypoint from './views/www.marko';
import HomePage from './views/pages/Home.marko'

const Assets = require( process.env.RAZZLE_ASSETS_MANIFEST )

const app = express();


// Connecting to server
mongoose.connect("mongodb+srv://joseph:test1234@cluster0.qqbea.mongodb.net/notebook?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true }).then(res=> console.log("connection success")).catch(err => console.log(err.message))
 
app
.disable('x-powered-by')
.use( markoMiddleware() ) // Enable res.marko
.use(express.static(process.env.RAZZLE_PUBLIC_DIR))

app.get('/*', async(req, res) => {
  try {
    const notes = await Note.find();
    const scope = {
      title: 'Notely',
      Assets,
      notes
    }
    res.marko( Entrypoint, scope )
  } catch (err) {
    console.log(err.message);
  }
}); 

export default app;
 