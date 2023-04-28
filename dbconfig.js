const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:admin@cluster1.opda0cc.mongodb.net/CWS?retryWrites=true&w=majority"
).then(()=>{
    console.log('Connection successfull')
}).catch((err)=>{
    console.error(err)
});
