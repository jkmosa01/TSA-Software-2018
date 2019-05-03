function handleOrientation(event) {
    console.log(event.beta.toFixed(2)+" "+event.gamma.toFixed(2)+" "+event.alpha.toFixed(2))
    // camera.rotation.z = (event.beta-180) * Math.PI/180;
    camera.rotation.x = (event.gamma+90) * Math.PI/180;
    camera.rotation.y = (event.alpha+90) * Math.PI/180;
}
window.addEventListener('deviceorientation', handleOrientation);
alert("VR v0.5");
