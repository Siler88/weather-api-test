var json;
var linkToJson;
function getCity(){
    let buildLinkPart2 = document.getElementById("costumtext").value;
    let buildLinkPart1 = "http://api.openweathermap.org/data/2.5/weather?q="
    let buildLinkPart3 = "&appid=4cb5880ac9027cdc716c35b9adbb4f79"
    linkToJson = buildLinkPart1 + buildLinkPart2 + buildLinkPart3;
    console.log(linkToJson);
    buildDiv(linkToJson);
}
function getJson(){
    const xhr = new XMLHttpRequest()
    xhr.open ("GET", linkToJson, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            json = JSON.parse(xhr.responseText);
            buildDiv();
            console.log("parsed");
        }
    }
    xhr.send(null);
}
function buildDiv(e){
    let test = document.createElement("div");
    test.innerHTML = e;
    document.getElementsByClassName("secondhalfcontainer")[0].appendChild(test);
}
document.getElementById("costumtext").addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
        document.getElementById("form").reset();
        getCity();
    }
});