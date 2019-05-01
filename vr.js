function handleOrientation(event) {
    console.log(event.beta.toFixed(2)+" "+event.gamma.toFixed(2)+" "+event.alpha.toFixed(2))
    camera.rotation.x = (event.beta-90) * Math.PI/180;
    camera.rotation.z = (event.gamma) * Math.PI/180;
    camera.rotation.y = -event.alpha * Math.PI/180;
}
window.addEventListener('deviceorientation', handleOrientation);
alert("VR v0.3.1");