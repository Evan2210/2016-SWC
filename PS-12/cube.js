// JavaScript Document
var scene = new THREE.Scene();
var meshes = [];

// OrthographicCamera( left, right, top, bottom, near, far )
var orthoCamera = new THREE.OrthographicCamera(-50, 10, 10, -10, -10,1000);

// PerspectiveCamera( fov, aspect, near, far )
var camera = new THREE.PerspectiveCamera( 5, 1 , 0.1, 2000 );
camera.position.x = 50;
camera.position.y =10;
camera.position.z = 100;
camera.lookAt({x:0,y:0,z:0});

var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas"),
  antialias: true,
  preserveDrawingBuffer: false,
  alpha: true
});
renderer.setSize(500, 500);

var directionalLight = new THREE.DirectionalLight('white', 0.5);
var light = new THREE.AmbientLight('white', 0.5);
directionalLight.position.set(0, 5, 6);
scene.add(directionalLight);
scene.add(light);

loadMesh('little', function(obj){
  obj.position.y = -8.8;
  obj.scale.x =2
  obj.scale.y =2
  obj.scale.z =2
  addMesh(obj);
});

render();

function addMesh(mesh) {
  meshes.push(mesh);
  scene.add(mesh);
}

function render() {
  window.requestAnimationFrame(this.render.bind(this));
  meshes.forEach(function(mesh) {
    mesh.rotateY(0.01);
  })
  renderer.render(scene, camera);
};

function loadMesh(name, callback){
  var objLoader = new THREE.OBJLoader();
  var matLoader = new THREE.MTLLoader();
  matLoader.load(name + '.mtl', function(materials) {
    materials.preload();
    objLoader.setMaterials(materials);
    objLoader.load(name + '.obj',function (obj) {
      callback(obj);
    });
  });
};
