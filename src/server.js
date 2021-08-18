import express from 'express';
import markoMiddleware from '@marko/express';
import mongoose from 'mongoose';
import Note from './notesModel';

import Entrypoint from './views/www.marko';

const Assets = require( process.env.RAZZLE_ASSETS_MANIFEST )

const app = express();


// Connecting to server
mongoose.connect("mongodb+srv://joseph:test1234@cluster0.qqbea.mongodb.net/notebook?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true }).then(res=> console.log("connection success")).catch(err => console.log(err.message))
  
app
.disable('x-powered-by')
.use( markoMiddleware() ) // Enable res.marko
.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
app.use(express.json())


// Get  Note By Tag
app.get('/api/notes/:tag', async(req, res) => {
  try {
    const notes = await Note.find({tag: req.params.tag});
    
    res.status(200).json({
      message: "Success",
      notes
    })
  } catch (err) {
    console.log(err.message);
  }
}); 
// Get All Notes
app.get('/api/notes', async(req, res) => {
  try {
    const notes = await Note.find();
    
    res.status(200).json({
      message: "Success",
      notes
    })
  } catch (err) {
    console.log(err.message);
  }
}); 

// Get Single Note
app.get('/api/notes/:id', async(req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json({
      message: "Success",
      note
    })
  } catch (err) {
    console.log(err.message);
  }
});

// Create Single Note
app.post('/api/notes/', async(req, res) => {
  try {  
    const note = await Note.create(req.body);
    res.status(200).json({
      message: "Success",
      note
    })
  } catch (err) {
    console.log(err.message);
  }
});  

// Update Note
app.patch('/api/notes/:id', async(req, res) => {
  try {  
    const note = await Note.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
      message: "Success",
      note
    })
  } catch (err) {
    console.log(err.message);
  }
}); 

// Delete Note
app.delete('/api/notes/:id', async(req, res) => {
  try {  
    const note = await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Success",
      note
    })
  } catch (err) {
    console.log(err.message);
  }
});  

// Pages Route Handler
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
 