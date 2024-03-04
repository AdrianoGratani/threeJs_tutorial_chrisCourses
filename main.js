import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'; // 0.126.1  altrimenti una v troppo recente non e' supportata sulla tua GPU


// OUR 'SCENE':
const scene = new THREE.Scene();
// OUR 'CAMERA':
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
// OUR 'RENDERER', to put `scene` and `camera` together:
const renderer = new THREE.WebGLRenderer();



                                                            // prima di fare append di domElement di renderer nel document, stabiliamo la dimensione di renderer usando setSize(), un method di three.js:
renderer.setSize(window.innerWidth, window.innerHeight)     // the 'window' reference here is not strictly necessary, since you are referencing a window property in the window object, nonetheless at least for sake of clarity and didactic purposes, being pedantic is welcomed at these first stages with this framework
                                                            // still there is a small padding due to the default styling of the body element in the browser.
                                                            // metto il renderer nel DOM, compare un riquadro nero, un canvas, dentro verra' rappresentata la 'scene', con i 3D objects:
renderer.setPixelRatio(devicePixelRatio)                      // to avoid jagged shapes you should reset the default pixel ratio for each shape acordinly to your specific device

document.body.appendChild(renderer.domElement);

                                                            // una volta creata la scene la camera e il renderer, una volta fatto setSize di renderer e dopo aver fattoappendChild del domElement di renderer nel body, la prima fase di inizializzione della nostra 'canvas' in Three.js e' pronta.

// 1. crea un box
// const boxGeometry = new THREE.BoxGeometry(1, 1, 1)                 // !!solved: CAPITAL B// una boxGeometry di Three.js prende TRE PARAMETRI: length, width height
//                                                                    // create a MATERIAL and then MESH in order to see the this shape in the screen in the browser
// const material = new THREE.MeshBasicMaterial({color: 0x00FF00})                   // give a color to the shape with an object as parameter. colors in HEX
//                                                                    // combine the previous two as PARAMETERS in a new MESH to display the shape with the colors;
// const mesh = new THREE.Mesh(boxGeometry, material);

                                                                  // now it's time to do the RENDERING by calling the add() method over scene with the mesh as parameter
                                                                  // and then use the .render() method over renderer
// scene.add(mesh);                                                  // la scene adesso ha il mesh di geometry e material, forma e colore,


camera.position.z = 5;                                            // la camera e' il tuo occhio, digli dove posizionarsi;
                                                                  // usa .render() sul renderer con scene come parametro e la videoacamera, il nostro occhio, come secondo parametro;
const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10)
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000,  side: THREE.DoubleSide})
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(planeMesh)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)                                     // bisogna mettere renderer nell'infinite loop per garantire la sua animaione aggirnata;
    // box animation
    // mesh.rotation.x += 0.05
    // mesh.rotation.y += 0.05

    // planeMesh.rotation.x += 0.01
}

animate()





