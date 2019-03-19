function newHemisphereLight(skyColor, groundColor, intensity) {
    let light = new THREE.HemisphereLight(color, intensity/100);
    light.name = "Hemisphere light";
    lights[lights.length] = light;
    scene.add(light);
    selectedLight = lights.length - 1;
    setSelectedLight(selectedLight);
}