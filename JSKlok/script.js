//Created by Erik Thornton 09/14/2016


//background color array set to 1 second change interval
var colorArray = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

var count = 0;

function startTime() {
    document.body.style.backgroundColor = colorArray[count];
        count++;
        if(count == colorArray.length) {
            count = 0;
}
// set clock function and associate with div 'time'
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);

   //large font for easy visability
    document.getElementById("time").style.fontFamily = "Impact,Charcoal,sans-serif";


}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    
    return i;

}





// former version involved 2 functions

    // setInterval(function(){
    //     change();
    // }, 1000);

    // setInterval(startTime, 1000);
    // setInterval(change, 1000);
