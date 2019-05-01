function handleOrientation(event) {
    console.log("Event");
    var x = event.beta; //left right
    var y = event.gamma; //side to side
    var z = event.alpha; //twist
    // alert(x+" "+y+" "+z);
    camera.rotation.x = event.beta * Math.PI/180;
    camera.rotation.y = event.gamma * Math.PI/180;
    camera.rotation.y = event.alpha * Math.PI/180;
}
window.addEventListener('deviceorientation', handleOrientation);