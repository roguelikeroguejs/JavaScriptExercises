function stopLight(){
    var lightChange;
    var lightColor = document.getElementById("elem1").style.color;
    //document.write(lightColor)
    switch (lightColor){
        case "green":
            lightChange = "yellow";
            break;
        case "yellow":
            lightChange = "red";
            break;
        default:
            lightChange = "green"

    }
    document.getElementById("elem1").style.color = lightChange;

}