function preload() {

}
function setup() {
canvas = createCanvas(500 , 500);
canvas.center();
video = createCapture(VIDEO);
video.size(500 , 500);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);

}
function draw() {

}
function modelLoaded () {
    console.log("poseNet is Initialized");
}

function gotPoses(results) {
if (results.length > 0) {
    console.log(results);
}
}