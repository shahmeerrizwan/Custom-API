import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'
import cors from 'cors';

const app = express()

app.listen(3003, () => {
  console.log('listeninig at 3003')

  db.connection.once('open', () => {
    console.log('db connected successfully!')
  })
})

app.use(cors());
app.use(express.json());
app.use('/', router);