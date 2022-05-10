const res = require('express/lib/response');
const fs = require('fs')
const express = require('express')
const daterouter = require('./Router/date-time')

const app = express();

app.use(express.json());

app.use('/date',daterouter);

app.listen(process.env.PORT || 3000)

 