require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port || 3000

import {postAnnouncement} from './services/announcementService'

app.use(express.json());  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Structure it later
app.post('/announcement', (req, res) => {
    let message = req.body.text || "Failed!"
     postAnnouncement(message).then((response)=>{
        res.send(response)
    }).catch((error)=>{
        res.send(error)
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.use(express.json())