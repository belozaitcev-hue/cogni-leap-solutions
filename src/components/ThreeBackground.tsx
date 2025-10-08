import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

interface ThreeBackgroundProps {
  fov?: number;
  cameraZ?: number;
  xyCoef?: number;
  zCoef?: number;
  lightIntensity?: number;
  ambientColor?: number;
  light1Color?: number;
  light2Color?: number;
  light3Color?: number;
  light4Color?: number;
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  fov = 75,
  cameraZ = 75,
  xyCoef = 50,
  zCoef = 10,
  lightIntensity = 0.9,
  ambientColor = 0x000000,
  light1Color = 0x0E09DC,
  light2Color = 0x1CD1E1,
  light3Color = 0x18C02C,
  light4Color = 0xee3bcf,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();
  
  // Состояния для настроек (точные как в оригинале)
  const [ambientIntensity, setAmbientIntensity] = React.useState(0.2);
  const [pointIntensity, setPointIntensity] = React.useState(3.0);
  const [showControls, setShowControls] = React.useState(false);
  
  // Состояния для параметров волн (как в оригинале)
  const [noiseValue, setNoiseValue] = React.useState(51); // 101 - 50 = 51
  const [heightValue, setHeightValue] = React.useState(40); // 10 * 100 / 25 = 40
  
  // Состояния для цветов
  const [light1ColorState, setLight1ColorState] = React.useState('#0E09DC');
  const [light2ColorState, setLight2ColorState] = React.useState('#1CD1E1');
  const [light3ColorState, setLight3ColorState] = React.useState('#18C02C');
  const [light4ColorState, setLight4ColorState] = React.useState('#ee3bcf');

