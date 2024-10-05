import * as THREE from '//unpkg.com/three/build/three.module.js';

const Bases = [
  '/ExoJumpBuild/images/ExoMaterials/Bases/base-wasp-6b.jpg',
  '/ExoJumpBuild/images/ExoMaterials/Bases/base-wasp-31b.jpg',
  '/ExoJumpBuild/images/ExoMaterials/Bases/base-wasp-39b.jpg',
  '/ExoJumpBuild/images/ExoMaterials/Bases/base-hd189733b.jpg',
  '/ExoJumpBuild/images/ExoMaterials/Bases/base-hat-p-12b.jpg',
  '/ExoJumpBuild/images/ExoMaterials/Bases/base-wasp-17b.jpg',
  '/ExoJumpBuild/images/ExoMaterials/Bases/base-wasp-19b.jpg',
  '/ExoJumpBuild/images/ExoMaterials/Bases/base-hat-p-1b.jpg',
  '/ExoJumpBuild/images/ExoMaterials/Bases/base-hd209458b.jpg',
];

const bumps = [
  'blob_https___eyes.nasa.gov_1b749ce8-1b92-4c18-8fab-07d45c6257d7',
  'blob_https___eyes.nasa.gov_1b749ce8-1b92-4c18-8fab-07d45c6257d7',
  'blob_https___eyes.nasa.gov_1b749ce8-1b92-4c18-8fab-07d45c6257d7',
  'blob_https___eyes.nasa.gov_1b749ce8-1b92-4c18-8fab-07d45c6257d7',
  'blob_https___eyes.nasa.gov_1b749ce8-1b92-4c18-8fab-07d45c6257d7',
  'blob_https___eyes.nasa.gov_1b749ce8-1b92-4c18-8fab-07d45c6257d7',
  'blob_https___eyes.nasa.gov_1b749ce8-1b92-4c18-8fab-07d45c6257d7',
  'blob_https___eyes.nasa.gov_1b749ce8-1b92-4c18-8fab-07d45c6257d7',
  'blob_https___eyes.nasa.gov_1b749ce8-1b92-4c18-8fab-07d45c6257d7',
];

const Nubes = [
  '/ExoJumpBuild Build/images/ExoMaterials/Clouds/detail1-wasp-6b.png',
  '/ExoJumpBuild Build/images/ExoMaterials/Clouds/detail1-wasp-31b.png',
  '/ExoJumpBuild Build/images/ExoMaterials/Clouds/detail1-wasp-39b.png',
  '/ExoJumpBuild Build/images/ExoMaterials/Clouds/detail1-hd189733b.png',
  '/ExoJumpBuild Build/images/ExoMaterials/Clouds/detail1-hat-p-12b.png',
  '/ExoJumpBuild Build/images/ExoMaterials/Clouds/detail1-wasp-17b.png',
  '/ExoJumpBuild Build/images/ExoMaterials/Clouds/detail1-wasp-19b.png',
  '/ExoJumpBuild Build/images/ExoMaterials/Clouds/detail1-hat-p-1b.png',
  '/ExoJumpBuild Build/images/ExoMaterials/Clouds/detail1-hd209458b.png',
];

const Nubes2 = [
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail2-wasp-6b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail2-wasp-31b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-wasp-39b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail2-hd189733b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail2-hat-p-12b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail2-wasp-17b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail2-wasp-19b.png',
  'null',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-hd209458b.png',
];

const Velocidades = [
  0.5,  // WASP-6b
  0.8,  // WASP-31b
  1.2,  // WASP-39b
  -1.5,  // HD189733b
  1.1,  // HAT-P-12b
  -0.3,  // WASP-17b
  0.7,  // WASP-19b
  1.0,  // HAT-P-1b
  -0.9   // HD209458b
];


const atmosfera = [
  0xE67300, // WASP-6b (naranja intenso para una atmósfera cálida)
  0x99CCFF, // WASP-31b (azul claro representando nubes brillantes y dispersión de luz)
  0x6699FF, // WASP-39b (azul medio para una atmósfera más fría y brumosa)
  0x808080, // HD189733b (gris para nubes densas y tormentosas)
  0x00264D, // HAT-P-12b (azul marino profundo, evocando una atmósfera densa y oscura)
  0x66B2FF, // WASP-17b (azul claro para una atmósfera tenue y dispersa)
  0xFF9933, // WASP-19b (naranja suave que evoca una atmósfera cálida y turbulenta)
  0xB0C4DE, // HAT-P-1b (azul grisáceo para una atmósfera fría y difusa)
  0x99CCFF, // HD209458b (azul muy claro, sugiriendo nubes finas y dispersión de luz)
];



