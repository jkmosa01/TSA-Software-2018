function handleOrientation(event) {
    camera.rotation.x = (event.beta-90) * Math.PI/180;
    camera.rotation.z = (event.gamma) * Math.PI/180;
    camera.rotation.y = -event.alpha * Math.PI/180;
}
window.addEventListener('deviceorientation', handleOrientation);
alert("VR v0.2");