  useEffect(() => {
    if (!canvasRef.current) {
      console.log('Canvas ref not found');
      return;
    }

    console.log('Initializing Three.js background...');
    console.log('Canvas element:', canvasRef.current);
    console.log('Canvas dimensions:', canvasRef.current.width, canvasRef.current.height);
    const canvas = canvasRef.current;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let plane: THREE.Mesh;
    let light1: THREE.PointLight;
    let light2: THREE.PointLight;
    let light3: THREE.PointLight;
    let light4: THREE.PointLight;

    let width: number, height: number, cx: number, cy: number, wWidth: number, wHeight: number;
    const noise4D = createNoise4D();

    const mouse = new THREE.Vector2();
    const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mousePosition = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    
    let isInitialized = false;

    function init() {
      try {
        console.log('Creating renderer...');
        renderer = new THREE.WebGLRenderer({ 
          canvas: canvas, 
          antialias: true, 
          alpha: true 
        });
        console.log('Renderer created:', renderer);
        console.log('Renderer canvas:', renderer.domElement);
        
        console.log('Creating camera...');
        camera = new THREE.PerspectiveCamera(fov);
        camera.position.z = cameraZ;

        updateSize();
        window.addEventListener('resize', updateSize, false);

        document.addEventListener('mousemove', (e) => {
          const v = new THREE.Vector3();
          camera.getWorldDirection(v);
          v.normalize();
          mousePlane.normal = v;
          mouse.x = (e.clientX / width) * 2 - 1;
          mouse.y = -(e.clientY / height) * 2 + 1;
          raycaster.setFromCamera(mouse, camera);
          raycaster.ray.intersectPlane(mousePlane, mousePosition);
        });


        console.log('Initializing scene...');
        initScene();
        isInitialized = true;
        
        console.log('Starting animation...');
        animate();
      } catch (error) {
        console.error('Error initializing Three.js background:', error);
      }
    }

    function initScene() {
      console.log('Creating scene...');
      scene = new THREE.Scene();
      
      console.log('Creating lights...');
      initLights();

      console.log('Creating wave surface...');
      const mat = new THREE.MeshBasicMaterial({ 
        color: 0xffffff, 
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
        vertexColors: true
      });
      
      const geo = new THREE.PlaneGeometry(wWidth, wHeight, wWidth / 2, wHeight / 2);
      plane = new THREE.Mesh(geo, mat);
      scene.add(plane);

      plane.rotation.x = -Math.PI / 2 - 0.2;
      plane.position.y = -25;
      camera.position.z = 60;
      
      console.log('Scene initialized successfully with wave surface');
      console.log('Plane position:', plane.position);
      console.log('Plane rotation:', plane.rotation);
      console.log('Camera position:', camera.position);
      console.log('Scene children count:', scene.children.length);
    }

    function initLights() {
      console.log('Adding lights...');
      
      const r = 30;
      const y = 10;
      const lightDistance = 500;

      // MeshBasicMaterial не нуждается в освещении
      // const ambientLight = new THREE.AmbientLight(0x202020, 0.2);
      // scene.add(ambientLight);
      
      console.log('Lights added successfully');
    }

    function animate() {
      if (!isInitialized || !renderer || !scene || !camera) {
        console.log('Animation skipped - not initialized:', { isInitialized, renderer: !!renderer, scene: !!scene, camera: !!camera });
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      animationIdRef.current = requestAnimationFrame(animate);

      // Анимируем волны
      animatePlane();

      renderer.render(scene, camera);
    }

    function animatePlane() {
      if (!plane || !plane.geometry || !plane.geometry.attributes.position) return;
      
      const gArray = plane.geometry.attributes.position.array as Float32Array;
      const time = Date.now() * 0.0002;
      
      // Используем параметры из инпутов как в оригинале
      const currentXyCoef = 101 - noiseValue;
      const currentZCoef = heightValue * 25 / 100;
      
      // Создаем массив цветов для вершин
      if (!plane.geometry.attributes.color) {
        const colors = new Float32Array(gArray.length);
        plane.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      }
      
      const colorArray = plane.geometry.attributes.color.array as Float32Array;
      
      for (let i = 0; i < gArray.length; i += 3) {
        const x = gArray[i];
        const y = gArray[i + 1];
        
        // Создаем волновой эффект
        const wave = noise4D(
          x / currentXyCoef, 
          y / currentXyCoef, 
          time, 
          mouse.x + mouse.y
        ) * currentZCoef;
        
        gArray[i + 2] = wave;
        
        // Создаем градиент цветов для каждой вершины
        const r = Math.sin(x * 0.01 + time) * 0.5 + 0.5;
        const g = Math.cos(y * 0.01 + time * 0.7) * 0.5 + 0.5;
        const b = Math.sin((x + y) * 0.005 + time * 1.3) * 0.5 + 0.5;
        
        // Применяем цвета к вершинам
        colorArray[i] = r;     // R
        colorArray[i + 1] = g; // G
        colorArray[i + 2] = b; // B
      }
      
      plane.geometry.attributes.position.needsUpdate = true;
      plane.geometry.attributes.color.needsUpdate = true;
    }

    function animateLights() {
      const time = Date.now() * 0.001;
      const d = 50;
      light1.position.x = Math.sin(time * 0.1) * d;
      light1.position.z = Math.cos(time * 0.2) * d;
      light2.position.x = Math.cos(time * 0.3) * d;
      light2.position.z = Math.sin(time * 0.4) * d;
      light3.position.x = Math.sin(time * 0.5) * d;
      light3.position.z = Math.sin(time * 0.6) * d;
      light4.position.x = Math.sin(time * 0.7) * d;
      light4.position.z = Math.cos(time * 0.8) * d;
    }

    function updateSize() {
      width = window.innerWidth;
      cx = width / 2;
      height = window.innerHeight;
      cy = height / 2;
      
      if (renderer && camera) {
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        const wsize = getRendererSize();
        wWidth = wsize[0];
        wHeight = wsize[1];
      }
    }

    function getRendererSize() {
      const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
      const vFOV = cam.fov * Math.PI / 180;
      const height = 2 * Math.tan(vFOV / 2) * Math.abs(cameraZ);
      const width = height * cam.aspect;
      return [width, height];
    }

    init();

    return () => {
      console.log('Cleaning up Three.js background...');
      isInitialized = false;
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', updateSize);
      if (renderer) {
        renderer.dispose();
      }
      if (plane && plane.geometry) {
        plane.geometry.dispose();
      }
      if (scene) {
        scene.clear();
      }
    };
  }, [fov, cameraZ, xyCoef, zCoef, lightIntensity, ambientColor, light1Color, light2Color, light3Color, light4Color, ambientIntensity, pointIntensity, light1ColorState, light2ColorState, light3ColorState, light4ColorState, noiseValue, heightValue]);

  return (
    <>
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ 
            background: 'transparent'
          }}
        />
      </div>
      
