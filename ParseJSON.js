// JavaScript source code





fetch("Homework.JSON")
    .then (response => response.json())
    .then(data => {
        console.log( data )
        //console.log("This is a console log.")
        document.querySelector("#debug").innertext = data
    })

//let jsonData = JSON.parse(pufferfish);
//console.log (jsondata.temperatureF[0]);

