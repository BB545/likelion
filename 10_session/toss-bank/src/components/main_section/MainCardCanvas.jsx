import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const modelURLs = {
    ORANGEMILK: "https://static.toss.im/gltfs/toss-bank-card-v1-orange.glb",
    PURPLEGREEN: "https://static.toss.im/gltfs/toss-bank-card-v1-purple.glb",
    LEMONBLUE: "https://static.toss.im/gltfs/toss-bank-card-v1-lemon.glb",
    NIGHTPINK: "https://static.toss.im/gltfs/toss-bank-card-v1-black.glb",
    WHITEBLACK: "https://static.toss.im/gltfs/toss-bank-card-white-master-resize.gltf"
};

const previewImages = {
    ORANGEMILK: "https://static.toss.im/3d/toss-bank-card-orange-gltf-still.png",
    PURPLEGREEN: "https://static.toss.im/3d/toss-bank-card-purple-gltf-still.png",
    LEMONBLUE: "https://static.toss.im/3d/toss-bank-card-yellow-gltf-still.png",
    NIGHTPINK: "https://static.toss.im/3d/toss-bank-card-black-gltf-still.png",
    WHITEBLACK: "https://static.toss.im/3d/toss-bank-card-white-gltf-still.png"
};

const cardBtnImages = {
    ORANGEMILK: "https://asset-fe.tossbank.com/card/chip-orangemilk.png",
    PURPLEGREEN: "https://asset-fe.tossbank.com/card/chip-puplegreen.png",
    LEMONBLUE: "https://asset-fe.tossbank.com/card/chip-lemonblue.png",
    NIGHTPINK: "https://asset-fe.tossbank.com/card/chip-nightpink.png",
    WHITEBLACK: "https://static.toss.im/illusts/chip-whiteblack.png"
};

const MainCardCanvas = () => {
    const canvasRef = useRef();
    const [selectedColor, setSelectedColor] = useState("ORANGEMILK");
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const currentCardRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(17, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
        hemisphereLight.position.set(0, 20, 0);
        scene.add(hemisphereLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;
        controls.minDistance = 5;
        controls.maxDistance = 20;
        controls.enableZoom = false;

        let cardModel;
        const loader = new GLTFLoader();

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader);

        const loadModel = () => {
            if (cardModel) {
                setFadeIn(false);
            }
            setIsModelLoaded(true);
            setTimeout(() => {
                loader.load(
                    modelURLs[selectedColor],
                    (gltf) => {
                        if (cardModel) {
                            currentCardRef.current.position.copy(cardModel.position);
                            currentCardRef.current.rotation.copy(cardModel.rotation);

                            scene.remove(cardModel);
                        }
                        cardModel = gltf.scene;

                        cardModel.position.copy(currentCardRef.current ? currentCardRef.current.position : new THREE.Vector3());
                        cardModel.rotation.copy(currentCardRef.current ? currentCardRef.current.rotation : new THREE.Euler());

                        cardModel.scale.set(0.015, 0.01, 0.01);
                        currentCardRef.current = cardModel;
                        scene.add(cardModel);

                        setFadeIn(true);
                    },
                    undefined,
                    (error) => console.error("Error loading model:", error)
                );
            }, fadeIn ? 0 : 500);
        };

        loadModel();

        const animate = () => {
            requestAnimationFrame(animate);
            if (cardModel) {
                cardModel.rotation.y += 0.02;
            }
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            renderer.dispose();
            controls.dispose();
        };
    }, [selectedColor]);

    return (
        <div id="items_cards_box">
            <div id="card_canvas_area">
                <div id="canvas_box">
                    <div id="canvas_inner">
                        <div id="canvas_inner_box">
                            <div id="canvas_inner_item">
                                <canvas id="canvas" ref={canvasRef} style={{
                                    opacity: fadeIn ? 1 : 0,
                                    transition: "opacity 0.1s ease-in-out",
                                    display: isModelLoaded ? 'block' : 'none'
                                }}></canvas>
                                {!isModelLoaded && (
                                    <img
                                        src={previewImages[selectedColor]}
                                        alt="Card Preview"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="canvas_color">
                    <div id="canvas_color_list" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        {Object.keys(modelURLs).map(colorKey => (
                            <button
                                className={`btn color_list_select ${selectedColor === colorKey ? 'active' : ''}`}
                                key={colorKey}
                                style={{
                                    background: `url(${cardBtnImages[colorKey]}) center center / 100% no-repeat`,
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    outline: 'none',
                                }}
                                onClick={() => setSelectedColor(colorKey)}
                                aria-label={colorKey}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCardCanvas;