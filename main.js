var speechRecognition = window.webkitSpeechRecognition;
var Recognition = new speechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
}