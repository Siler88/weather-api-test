var json;

function getCity(){
    let buildLinkPart2 = document.getElementById("costumtext").value;
    let buildLinkPart1 = "http://api.openweathermap.org/data/2.5/weather?q="
    let buildLinkPart3 = "&appid=4cb5880ac9027cdc716c35b9adbb4f79&units=metric"
    linkToJson = buildLinkPart1 + buildLinkPart2 + buildLinkPart3;
    getJson(linkToJson)
}
function getJson(linkToJson){
    const xhr = new XMLHttpRequest()
    xhr.open ("GET", linkToJson, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            json = JSON.parse(xhr.responseText);
            fillData();
        }
    }
    xhr.send(null);
}

document.getElementById("costumtext").addEventListener("keypress", function(event){
    // todo: abfragen ob das feld leer oder voll ist vorher
    if (event.keyCode == 13){
        event.preventDefault();
        document.getElementById("form").reset();
        getCity();
    }
})

function fillData(){
    // Bild
    let img = new Image();
    img.src = "http://openweathermap.org/img/w/"+ json.weather[0].icon + ".png";
    img.alt = json.weather[0].icon;
    img.width = "60";
    img.height = "60";
    document.getElementById("imgplaceholder").appendChild(img);
    // Koordinaten
    let coordLon;
    let coordLat;
    document.getElementById("cityname").innerHTML = json.name;
    coordLon = json.coord.lon;
    coordLat = json.coord.lat;
    document.getElementById("coord").innerHTML = "Coord = " + coordLon +" / " + coordLat;
    // Wetterstatus
    let weather = json.weather[0].main;
    let weatherDescription = json.weather[0].description;
    document.getElementById("weatherstatus").innerHTML = weather
    // Temperatur
    let temp_min = json.main.temp_min;
    let temp_max = json.main.temp_max;
    document.getElementById("temp").innerHTML = "Temperature: min. " + temp_min +"C° " + " - max. "+temp_max +"C° ";
    // windgeschwindigkeiten
    let windgeschwindigkeit = json.wind.speed;
    document.getElementById("windspeed").innerHTML = "Windspeed till " +  windgeschwindigkeit+ "km/h";
}