      {showControls && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg pointer-events-auto" style={{ zIndex: 1000 }}>
          <h3 className="text-sm font-bold mb-3">Настройки освещения</h3>
          
          <div className="space-y-3">
            <div>
              <label className="text-xs block mb-1">Ambient Light: {ambientIntensity.toFixed(1)}</label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={ambientIntensity}
                onChange={(e) => setAmbientIntensity(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="text-xs block mb-1">Point Lights: {pointIntensity.toFixed(1)}</label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={pointIntensity}
                onChange={(e) => setPointIntensity(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="border-t border-gray-600 pt-3">
              <h4 className="text-xs font-bold mb-2">Параметры волн</h4>
              
              <div className="space-y-2">
                <div>
                  <label className="text-xs block mb-1">Noise: {noiseValue}</label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={noiseValue}
                    onChange={(e) => setNoiseValue(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="text-xs block mb-1">Height: {heightValue}</label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={heightValue}
                    onChange={(e) => setHeightValue(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-600 pt-3">
              <h4 className="text-xs font-bold mb-2">Цвета источников света</h4>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs block mb-1">Свет 1</label>
                  <input
                    type="color"
                    value={light1ColorState}
                    onChange={(e) => setLight1ColorState(e.target.value)}
                    className="w-full h-8 rounded border-0"
                  />
                </div>
                
                <div>
                  <label className="text-xs block mb-1">Свет 2</label>
                  <input
                    type="color"
                    value={light2ColorState}
                    onChange={(e) => setLight2ColorState(e.target.value)}
                    className="w-full h-8 rounded border-0"
                  />
                </div>
                
                <div>
                  <label className="text-xs block mb-1">Свет 3</label>
                  <input
                    type="color"
                    value={light3ColorState}
                    onChange={(e) => setLight3ColorState(e.target.value)}
                    className="w-full h-8 rounded border-0"
                  />
                </div>
                
                <div>
                  <label className="text-xs block mb-1">Свет 4</label>
                  <input
                    type="color"
                    value={light4ColorState}
                    onChange={(e) => setLight4ColorState(e.target.value)}
                    className="w-full h-8 rounded border-0"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-1 mt-3">
            <button
              onClick={() => {
                setLight1ColorState('#0E09DC');
                setLight2ColorState('#1CD1E1');
                setLight3ColorState('#18C02C');
                setLight4ColorState('#ee3bcf');
                setAmbientIntensity(0.2);
                setPointIntensity(3.0);
                setNoiseValue(51);
                setHeightValue(40);
              }}
              className="text-xs px-2 py-1 rounded flex-1"
              style={{ backgroundColor: '#3646DE' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2B3BC7'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3646DE'}
            >
              Оригинал
            </button>
            <button
              onClick={() => setShowControls(false)}
              className="text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded flex-1"
            >
              Скрыть
            </button>
          </div>
        </div>
      )}
      
      {!showControls && (
        <button
          onClick={() => setShowControls(true)}
          className="fixed top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg pointer-events-auto text-xs"
          style={{ zIndex: 1000 }}
        >
          Настройки
        </button>
      )}
    </>
  );
};

export default ThreeBackground;
