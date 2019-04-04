function newSphere(x, y, z, posX, posY, posZ, newColor, borderColor){
    var newGeometry = new THREE.SphereGeometry( 0.5, 100,100);
    var newMaterial = new THREE.MeshLambertMaterial({color: newColor});
    newMaterial.lights = true;
    shapes[shapes.length]=new THREE.Mesh(newGeometry, newMaterial);
    var length = scales.length;
    newGeometry.name = "sphere"
    scales[length]=[];
    scales[length][0]=x;
    scales[length][1]=y;
    scales[length][2]=z;
    scene.add(shapes[shapes.length-1]);
    selectedShape = shapes.length-1;
    var geometry = new THREE.SphereBufferGeometry( 0.5, 100,100);
    var edges = new THREE.EdgesGeometry( geometry );
    var borderToAdd = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: borderColor } ) );
    borderToAdd.scale.x = x;
    borderToAdd.scale.y = y;
    borderToAdd.scale.z = z;
    borders.push(borderToAdd);
    scene.add( borderToAdd );
    setSelectedShape(selectedShape);
    moveShape("x", posX);
    moveShape("y", posY);
    moveShape("z", posZ);

    document.getElementById('dimensionX').value = x;
    document.getElementById('dimensionY').value = y;
    document.getElementById('dimensionZ').value = z;

    document.getElementById('positionBoxX').value = posX;
    document.getElementById('positionBoxY').value = posY;
    document.getElementById('positionBoxZ').value = posZ;
}