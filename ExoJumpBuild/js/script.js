import * as THREE from '//unpkg.com/three/build/three.module.js';


window.addEventListener('resize', () => {
  const globeElement = document.getElementById('total'); //cambiar main container a 'total'
  world.width(globeElement.clientWidth).height(globeElement.clientHeight)
})

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
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-wasp-6b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-wasp-31b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-wasp-39b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-wasp-19b.png', //HD189733b
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-hat-p-12b.png', //HAT-P-12b
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-wasp-17b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-wasp-19b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-hat-p-1b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-hd209458b.png',
];

const Nubes2 = [
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail2-wasp-6b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail2-wasp-31b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-wasp-39b.png',
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail1-hat-p-1b.png', //HD189733b
  '/ExoJumpBuild/images/ExoMaterials/Clouds/detail2-hd189733b.png', //HAT-P-12b
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
  0x080317, // HAT-P-12b (azul marino profundo, evocando una atmósfera densa y oscura)
  0x66B2FF, // WASP-17b (azul claro para una atmósfera tenue y dispersa)
  0xFF9933, // WASP-19b (naranja suave que evoca una atmósfera cálida y turbulenta)
  0xB0C4DE, // HAT-P-1b (azul grisáceo para una atmósfera fría y difusa)
  0x99CCFF, // HD209458b (azul muy claro, sugiriendo nubes finas y dispersión de luz)
];



var selector = 0;
var clouds, clouds2;
const cloudGroup = new THREE.Group();

 const world = Globe()
      .globeImageUrl('https://i.ibb.co/h94JBXy/saturn3-ljge5g.jpg')
      .bumpImageUrl(null)
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
      const atmosphereGeometry = new THREE.SphereGeometry(world.getGlobeRadius() * (1 + 0.009), 75, 75);
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


// Selecciona el elemento del título
const planetTitle = document.getElementById('planet-title');

// Función para actualizar el título
function updatePlanetTitle(planetName) {
    planetTitle.textContent = planetName; // Cambia el texto del título
}

// Añade eventos a los botones de planetas
document.getElementById('WASP-6b').addEventListener('click', () => updatePlanetTitle('WASP-6b'));
document.getElementById('WASP-31b').addEventListener('click', () => updatePlanetTitle('WASP-31b'));
document.getElementById('WASP-39b').addEventListener('click', () => updatePlanetTitle('WASP-39b'));
document.getElementById('HD189733b').addEventListener('click', () => updatePlanetTitle('HD189733b'));
document.getElementById('HAT-P-12b').addEventListener('click', () => updatePlanetTitle('HAT-P-12b'));
document.getElementById('WASP-17b').addEventListener('click', () => updatePlanetTitle('WASP-17b'));
document.getElementById('WASP-19b').addEventListener('click', () => updatePlanetTitle('WASP-19b'));
document.getElementById('HAT-P-1b').addEventListener('click', () => updatePlanetTitle('HAT-P-1b'));
document.getElementById('HD209458b').addEventListener('click', () => updatePlanetTitle('HD209458b'));


// Array de descripciones de los planetas
const planetDescriptions = [
  "WASP-6b is scorching hot and has a dense atmosphere filled with tiny particles and scattered clouds. Despite having only about one-third of Jupiter's mass, its radius is nearly the same, making it unusually large for its weight. The thick atmosphere might play a role in its size, trapping heat and gases, which keeps the planet puffed up. Scientists are intrigued by this strange combination of light mass and large size, making it a unique world to study.",
  'WASP-31b is a massive gas planet, even larger than our Sun! Its bright clouds reflect a lot of light, making it one of the most reflective planets we know of. These clouds are made up of special particles that scatter starlight, giving the planet a glowing appearance. Being such a giant, it’s a fascinating target for scientists trying to understand how these distant, gas-filled worlds form and evolve.',
  'WASP-39b was the first one ever studied by the powerful James Webb Space Telescope! Its atmosphere is like a swirling fog, making it mysterious and hard to see clearly. The blue color comes from its special gases that reflect starlight in a unique way. Scientists are fascinated by it because they think its hazy atmosphere might hold clues about what these distant worlds are really like.',
  "HD 189733b is a wild planet with powerful storms and thick, gray clouds. But what makes it really amazing is its weather—it rains glass! Winds on this planet blow at incredible speeds, making tiny glass particles whip through the air like a storm of sharp crystals. It's a dangerous and extreme world, very different from anything we see on Earth!",
  "HAT-P-12b is a mysterious planet with a thick, dark atmosphere, making it really hard to see directly. Its atmosphere blocks out most of the light, keeping it hidden from view. What’s really cool is that its official name, 'Puli,' comes from a breed of Hungarian dogs! Scientists are still working to uncover the secrets of this shadowy world, but its dense atmosphere makes it a real challenge to study.",
  'WASP-17b is one of the largest exoplanets ever discovered! Its atmosphere is thin and clear, letting lots of light pass through. But here’s something really cool—this planet orbits its star backwards! Most planets orbit in the same direction that their star spins, but WASP-17b moves the other way, making it a rare and fascinating world for scientists to study.',
  'WASP-19b is a blazing hot planet with a turbulent, swirling atmosphere. What’s incredible is how fast it moves—it takes less than a single day to orbit around its star! Imagine a year flying by in just 18 hours. Its close orbit to the star makes it superheated, creating wild storms in its thick atmosphere. This makes WASP-19b a fast and furious world that scientists love to explore.',
  'HAT-P-1b has a cold and diffuse atmosphere that scatters light in a soft, gentle way, giving it a faint glow. But here’s something curious—this planet is much puffier than expected! Even though it’s about the size of Jupiter, it’s surprisingly lightweight, almost like a big balloon floating in space. Scientists are still trying to figure out why it’s so puffed up, making it a mystery in the galaxy.',
  'HD 209458b is one of the first exoplanets ever discovered, and it has a clear, bluish atmosphere. But here’s an amazing detail—it’s one of the few planets where scientists have actually observed its atmosphere escaping into space! The intense heat from its nearby star is causing gases to stream off the planet like a long tail, almost like a comet. This makes HD 209458b a trailblazer in exoplanet studies and a true wonder to explore!'
];

// Selecciona el elemento para la descripción
const planetDescriptionElement = document.querySelector('.informacion p');

// Función para actualizar la descripción del planeta
function updatePlanetDescription(description) {
  planetDescriptionElement.textContent = description; // Cambia el texto de la descripción
}

// Añade eventos a los botones de planetas para cambiar la descripción
document.getElementById('WASP-6b').addEventListener('click', () => updatePlanetDescription(planetDescriptions[0]));
document.getElementById('WASP-31b').addEventListener('click', () => updatePlanetDescription(planetDescriptions[1]));
document.getElementById('WASP-39b').addEventListener('click', () => updatePlanetDescription(planetDescriptions[2]));
document.getElementById('HD189733b').addEventListener('click', () => updatePlanetDescription(planetDescriptions[3]));
document.getElementById('HAT-P-12b').addEventListener('click', () => updatePlanetDescription(planetDescriptions[4]));
document.getElementById('WASP-17b').addEventListener('click', () => updatePlanetDescription(planetDescriptions[5]));
document.getElementById('WASP-19b').addEventListener('click', () => updatePlanetDescription(planetDescriptions[6]));
document.getElementById('HAT-P-1b').addEventListener('click', () => updatePlanetDescription(planetDescriptions[7]));
document.getElementById('HD209458b').addEventListener('click', () => updatePlanetDescription(planetDescriptions[8]));
