import express from 'express';
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {



  res.status(201).json({msg:'Hello World!', ok:true, rest: 'ff'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})