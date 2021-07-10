const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL , {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true //when mongoose works with mongodb, our indexes are created allowing us to quickly access the data we wanted
})