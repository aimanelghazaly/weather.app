const apikey="ffdc371be02c79617d6d026f51f375a0";
const weatherDataEl=document.getElementById("weather-data")
const cityInputEl=document.getElementById("city-input")
const formEl=document.querySelector("form")
formEl.addEventListener("submit",(event )=>{
    event.defaultPrevented();
})