function preload(){
    
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
}
function draw(){

}
function take_snapshot(){
    save("reubenrex.png");
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);

    }
}
