

const submitBTN = document.getElementById("submitBTN")
const cityname = document.getElementById("cityname")
const city_name = document.getElementById("city_name")
const temp = document.getElementById("temp")
const temp_status = document.getElementById("temp_status")
const datahide = document.querySelector(".middle_layer")
const temp_real_value = document.getElementById("temp_real_value")
const day = document.getElementById("day")
const today_date = document.getElementById("today_date")
const getInfo = async(event)=>{
    event.preventDefault()
    // alert("button is running")
    let cityVal = cityname.value
    if(cityVal === ""){
        city_name.innerText = "Plz write the name of the City"
        datahide.classList.add("data_hide")
    }
    else
    {
        try {
            
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=55aafb447626f56c87e4184d66139921`
            const response =await fetch(url)
            const data = await response.json()
            const arrData = [data]
            city_name.innerHTML =  `${arrData[0].name} , ${arrData[0].sys.country}`
            temp_real_value.innerText = (arrData[0].main.temp-273.15).toFixed(2);
            
            const tempStatus = arrData[0].weather[0].main

            if(tempStatus == "Sunny"){
                temp_status.innerHTML= " <i class='fa-solid fa-sun' style='color: #FFD43B;'></i>"
            }
            else if(tempStatus == "Clear"){
                temp_status.innerHTML= " <i class='fa-solid fa-sun' style='color: #FFD43B;'></i>"
            }
            else if(tempStatus == "Clouds"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style ='color: #FFD43B' ></i>"
            }else if(tempStatus == "Rainy"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-sun-rain' style ='color: #FFD43B' ></i>"
            }
            else{
                temp_status.innerHTML= " <i class='fa-solid fa-cloud' style='color: #FFD43B;'></i>"
            }
            datahide.classList.remove("data_hide")
            console.log(data);
        } catch (error) {
            city_name.innerText = "Plz enter the name of the City properly"
            datahide.classList.add("data_hide")

        }

    }
}
submitBTN.addEventListener("click",getInfo)
const getCurrentDay = ()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const currentDate = new Date();
    day.innerText = weekday[currentDate.getDay()]
    return day;
    
}
const getCurrentTime = ()=>{
    const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

// const d = new Date();
// let name = month[d.getMonth()];
    let now = new Date();
    let Month = month[now.getMonth()+1];
    console.log(Month);
    let date = now.getDate()
    console.log(Month+"/"+date);
   return today_date.innerText = `${date}${Month}`
}
getCurrentDay()