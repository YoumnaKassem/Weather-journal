/* Global Variables */
const baseUrl="http://api.openweathermap.org/data/2.5/weather?zip=";
const userKey="&appid=32189bc2fd7a41c4c58e8eab6e4b6f8c";
let textZip=document.getElementById("zip");
let feelings=document.getElementById("feelings");
// const toCelsius="&untis=metric";
let button=document.getElementById("generate");
// Create a new date instance dynamically with JS
let d = new Date();
const postAllData = async ( url = '', data = {})=>{
   const response = await fetch(url, {
     method: 'POST', 
     credentials: 'same-origin',
     headers: {
      'Content-Type': 'application/json',
     },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
   });
   try {  
     const allData = await response.json();
   }catch(error) {
     console.log("error", error);
    }
}

const fetchDataFromWeatherApi = async ( baseUrl,zip,userKey)=>{
    const response = await fetch(baseUrl+zip+userKey);
    try {
      const weatherData= await response.json();
      return weatherData;
      }catch(error) {
      console.log("error", error);
      }
}

const updateUI = async () => {
  const getAllData = await fetch('/retrieveAllData');
  try{
    const allData = await getAllData.json();
    console.log(allData);
    let toCelsius=(allData.temperature)-273.15;
    document.getElementById('temp').innerHTML = "The Temperature is : "+toCelsius.toString()+" celesius";
    document.getElementById('content').innerHTML ="Your feeling : "+ allData.userResponse;
    document.getElementById('date').innerHTML = "Today is  : "+allData.date.toString();

  }catch(error){
    console.log("error", error);
  }
}
const getWeather=()=>{
 
 
 let zip=textZip.value; 
 const userFeelings=feelings.value;
 let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
 fetchDataFromWeatherApi(baseUrl,zip,userKey).then(weatherData=>{
 postAllData("/saveAllData",{date:newDate,temperature:weatherData.main.temp,userResponse:userFeelings});
 }).then(updateUI);

}
button.addEventListener("click",getWeather);