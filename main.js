noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
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
    background("gainsboro");
    fill("Dodgerblue");
    stroke("black");
text('hi!' , noseX , noseY);
textSize(difference);
}
function modelLoaded () {
    console.log("poseNet is Initialized");
}

function gotPoses(results) {
if (results.length > 0) {
    console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("nose x = " + noseX);
console.log("nose y = " + noseY);
console.log("left wrist  x = " + leftWristX);
console.log("right wrist x = " + rightWristX);
console.log("difference = " + difference);
}
}