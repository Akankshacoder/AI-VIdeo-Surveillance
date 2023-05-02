video = "";
function preload(){
video = createVideo("video.mp4");
video.hide();
}

 function setup(){
canvas = createCanvas(500, 380);
canvas.center();
 }

 function draw(){
image(video, 0, 0, 500, 480);
 }

 function start(){
  object_detector =  ml5.objectDetector("cocossd",modelLoaded)
  document.getElementById("s2").innerHTML = "Status: Objects Detecting"
 }

 function modelLoaded(){
    console.log("Model Loaded")
    status= true
    video.loop()
    video.volume(1)
    video.speed(1)
 }