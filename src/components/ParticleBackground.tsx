import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import gsap from 'gsap';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseEffectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      15,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const radii = [
      1, 0.6, 0.8, 0.4, 0.9, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.5, 0.6, 0.7, 0.3, 0.4, 0.8, 0.7, 0.5,
      0.4, 0.6, 0.35, 0.38, 0.9, 0.3, 0.6, 0.4, 0.2, 0.35, 0.5, 0.15, 0.2, 0.25, 0.4, 0.8, 0.76, 0.8, 1, 0.8,
      0.7, 0.8, 0.3, 0.5, 0.6, 0.55, 0.42, 0.75, 0.66, 0.6, 0.7, 0.5, 0.6, 0.35, 0.35, 0.35, 0.8, 0.6, 0.7, 0.8,
      0.4, 0.89, 0.3, 0.3, 0.6, 0.4, 0.2, 0.52, 0.5, 0.15, 0.2, 0.25, 0.4, 0.8, 0.76, 0.8, 1, 0.8, 0.7, 0.8,
      0.3, 0.5, 0.6, 0.8, 0.7, 0.75, 0.66, 0.6, 0.7, 0.5, 0.6, 0.35, 0.35, 0.35, 0.8, 0.6, 0.7, 0.8, 0.4, 0.89, 0.3
    ];

    const positions = [
      { x: 0, y: 0, z: 0 }, { x: 1.2, y: 0.9, z: -0.5 }, { x: 1.8, y: -0.3, z: 0 }, { x: -1, y: -1, z: 0 },
      { x: -1, y: 1.62, z: 0 }, { x: -1.65, y: 0, z: -0.4 }, { x: -2.13, y: -1.54, z: -0.4 }, { x: 0.8, y: 0.94, z: 0.3 },
      { x: 0.5, y: -1, z: 1.2 }, { x: -0.16, y: -1.2, z: 0.9 }, { x: 1.5, y: 1.2, z: 0.8 }, { x: 0.5, y: -1.58, z: 1.4 },
      { x: -1.5, y: 1, z: 1.15 }, { x: -1.5, y: -1.5, z: 0.99 }, { x: -1.5, y: -1.5, z: -1.9 }, { x: 1.85, y: 0.8, z: 0.05 },
      { x: 1.5, y: -1.2, z: -0.75 }, { x: 0.9, y: -1.62, z: 0.22 }, { x: 0.45, y: 2, z: 0.65 }, { x: 2.5, y: 1.22, z: -0.2 },
      { x: 2.35, y: 0.7, z: 0.55 }, { x: -1.8, y: -0.35, z: 0.85 }, { x: -1.02, y: 0.2, z: 0.9 }, { x: 0.2, y: 1, z: 1 },
      { x: -2.88, y: 0.7, z: 1 }, { x: -2, y: -0.95, z: 1.5 }, { x: -2.3, y: 2.4, z: -0.1 }, { x: -2.5, y: 1.9, z: 1.2 },
      { x: -1.8, y: 0.37, z: 1.2 }, { x: -2.4, y: 1.42, z: 0.05 }, { x: -2.72, y: -0.9, z: 1.1 }, { x: -1.8, y: -1.34, z: 1.67 },
      { x: -1.6, y: 1.66, z: 0.91 }, { x: -2.8, y: 1.58, z: 1.69 }, { x: -2.97, y: 2.3, z: 0.65 }, { x: 1.1, y: -0.2, z: -1.45 },
      { x: -4, y: 1.78, z: 0.38 }, { x: 0.12, y: 1.4, z: -1.29 }, { x: -1.64, y: 1.4, z: -1.79 }, { x: -3.5, y: -0.58, z: 0.1 },
      { x: -0.1, y: -1, z: -2 }, { x: -4.5, y: 0.55, z: -0.5 }, { x: -3.87, y: 0, z: 1 }, { x: -4.6, y: -0.1, z: 0.65 },
      { x: -3, y: 1.5, z: -0.7 }, { x: -0.5, y: 0.2, z: -1.5 }, { x: -1.3, y: -0.45, z: -1.5 }, { x: -3.35, y: 0.25, z: -1.5 },
      { x: -4.76, y: -1.26, z: 0.4 }, { x: -4.32, y: 0.85, z: 1.4 }, { x: -3.5, y: -1.82, z: 0.9 }, { x: -3.6, y: -0.6, z: 1.46 },
      { x: -4.55, y: -1.5, z: 1.63 }, { x: -3.8, y: -1.15, z: 2.1 }, { x: -2.9, y: -0.25, z: 1.86 }, { x: -2.2, y: -0.4, z: 1.86 },
      { x: -5.1, y: -0.24, z: 1.86 }, { x: -5.27, y: 1.24, z: 0.76 }, { x: -5.27, y: 2, z: -0.4 }, { x: -6.4, y: 0.4, z: 1 },
      { x: -5.15, y: 0.95, z: 2 }, { x: -6.2, y: 0.5, z: -0.8 }, { x: -4, y: 0.08, z: 1.8 }, { x: 2, y: -0.95, z: 1.5 },
      { x: 2.3, y: 2.4, z: -0.1 }, { x: 2.5, y: 1.9, z: 1.2 }, { x: 1.8, y: 0.37, z: 1.2 }, { x: 3.24, y: 0.6, z: 1.05 },
      { x: 2.72, y: -0.9, z: 1.1 }, { x: 1.8, y: -1.34, z: 1.67 }, { x: 1.6, y: 1.99, z: 0.91 }, { x: 2.8, y: 1.58, z: 1.69 },
      { x: 2.97, y: 2.3, z: 0.65 }, { x: -1.3, y: -0.2, z: -2.5 }, { x: 4, y: 1.78, z: 0.38 }, { x: 1.72, y: 1.4, z: -1.29 },
      { x: 2.5, y: -1.2, z: -2 }, { x: 3.5, y: -0.58, z: 0.1 }, { x: 0.1, y: 0.4, z: -2.42 }, { x: 4.5, y: 0.55, z: -0.5 },
      { x: 3.87, y: 0, z: 1 }, { x: 4.6, y: -0.1, z: 0.65 }, { x: 3, y: 1.5, z: -0.7 }, { x: 2.3, y: 0.6, z: -2.6 },
      { x: 4, y: 1.5, z: -1.6 }, { x: 3.35, y: 0.25, z: -1.5 }, { x: 4.76, y: -1.26, z: 0.4 }, { x: 4.32, y: 0.85, z: 1.4 },
      { x: 3.5, y: -1.82, z: 0.9 }, { x: 3.6, y: -0.6, z: 1.46 }, { x: 4.55, y: -1.5, z: 1.63 }, { x: 3.8, y: -1.15, z: 2.1 },
      { x: 2.9, y: -0.25, z: 1.86 }, { x: 2.2, y: -0.4, z: 1.86 }, { x: 5.1, y: -0.24, z: 1.86 }, { x: 5.27, y: 1.24, z: 0.76 },
      { x: 5.27, y: 2, z: -0.4 }, { x: 6.4, y: 0.4, z: 1 }, { x: 5.15, y: 0.95, z: 2 }, { x: 6.2, y: 0.5, z: -0.8 }, { x: 4, y: 0.08, z: 1.8 }
    ];

    const material = new THREE.MeshLambertMaterial({
      color: "#3B82F6",
      emissive: "blue"
    });
    const group = new THREE.Group();
    const spheres: THREE.Mesh[] = [];

    positions.forEach((pos, index) => {
      const radius = radii[index];
      const geometry = new THREE.SphereGeometry(radius, 64, 64);
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(pos.x, pos.y, pos.z);
      sphere.userData = { originalPosition: { ...pos }, radius };
      sphere.castShadow = true;
      sphere.receiveShadow = true;
      spheres.push(sphere);
      group.add(sphere);
    });

    scene.add(group);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 0.52);
    spotLight.position.set(14, 24, 30);
    spotLight.castShadow = true;
    scene.add(spotLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight1.position.set(0, -4, 0);
    scene.add(directionalLight1);

    // GUI
    const gui = new dat.GUI();
    gui.close();

    const ambientLightFolder = gui.addFolder("Ambient Light");
    ambientLightFolder.add(ambientLight, "intensity", 0, 2);
    ambientLightFolder
      .addColor({ color: ambientLight.color.getHex() }, "color")
      .onChange((value) => {
        ambientLight.color.setHex(value);
      });

    const spotLightFolder = gui.addFolder("Spot Light");
    spotLightFolder.add(spotLight, "intensity", 0, 2);
    spotLightFolder.add(spotLight.position, "x", -30, 30);
    spotLightFolder.add(spotLight.position, "y", -30, 30);
    spotLightFolder.add(spotLight.position, "z", -30, 30);

    const directionalLight1Folder = gui.addFolder("Directional Light 1");
    directionalLight1Folder.add(directionalLight1, "intensity", 0, 2);
    directionalLight1Folder.add(directionalLight1.position, "x", -30, 30);
    directionalLight1Folder.add(directionalLight1.position, "y", -30, 30);
    directionalLight1Folder.add(directionalLight1.position, "z", -30, 30);

    // Mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const tempVector = new THREE.Vector3();
    const forces = new Map();

    const initY = -25;
    const revolutionRadius = 4;
    const revolutionDuration = 2;
    const breathingAmplitude = 0.1;
    const breathingSpeed = 0.002;

    // Initialize spheres below screen
    spheres.forEach((sphere) => {
      sphere.position.y = initY;
    });

    function initLoadingAnimation() {
      spheres.forEach((sphere, i) => {
        const delay = i * 0.02;

        gsap
          .timeline()
          .to(sphere.position, {
            duration: revolutionDuration / 2,
            y: revolutionRadius,
            ease: "power1.out",
            onUpdate: function () {
              const progress = this.progress();
              sphere.position.z =
                sphere.userData.originalPosition.z +
                Math.sin(progress * Math.PI) * revolutionRadius;
            },
            delay: delay
          })
          .to(sphere.position, {
            duration: revolutionDuration / 2,
            y: initY / 5,
            ease: "power1.out",
            onUpdate: function () {
              const progress = this.progress();
              sphere.position.z =
                sphere.userData.originalPosition.z -
                Math.sin(progress * Math.PI) * revolutionRadius;
            }
          })
          .to(sphere.position, {
            duration: 0.6,
            x: sphere.userData.originalPosition.x,
            y: sphere.userData.originalPosition.y,
            z: sphere.userData.originalPosition.z,
            ease: "power1.out"
          });
      });
    }

    window.addEventListener("load", initLoadingAnimation);

    let loadingComplete = false;
    setTimeout(() => {
      loadingComplete = true;
      if (mouseEffectRef.current) {
        mouseEffectRef.current.style.opacity = "1";
      }
    }, (revolutionDuration + 1) * 1000);

    gsap.set(".circle", { xPercent: -50, yPercent: -50 });
    gsap.set(".circle-follow", { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(".circle", "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(".circle", "y", { duration: 0.6, ease: "power3" });
    const xFollow = gsap.quickTo(".circle-follow", "x", { duration: 0.6, ease: "power3" });
    const yFollow = gsap.quickTo(".circle-follow", "y", { duration: 0.6, ease: "power3" });

    function onMouseMove(event: MouseEvent) {
      if (!loadingComplete) return;

      xTo(event.clientX);
      yTo(event.clientY);
      xFollow(event.clientX);
      yFollow(event.clientY);

      if (mouseEffectRef.current) {
        mouseEffectRef.current.style.opacity = "1";
      }

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(spheres);

      if (intersects.length > 0) {
        const hoveredSphere = intersects[0].object;
        const force = new THREE.Vector3();
        force
          .subVectors(intersects[0].point, hoveredSphere.position)
          .normalize()
          .multiplyScalar(0.2);
        forces.set(hoveredSphere.uuid, force);
      }
    }

    function handleCollisions() {
      for (let i = 0; i < spheres.length; i++) {
        const sphereA = spheres[i];
        const radiusA = sphereA.userData.radius;

        for (let j = i + 1; j < spheres.length; j++) {
          const sphereB = spheres[j];
          const radiusB = sphereB.userData.radius;

          const distance = sphereA.position.distanceTo(sphereB.position);
          const minDistance = (radiusA + radiusB) * 1.2;

          if (distance < minDistance) {
            tempVector.subVectors(sphereB.position, sphereA.position);
            tempVector.normalize();

            const pushStrength = (minDistance - distance) * 0.4;
            sphereA.position.sub(tempVector.multiplyScalar(pushStrength));
            sphereB.position.add(tempVector.multiplyScalar(pushStrength));
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);

      if (loadingComplete) {
        const time = Date.now() * breathingSpeed;
        spheres.forEach((sphere, i) => {
          const offset = i * 0.2;
          const breathingY = Math.sin(time + offset) * breathingAmplitude;
          const breathingZ = Math.cos(time + offset) * breathingAmplitude * 0.5;

          const force = forces.get(sphere.uuid);
          if (force) {
            sphere.position.add(force);
            force.multiplyScalar(0.95);

            if (force.length() < 0.01) {
              forces.delete(sphere.uuid);
            }
          }

          const originalPos = sphere.userData.originalPosition;
          tempVector.set(
            originalPos.x,
            originalPos.y + breathingY,
            originalPos.z + breathingZ
          );
          sphere.position.lerp(tempVector, 0.018);
        });

        handleCollisions();
      }

      controls.update();
      renderer.render(scene, camera);
    }

    window.addEventListener("mousemove", onMouseMove);
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", initLoadingAnimation);
      gui.destroy();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 -z-10 pointer-events-none"
      />
      <div ref={mouseEffectRef} className="mouse-effect pointer-events-none fixed inset-0 opacity-0 transition-opacity duration-300">
        <div className="circle absolute w-8 h-8 rounded-full border-2 border-primary" />
        <div className="circle-follow absolute w-12 h-12 rounded-full border border-primary/30" />
      </div>
    </>
  );
};

export default ParticleBackground;