var selector = 0;
var clouds, clouds2;
const cloudGroup = new THREE.Group();

 const world = Globe()
      .globeImageUrl(Bases[selector])
      .bumpImageUrl(bumps[selector])
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      (document.getElementById('globeViz'));

    // Configuración de luces
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz blanca, intensidad 1
    directionalLight.position.set(2, 1, 1).normalize(); // Posición de la luz
    world.scene().add(directionalLight); // Agrega la luz direccional a la escena

    const ambientLight = new THREE.AmbientLight(0x404040); // Luz ambiental
    world.scene().add(ambientLight); // Agrega la luz ambiental a la escena

    // Continuar con tu código...
    function createAtmosphere() {
      const atmosphereGeometry = new THREE.SphereGeometry(world.getGlobeRadius() * (1 + 0.008), 75, 75);
      const atmosphereMaterial = new THREE.MeshPhongMaterial({
        color: atmosfera[selector],
        transparent: true,
        opacity: 0.2,
        depthWrite: false
      });

      const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      cloudGroup.add(atmosphereMesh);
    }

function loadClouds() {
  cloudGroup.clear();

  new THREE.TextureLoader().load(Nubes[selector], cloudsTexture => {
    clouds = new THREE.Mesh(
      new THREE.SphereGeometry(world.getGlobeRadius() * (1 + 0.004), 75, 75),
      new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true, depthWrite: false })
    );
    cloudGroup.add(clouds);
    rotateClouds(clouds);
  });

  new THREE.TextureLoader().load(Nubes2[selector], cloudsTexture2 => {
    clouds2 = new THREE.Mesh(
      new THREE.SphereGeometry(world.getGlobeRadius() * (1 + 0.004 + 0.002), 75, 75),
      new THREE.MeshPhongMaterial({ map: cloudsTexture2, transparent: true, depthWrite: false })
    );
    cloudGroup.add(clouds2);
    rotateClouds(clouds2);
  });

  world.scene().add(cloudGroup);
  createAtmosphere();
}

function rotateClouds(cloudsMesh, direction = 1) {
  (function rotate() {
    cloudsMesh.rotation.y += .02 * direction * Math.PI / 180;
    requestAnimationFrame(rotate);
  })();
}

// Inicializa los botones
const buttons = [
  'WASP-6b',
  'WASP-31b',
  'WASP-39b',
  'HD189733b',
  'HAT-P-12b',
  'WASP-17b',
  'WASP-19b',
  'HAT-P-1b',
  'HD209458b'
];

let rotationSpeed = Velocidades[selector]; // Initial rotation speed
buttons.forEach((id, index) => {
  document.getElementById(id).addEventListener('click', function() {
    selector = index;
    world.globeImageUrl(Bases[selector]);
    world.bumpImageUrl(bumps[selector]);
    rotationSpeed = Velocidades[selector]; // Set the rotation speed based on the selected planet
    loadClouds();
    world.controls().autoRotateSpeed = rotationSpeed; // Update the auto rotate speed
  });
});

// Cargar nubes inicialmente
loadClouds();

let toggleState = true; // Estado inicial
world.controls().autoRotate = toggleState;
world.controls().autoRotateSpeed = rotationSpeed;

document.getElementById('AutoRotate').addEventListener('click', function() {
    toggleState = !toggleState; // Cambiar el estado
    console.log(toggleState); // Muestra el estado en la consola (opcional)
    world.controls().autoRotate = toggleState; // Actualiza el autoRotate
});

document.getElementById('speedSlider').addEventListener('input', function() {
  rotationSpeed = parseFloat(this.value); // Obtener el valor actual del slider
  world.controls().autoRotateSpeed = rotationSpeed; // Actualiza la velocidad de rotación
  console.log("Velocidad de rotación:", rotationSpeed); // Muestra la velocidad en la consola
});
