var ship, frontVector, backVector, directionVector;

frontVector = new THREE.Vector3(0, 0, 0);
backVector = new THREE.Vector3(0, 0, 0);
directionVector = new THREE.Vector3(0, 0, 0);


function Player() {


    var startVector = new THREE.Vector3(0, 0, 0);
    var endVector = new THREE.Vector3(0, 0, 0);
    var particleRay;


    function createRay() {
        particleRay = new RayParticleRenderer(0x2255ff, 100, fileLoader.get("particle"), startVector, endVector);
    }
    createRay();

    return {

        init: function () {
            var geometry = fileLoader.get("HeroShipV5");
            var texture = fileLoader.get("TextureHero");

            ship = new THREE.Mesh(
                geometry,
                new THREE.MeshPhongMaterial({map: texture})
            );


            ship.position.set(0, 0, 0);
            scene.add(ship);

        },
        updateParticleValues: function () {
            particleRay.reset();
            createRay();
            var pos = ship.position;

            //Default Front-Facing
            var dirVector = new THREE.Vector3(0, 0, 1);
            //Apply rotation of Mesh
            dirVector.applyQuaternion(ship.quaternion);

            var startScale = 8;
            startVector = new THREE.Vector3(
                pos.x + startScale * dirVector.x,
                pos.y + startScale * dirVector.y,
                pos.z + startScale * dirVector.z
            );
            var endScale = 10;
            endVector = new THREE.Vector3(
                pos.x + endScale * dirVector.x,
                pos.y + endScale * dirVector.y,
                pos.z + endScale * dirVector.z
            );


            // particleRay.updateStartAndEndpoint(startVector, endVector);
            particleRay.update();
        }
    };

}







