let scene, camera, renderer, sphere;

function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	renderer = new THREE.WebGLRenderer({ abtialias: true});

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.SphereGeometry( 5, 32, 16 );
	const texture = new THREE.TextureLoader().load('sphere_texture.jpg');
	const material = new THREE.MeshBasicMaterial( { map: texture } );
	sphere = new THREE.Mesh( geometry, material );
	scene.add( sphere );

	camera.position.z = 15;	

} 

function animate() {
	requestAnimationFrame(animate);

	sphere.rotation.x += 0.005;
	sphere.rotation.y += 0.005;

	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = window.inner / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();

