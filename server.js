// Setup empty JS object to act as endpoint for all routes
projectData = {};
const express=require ("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const app=express();
app.use(cors());
const port=3000;

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));
const listening=()=>{

}

app.listen(port,listening);

app.post("/saveAllData",(req,res)=>{
projectData.date=req.body.date;	
projectData.temperature=req.body.temperature;
projectData.userResponse=req.body.userResponse;
console.log("post data")
console.log(projectData);

});
app.get('/retrieveAllData',(req,res)=>{
	console.log("get data ");
	console.log(projectData);
	res.send(projectData);
	
});





// });

// Setup Server