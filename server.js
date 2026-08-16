const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cloud CI/CD Dashboard</title>
<style>
body{
margin:0;
font-family:Arial,sans-serif;
background:linear-gradient(135deg,#0f172a,#1e3a8a);
color:white;
}
.container{
max-width:900px;
margin:50px auto;
padding:30px;
}
h1{
text-align:center;
font-size:42px;
margin-bottom:10px;
}
.subtitle{
text-align:center;
color:#cbd5e1;
margin-bottom:35px;
}
.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
}
.card{
background:rgba(255,255,255,.08);
padding:20px;
border-radius:15px;
backdrop-filter:blur(10px);
box-shadow:0 8px 20px rgba(0,0,0,.25);
}
.status{
color:#22c55e;
font-size:26px;
font-weight:bold;
}
.footer{
margin-top:40px;
text-align:center;
color:#94a3b8;
}
.tech{
display:flex;
justify-content:center;
gap:15px;
flex-wrap:wrap;
margin-top:20px;
}
.badge{
background:#2563eb;
padding:8px 14px;
border-radius:20px;
}
</style>
</head>
<body>
<div class="container">
<h1>Cloud CI/CD Dashboard</h1>
<p class="subtitle">Multi-Stage Automated CI/CD Pipeline</p>

<div class="grid">
<div class="card">
<div class="status">✔ Running</div>
<p>Application Status</p>
</div>

<div class="card">
<div class="status">3/3 Passed</div>
<p>Jest Tests</p>
</div>

<div class="card">
<div class="status">Docker Ready</div>
<p>Container Built</p>
</div>

<div class="card">
<div class="status">GitHub Actions</div>
<p>Pipeline Connected</p>
</div>
</div>

<div class="tech">
<span class="badge">Node.js</span>
<span class="badge">Express</span>
<span class="badge">Docker</span>
<span class="badge">GitHub Actions</span>
</div>

<div class="footer">
CI/CD pipeline automatically builds, tests and deploys Docker images.
</div>

</div>
</body>
</html>
    `);
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