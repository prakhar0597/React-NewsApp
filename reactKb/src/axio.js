// const express = require('express')
// const PORT = 5000
// const app = express.Router();
const axios = require('axios')

app.get("/", (req, res, next) => {

    let url = "http://jsonplaceholder.typicode.com/posts/"
    axios.get(url).then(
        function(resp){
            console.log(resp)
        }
    )
    .catch((err)=>{
        console.log(err);
    });
    // res.render("posts");
});




app.listen(PORT, function(){
    console.log(`Express server listening on port ${PORT}`)
})