import { useEffect, useRef } from 'react';
import floppyBack from '../assets/floppy-back.webp';
import floppyFront from '../assets/floppy-front.webp';

function FloppyDisk3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let frame = 0;
    let cleanupScene = () => {};

    import('three').then((THREE) => {
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
      camera.position.set(0, 0.1, 7);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      mount.appendChild(renderer.domElement);

      const loader = new THREE.TextureLoader();
      const frontTexture = loader.load(floppyFront);
      const backTexture = loader.load(floppyBack);
      frontTexture.colorSpace = THREE.SRGBColorSpace;
      backTexture.colorSpace = THREE.SRGBColorSpace;
      frontTexture.anisotropy = 4;
      backTexture.anisotropy = 4;

      const frontMaterial = new THREE.MeshStandardMaterial({
        map: frontTexture,
        roughness: 0.82,
        metalness: 0,
      });
      const backMaterial = new THREE.MeshStandardMaterial({
        map: backTexture,
        roughness: 0.82,
        metalness: 0,
      });
      const edgeMaterial = new THREE.MeshStandardMaterial({
        color: 0x11100d,
        roughness: 0.9,
        metalness: 0,
      });

      const geometry = new THREE.BoxGeometry(2.28, 2.92, 0.07, 1, 1, 1);
      const disk = new THREE.Mesh(geometry, [
        edgeMaterial,
        edgeMaterial,
        edgeMaterial,
        edgeMaterial,
        frontMaterial,
        backMaterial,
      ]);
      disk.rotation.x = THREE.MathUtils.degToRad(7);
      disk.position.y = 0.12;
      scene.add(disk);

      const ambient = new THREE.AmbientLight(0xffffff, 1.8);
      scene.add(ambient);
      const key = new THREE.DirectionalLight(0xffffff, 1.6);
      key.position.set(2.2, 3.4, 4.8);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0xf3d654, 0.75);
      fill.position.set(-3, -2, 3);
      scene.add(fill);

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let last = performance.now();
      let rotation = THREE.MathUtils.degToRad(-20);

      const resize = () => {
        const { clientWidth, clientHeight } = mount;
        renderer.setSize(clientWidth, clientHeight, false);
        camera.aspect = clientWidth / Math.max(clientHeight, 1);
        camera.updateProjectionMatrix();
      };

      const animate = (now) => {
        const delta = Math.min(now - last, 50);
        last = now;
        if (!reducedMotion) {
          rotation += delta * 0.00042;
        }
        disk.rotation.y = rotation;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };

      resize();
      window.addEventListener('resize', resize);
      frame = requestAnimationFrame(animate);

      cleanupScene = () => {
        window.removeEventListener('resize', resize);
        geometry.dispose();
        frontTexture.dispose();
        backTexture.dispose();
        frontMaterial.dispose();
        backMaterial.dispose();
        edgeMaterial.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cleanupScene();
    };
  }, []);

  return <span className="floppy-canvas" ref={mountRef} aria-hidden="true" />;
}

export default FloppyDisk3D;
