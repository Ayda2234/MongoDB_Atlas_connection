const mongoose  = require('mongoose');
const dbURL = "mongodb+srv://bouzekriaida04:472002@cluster0.eqcs95l.mongodb.net/?retryWrites=true&w=majority"
const connectionParams = {
   // useNewUrlParser: true,
   // useUnifiedTopology: true
}
mongoose.connect(dbURL, connectionParams).then(()=> {
    console.info(" connected to the database ");
})
.catch((e) => {
    console.log(" error connecting" , e);

});
