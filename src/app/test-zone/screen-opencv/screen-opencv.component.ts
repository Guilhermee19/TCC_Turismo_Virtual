import { Component, OnInit } from '@angular/core';

import * as THREE from '../../../assets/libs/three.js';
import { GLTFLoader } from './lib/GLTFLoader.js';

@Component({
    selector: 'app-screen-opencv',
    templateUrl: './screen-opencv.component.html',
    styleUrls: ['./screen-opencv.component.css']
})
export class ScreenOpencvComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
        // https://threejs.org/docs/#manual/en/introduction/Loading-3D-models

        const loader = new GLTFLoader();
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 3, 0 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth-19, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        scene.background = new THREE.Color( 0xffffff );

        loader.load( '../../../assets/modelo3D/MonumentoDedoDeDeus.gltf', function ( gltf ) {

            scene.add( gltf.scene );
        
        });

        camera.position.z = 105;

        renderer.render( scene, camera );
    }

}
