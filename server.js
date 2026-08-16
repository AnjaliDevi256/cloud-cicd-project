const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Cloud CI/CD Application is Running!");
});

app.get("/hello",(req,res)=>{
    res.send("Hello from Cloud CI/CD!");
});

app.get("/health",(req,res)=>{
    res.json({
        status:"healthy",
        version:"1.0"
    });
});

if(require.main===module){
    app.listen(PORT,()=>{
        console.log(`Server running on ${PORT}`);
    });
}

module.exports=app;