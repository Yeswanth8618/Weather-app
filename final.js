let temperature=document.getElementById('temperature')
let city=document.getElementById('city')
let cityname=document.getElementById('cityname')
let submit=document.getElementById('submit')
let temp=document.getElementById('t1')
let maxtemp=document.getElementById('t2')
let mintemp=document.getElementById('t3')
let pressure=document.getElementById('t4')
let humidity=document.getElementById('t5')
let search=async()=>{
   if(cityname.value==""){
    alert('please enter the city name')
   }   
   else{
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
   let response= await fetch(url)
   let data=await response.json()
   temperature.textContent=data.main.temp+`°`
   temp.textContent=data.main.temp
   maxtemp.textContent=data.main.temp_max
   mintemp.textContent=data.main.temp_min
   pressure.textContent=data.main.pressure
   humidity.textContent=data.main.humidity
   city.textContent=`${cityname.value},${data.sys.country}`
  
   }
}