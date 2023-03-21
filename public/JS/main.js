
const submitBtn=document.getElementById("subBtn");
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const datahide=document.querySelector('.middle_layer');

const day=document.getElementById('day');
const today_date=document.getElementById('today_date');

let date= new Date();
// for date 
let days = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let currentDate = `${days}-${month}-${year}`;
today_date.innerText=currentDate;
// for day name
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dayindex = weekday[date.getDay()];
day.innerText = dayindex;

// main Weather info function
const getInfo = async(event)=>{
    event.preventDefault();
    let cityval=cityName.value;
    if(cityval===""){
        city_name.innerText=`Please Write The Name Of City`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=89b8855d7cff3f4d6d8e917d04d20789`;
            const response = await fetch(url);
            const data= await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            const tempMood=arrData[0].weather[0].main;
            if(tempMood=="Clear"){
                temp_status.innerHTML="<span style='color:#f5f516;'><i class='fa-solid fa-sun fa-beat-fade'></i></span>";
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML="<span style='color:#ffffff;'><i class='fa-solid fa-cloud-showers-heavy fa-beat-fade'></i></span>";
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML="<span style='color:#ffffff;'><i class='fa-solid fa-cloud fa-beat-fade'></i></span>";
            }
            else{
                temp_status.innerHTML="<span style='color:#f5f516;'><i class='fa-solid fa-sun fa-beat-fade'></i></span>";
            }
            datahide.classList.remove('data_hide');
        } 
        catch{
            city_name.innerText=`Please Enter The City Name Properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener("click",getInfo);