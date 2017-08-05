let express = require('express')
let port = process.env.PORT || 3000
let app = express()

app.set('view', './views')
app.set('view engine', 'jade')
app.listen(port)

console.log('movelist started on port' + port)






