
function draw() {
    
}
function setup() {
    video=createCapture(VIDEO)
    video.size(350,350)
    canvas=createCanvas(350,350)
    posenet=ml5.poseNet(video,model_loaded)
    posenet.on('pose',got_poses)
}
function model_loaded() {
    console.log("Posenet is loaded")
}
function got_poses(results) {
    if (results.length>0) {
        console.log(results)
    }
}