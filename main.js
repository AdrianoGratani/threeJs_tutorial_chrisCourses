import * as dat from 'dat.gui';
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'; // 0.126.1  altrimenti una v troppo recente non e' supportata sulla tua GPU
// console.log(dat)    // to check if dependency is working;

const gui = new dat.GUI();               // to use dat.gui you ha ve to instanciate
const world = {               // crei un oggetto per conservare la proprieta da manipolare tramite dat.gui
    plane: {
        width: 10
    }
}
// ti serve un event listener per collegare dat.gui ad un effettivo cambiamento estetico, e le sue keys devono essere messe in relazione con il planematerial;
gui.add(world.plane, 'width', 1, 20).onChange(                            // mandi la proprieta a dat.gui , add min and max values to the default which is 10
    () => {
                                                                                                     //console.log(planeMesh.geometry)
       planeMesh.geometry.dispose();                                                              /// get rid of the previous data == constant re update when onChange is true
       planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width, 10, 10, 10)                 // as you scroll width in dat.gui, width gets updated = the width of planeGeometry gets updated to data stored in the object
    
        // console.log(planeMesh.geometry.attributes.position.array)
        const {array} = planeMesh.geometry.attributes.position;
        for (let i = 0; i < array.length; i+=3){
        const x = array[i]
        const y = array[i+1]
        const z = array[i+2];

        array[i + 2] = z + Math.random();
    }
}
);




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
// scene.add(mesh);                                               // la scene adesso ha il mesh di geometry e material, forma e colore,


camera.position.z = 5;                                            // la camera e' il tuo occhio, digli dove posizionarsi;
                                                                  // usa .render() sul renderer con scene come parametro e la videoacamera, il nostro occhio, come secondo parametro;
const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10)
// const planeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000,  side: THREE.DoubleSide})    // MeshBasicMaterial doesn't react to light effects

const planeMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide, flatShading: THREE.FlatShading });    // MeshPhong Materials react to light effects. you have to create a light to see this material;

const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(planeMesh)

// Mesh object has all the infos we need to creat the JAGGED effect in our plane:
// Mesh.geometry.attributes.position.array.[0-99]
console.log(planeMesh.geometry.attributes.position.array)
// puoi modificare questo array per creare degli effetti di luce usando un for loop:  for (let i = 0; i < arrayLength; i++){ // do something }
// first, for readability sake apply object destructuring to the Mesh object so that you can easily access the position object in your for loop:
const {array} = planeMesh.geometry.attributes.position;   // now you can access the Mesh object, specifically the arrays concerning its lighting position, through referencing `array`;
// console.log(array)
for (let i = 0; i < array.length; i+=3){                         //IMPORTANT: this array data is set: 1 x  2 y 3 z and so on. if you skip 2 and 3, it will console log only the z value;
    const x = array[i]
    const y = array[i+1]
    const z = array[i+2];
    
    // console.log(`x at ${i}: ${x}`);                                     // to check if array and this loop works
    // console.log(`y at ${i+1}: ${y}`);
    // console.log(`z at ${i+2}: ${z}`);

    // can alter the geometry by changing x y or z values;
    // array[i] = x + 3;   // move to the right;
    // change the z: closer, furthest, change shape assigning a Math.random to each iteration on z:
    // array[i + 2] = z - 6;    // lontano
    // array[i + 2] = z + 3;    // closer
    array[i + 2] = z + Math.random();   // still, the plane looks flat; you have to add a new property to the phong in the MeshPhongMaterial: THREE.flatShading();

}





// light for the Phong, two args color and intensity:
const light = new THREE.DirectionalLight(0xffffff, 1);            // not enough yet: you have to position this light in our scene
// position of the light using .set(), three args, x y z:
light.position.set(0, 0, 1);                                       // now you have to .add() the light to the scene as arg
// add the light to the scene:
scene.add(light);                                                  // now, the light is visible. you created the light, you assigned poosition coordinates the light, you added the light with those specific coordinates in the scene;


function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)                                     // bisogna mettere renderer nell'infinite loop per garantire la sua animaione aggirnata;
    // box animation:
    // mesh.rotation.x += 0.05
    // mesh.rotation.y += 0.05

    // planeMesh.rotation.x += 0.01
}

animate()





