import * as THREE from 'https://unpkg.com/three@0.161.0/build/three.module.js';


// OUR 'SCENE':
const scene = new THREE.Scene();
// OUR 'CAMERA':
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
// OUR 'RENDERER', to put `scene` and `camera` together:
const renderer = new THREE.WebGLRenderer()


console.log(scene);
console.log(camera);
console.log(renderer);