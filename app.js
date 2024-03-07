require("dotenv").config();
port = 3000;
express = require('express')

app = express()

const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

