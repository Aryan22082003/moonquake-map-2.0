import './style.css'
// import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TDSLoader } from "three/examples/jsm/loaders/TDSLoader";
import { GridHelper } from 'https://threejs.org/build/three.module.js';
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import moonTexture from "./images/map.jpg";
import moonDisplacementMap from "./images/Bmap.jpg";
import heightMapImage from "./images/full.jpg";


let scene;
let camera;
let renderer;


function main() {

  const canvas = document.querySelector('canvas.webgl');
  scene = new THREE.Scene();
  const canvasContainer = document.querySelector('#canvasContainer');
  camera = new THREE.PerspectiveCamera(45, canvasContainer.offsetWidth / canvasContainer.offsetHeight, 0.1, 1000);
  //camera.position.z=2;
  camera.position.set(1200, -100, 2);
  scene.add(camera);



  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, });
  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  // renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);

  //create earthgeometry
  const textureLoader = new THREE.TextureLoader();
  const earthgeometry = new THREE.SphereGeometry(1, 32, 32);
  //OGcode
  const earthmaterial = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    //  map: THREE.ImageUtils.loadTexture('map.jpg'),
    //  bumpMap: THREE.ImageUtils.loadTexture('Bmap.jpg'),
    map: textureLoader.load(moonTexture),
    bumpMap: textureLoader.load(moonDisplacementMap),
    bumpScale: 0.85,
  });

  // Create Grid lines (Latitude And Longitude)
  //const gridHelper = new THREE.GridHelper(10, 10, 0x0000ff, 0x0000ff);
  //gridHelper.rotation.x = Math.PI / 2; // Align the grid with the XZ plane
  // scene.add(gridHelper);

  // const gridHelper = new THREE.GridHelper(4, 16, 0xffffff, 0xffffff);
  // gridHelper.material.opacity = 0.25;
  // gridHelper.material.transparent = true;
  // scene.add(gridHelper);

  const earthmesh = new THREE.Mesh(earthgeometry, earthmaterial);
  scene.add(earthmesh);


  //  const createLatitudeLines = (radius, segments) => {
  //   const material = new THREE.LineBasicMaterial({ color: 0xffffff, depthTest: false });
  //   const earthmesh = new THREE.Object3D();

  //   for (let i = 1; i < segments; i++) {
  //     const phi = (i / segments) * Math.PI - Math.PI / 2;
  //     const geometry = new THREE.BufferGeometry();
  //     const vertices = [];

  //     for (let j = 0; j <= segments; j++) {
  //       const theta = (j / segments) * 2 * Math.PI;
  //       const x = radius * Math.cos(phi) * Math.cos(theta);
  //       const y = radius * Math.sin(phi);
  //       const z = radius * Math.cos(phi) * Math.sin(theta);

  //       vertices.push(x, y, z);
  //     }

  //     geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  //     const line = new THREE.Line(geometry, material);
  //     earthmesh.add(line);
  //   }

  //   return earthmesh;
  // };

  // const createLongitudeLines = (radius, segments) => {
  //   const material = new THREE.LineBasicMaterial({ color: 0xffffff, depthTest: false });
  //   const earthmesh = new THREE.Object3D();

  //   for (let i = 0; i <= segments; i++) {
  //     const theta = (i / segments) * 2 * Math.PI;
  //     const geometry = new THREE.BufferGeometry();
  //     const vertices = [];

  //     for (let j = 0; j <= segments; j++) {
  //       const phi = (j / segments) * Math.PI - Math.PI / 2;
  //       const x = radius * Math.cos(phi) * Math.cos(theta);
  //       const y = radius * Math.sin(phi);
  //       const z = radius * Math.cos(phi) * Math.sin(theta);

  //       vertices.push(x, y, z);
  //     }

  //     geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  //     const line = new THREE.Line(geometry, material);
  //     earthmesh.add(line);
  //   }

  //   return earthmesh;
  // };

  // const segments = 18; // 10-degree intervals
  // const latitudeLines = createLatitudeLines(1, segments);
  // const longitudeLines = createLongitudeLines(1, segments);

  // // Add latitude and longitude lines to the scene
  // scene.add(latitudeLines);
  // scene.add(longitudeLines);


  //  const createLatitudeLines = (radius, segments) => {
  //   const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  //   const earthmesh = new THREE.Object3D();

  //   for (let i = 1; i < segments; i++) {
  //     const phi = (i / segments) * Math.PI - Math.PI / 2;
  //     const geometry = new THREE.BufferGeometry();
  //     const vertices = [];

  //     for (let j = 0; j <= segments; j++) {
  //       const theta = (j / segments) * 2 * Math.PI;
  //       const x = radius * Math.cos(phi) * Math.cos(theta);
  //       const y = radius * Math.sin(phi);
  //       const z = radius * Math.cos(phi) * Math.sin(theta);

  //       vertices.push(x, y, z);
  //     }

  //     geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  //     const line = new THREE.Line(geometry, material);
  //     earthmesh.add(line);
  //   }

  //   return earthmesh;
  // };

  // const createLongitudeLines = (radius, segments) => {
  //   const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  //   const earthmesh = new THREE.Object3D();

  //   for (let i = 0; i <= segments; i++) {
  //     const theta = (i / segments) * 2 * Math.PI;
  //     const geometry = new THREE.BufferGeometry();
  //     const vertices = [];

  //     for (let j = 0; j <= segments; j++) {
  //       const phi = (j / segments) * Math.PI - Math.PI / 2;
  //       const x = radius * Math.cos(phi) * Math.cos(theta);
  //       const y = radius * Math.sin(phi);
  //       const z = radius * Math.cos(phi) * Math.sin(theta);

  //       vertices.push(x, y, z);
  //     }

  //     geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  //     const line = new THREE.Line(geometry, material);
  //     earthmesh.add(line);
  //   }

  //   return earthmesh;
  // };

  // const segments = 18; // 10-degree intervals
  // const latitudeLines = createLatitudeLines(1, segments);
  // const longitudeLines = createLongitudeLines(1, segments);

  // // Add latitude and longitude lines to the scene
  // scene.add(latitudeLines);
  // scene.add(longitudeLines);


  //  // Draw latitudes and longitudes
  // function drawLatitudesAndLongitudes() {
  //   var material = new THREE.LineBasicMaterial({ color: 0xffffff });

  //   // Draw latitudes
  //   for (var lat = -90; lat <= 90; lat += 10) {
  //     var latitudeGeometry = new THREE.BufferGeometry();
  //     var positions = [];

  //     for (var lon = -180; lon <= 180; lon += 10) {
  //       positions.push(...getPoint(lat, lon).toArray());
  //     }

  //     latitudeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  //     var latitude = new THREE.Line(latitudeGeometry, material);
  //     scene.add(latitude);
  //   }

  //   // Draw longitudes
  //   for (var lon = -180; lon <= 180; lon += 10) {
  //     var longitudeGeometry = new THREE.BufferGeometry();
  //     var positions = [];

  //     for (var lat = -90; lat <= 90; lat += 10) {
  //       positions.push(...getPoint(lat, lon).toArray());
  //     }

  //     longitudeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  //     var longitude = new THREE.Line(longitudeGeometry, material);
  //     scene.add(longitude);
  //   }
  // }

  // function getPoint(lat, lon) {
  //   var phi = (90 - lat) * Math.PI / 180;
  //   var theta = (lon + 180) * Math.PI / 180;

  //   var x = 1 * Math.sin(phi) * Math.cos(theta);
  //   var y = 1 * Math.cos(phi);
  //   var z = 1 * Math.sin(phi) * Math.sin(theta);

  //   return new THREE.Vector3(x, y, z);
  // }

  // drawLatitudesAndLongitudes();

  //      // Draw latitudes and longitudes
  // function drawLatitudesAndLongitudes() {
  //   var material = new THREE.LineBasicMaterial({ color: 0xffffff });

  //   // Draw latitudes
  //   for (var lat = -90; lat <= 90; lat += 10) {
  //     var latitudeGeometry = new THREE.BufferGeometry();
  //     var positions = [];

  //     for (var lon = -180; lon <= 180; lon += 10) {
  //       positions.push(...getPoint(lat, lon).toArray());
  //     }

  //     latitudeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  //     var latitude = new THREE.Line(latitudeGeometry, material);
  //     scene.add(latitude);
  //   }

  //   // Draw longitudes
  //   for (var lon = -180; lon <= 180; lon += 10) {
  //     var longitudeGeometry = new THREE.BufferGeometry();
  //     var positions = [];

  //     for (var lat = -90; lat <= 90; lat += 10) {
  //       positions.push(...getPoint(lat, lon).toArray());
  //     }

  //     longitudeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  //     var longitude = new THREE.Line(longitudeGeometry, material);
  //     scene.add(longitude);
  //   }
  // }
  // function getPoint(lat, lon) {
  //   var phi = (90 - lat) * Math.PI / 180;
  //   var theta = (lon + 180) * Math.PI / 180;

  //   var x = 1 * Math.sin(phi) * Math.cos(theta);
  //   var y = 1 * Math.cos(phi);
  //   var z = 1 * Math.sin(phi) * Math.sin(theta);

  //   return new THREE.Vector3(x, y, z);
  // }

  // drawLatitudesAndLongitudes();

  // Function to create latitude lines  *******************MAIN CODE******************************************* 
  const createLatitudeLines = (radius, segments) => {
    const material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });

    for (let i = 1; i < segments; i++) {
      const phi = (i / segments) * Math.PI - Math.PI / 2;
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * 2 * Math.PI;
        const x = radius * Math.cos(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi);
        const z = radius * Math.cos(phi) * Math.sin(theta);

        vertices.push(x, y, z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      const line = new THREE.Line(geometry, material);
      earthmesh.add(line);
      line.visible = false;
    }
  };

  // Function to create longitude lines
  const createLongitudeLines = (radius, segments) => {
    const material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * 2 * Math.PI;
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let j = 0; j <= segments; j++) {
        const phi = (j / segments) * Math.PI - Math.PI / 2;
        const x = radius * Math.cos(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi);
        const z = radius * Math.cos(phi) * Math.sin(theta);

        vertices.push(x, y, z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      const line = new THREE.Line(geometry, material);
      earthmesh.add(line);
      line.visible = false;
    }
  };

  // Create latitude and longitude lines
  const segments = 32;
  createLatitudeLines(1, segments);
  createLongitudeLines(1, segments);


  //Moonquake Animation
  //Coversion of Cartesian to spherical
  // Function to convert geographic coordinates to spherical coordinates



  // // Function to convert geographic coordinates to spherical coordinates
  // const geographicToSpherical = (latitude, longitude, radius) => {
  //   // Convert latitude and longitude from degrees to radians
  //   const latRad = THREE.MathUtils.degToRad(latitude);
  //   const lonRad = THREE.MathUtils.degToRad(longitude);

  //   // Calculate spherical coordinates
  //   const phi = Math.PI / 2 - latRad;
  //   const theta = lonRad;

  //   // Return spherical coordinates
  //   return {
  //     radius,
  //     phi,
  //     theta,
  //   };
  // };

  // // Example usage:
  // const latitude = 48 // Replace with your actual latitude
  // const longitude = -35; // Replace with your actual longitude
  // const globeRadius = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates = geographicToSpherical(latitude, longitude, globeRadius);

  // // Use the spherical coordinates to map the point to the globe
  // const x = sphericalCoordinates.radius * Math.sin(sphericalCoordinates.phi) * Math.cos(sphericalCoordinates.theta);
  // const y = sphericalCoordinates.radius * Math.cos(sphericalCoordinates.phi);
  // const z = sphericalCoordinates.radius * Math.sin(sphericalCoordinates.phi) * Math.sin(sphericalCoordinates.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);

  // // Set the position of the point
  // pointMesh.position.set(x, y, z);

  // // Set a specific class to the point mesh for identification
  // pointMesh.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // earthmesh.add(pointMesh);
  // pointMesh.visible=false;

  //   // Function to toggle the visibility of the point
  //   function togglePointVisibility() {
  //     const pointMesh = earthmesh.children.find(mesh => mesh.userData.isLocationPoint);
  //     if (pointMesh) {
  //       pointMesh.visible = !pointMesh.visible;
  //     }
  //   }
  
  //   // Assuming you have already created a button with id 'toggleButton'
  //   const toggleButton6 = document.getElementById('toggleButton6');
  //   toggleButton6.addEventListener('click', togglePointVisibility);

  // //     // Function to update the position of the point based on dropdown selections
  // // function updatePointPosition() {
  // //   const selectedYear = document.getElementById('yearDropdown').value;
  // //   const selectedDay = document.getElementById('dayDropdown').value;

  // //   // You need to replace this with your actual logic to get the position
  // //   // based on the selected year and day from your JSON data
  // //   const position = getPositionFromJSON(selectedYear, selectedDay);
  // //   if (position) {
  // //     // Assuming the point mesh has been added as a child of earthmesh
  // //     const pointMesh = earthmesh.children.find(mesh => mesh.userData.isLocationPoint);

  // //     if (pointMesh) {
  // //       const { latitude, longitude } = position;
  // //       const sphericalCoordinates = geographicToSpherical(latitude, longitude, 1.0);

  // //       // Calculate position on the globe
  // //       const x = sphericalCoordinates.radius * Math.sin(sphericalCoordinates.phi) * Math.cos(sphericalCoordinates.theta);
  // //       const y = sphericalCoordinates.radius * Math.cos(sphericalCoordinates.phi);
  // //       const z = sphericalCoordinates.radius * Math.sin(sphericalCoordinates.phi) * Math.sin(sphericalCoordinates.theta);

  // //       // Update the position of the point
  // //       pointMesh.position.set(x, y, z);
  // //     }
  // //   }
  // // }
  // //   // You need to replace this with your actual logic to get the position
  // // // based on the selected year and day from your JSON data
  // // function getPositionFromJSON(year, day) {
  // //   // Example: Replace this with your logic to fetch position from JSON data
  // //   const jsonData = {
  // //     "1971": {
  // //       "107": { "latitude": 48, "longitude": -35 },
  // //       "140": { "latitude": 42, "longitude": 24 },
  // //       "192": { "latitude": 43, "longitude": 47 }  
  // //     },
  // //     "1972": {
  // //       "2": { "latitude": 54, "longitude": -101 },
  // //       "261": { "latitude": 12, "longitude": -46 },
  // //       "341": { "latitude": 51, "longitude": -45 },
  // //       "344": { "latitude": -20, "longitude": 80 }
  // //     },
  // //     "1973": {
  // //       "39": { "latitude": 33, "longitude": -35 },
  // //       "72": { "latitude": -84, "longitude": 134 },
  // //       "171": { "latitude": -1, "longitude": 71 },
  // //       "274": { "latitude": -37, "longitude": 29 }
  // //     },
  // //     "1974": {
  // //       "54": { "latitude": 36, "longitude": 16 },
  // //       "86": { "latitude": -48, "longitude": 106 },
  // //       "109": { "latitude": -37, "longitude": -42 },
  // //       "149": { "latitude": null, "longitude": null },
  // //       "192": { "latitude": 21, "longitude": -88 }
  // //     },
  // //     "1975": {
  // //       "3": { "latitude": 29, "longitude": 98 },
  // //       "12": { "latitude": 75, "longitude": -40 },
  // //       "13": { "latitude": -2, "longitude": 51 },
  // //       "44": { "latitude": -19, "longitude": 26 },
  // //       "127": { "latitude": -49, "longitude": 45 },
  // //       "147": { "latitude": 3, "longitude": 58 },
  // //       "314": { "latitude": -8, "longitude": -64 }
  // //     },
  // //     "1976": {
  // //       "4": { "latitude": 50, "longitude": -30 },
  // //       "12": { "latitude": 38, "longitude": -44 },
  // //       "66": { "latitude": 50, "longitude": 20 },
  // //       "68": { "latitude": -19, "longitude": 12 },
  // //       "137": { "latitude": 77, "longitude": 10 }
  // //     }
  // //     // Add more data for different years
  // //   };

  // //   return jsonData[year] ? jsonData[year][day] : null;
  // // }

  // // Example usage1:
  // const latitude1 = 42 // Replace with your actual latitude
  // const longitude1 = 24; // Replace with your actual longitude
  // const globeRadius1 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates1 = geographicToSpherical(latitude1, longitude1, globeRadius1);

  // // Use the spherical coordinates to map the point to the globe
  // const x1 = sphericalCoordinates1.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y1 = sphericalCoordinates1.radius * Math.cos(sphericalCoordinates1.phi);
  // const z1 = sphericalCoordinates1.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry1 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh1 = new THREE.Mesh(pointGeometry1, pointMaterial1);

  // // Set the position of the point
  // pointMesh1.position.set(x1, y1, z1);

  // // Set a specific class to the point mesh for identification
  // pointMesh1.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // earthmesh.add(pointMesh1);
  // pointMesh1.visible=false;

  //     // Function to toggle the visibility of the point
  //     function togglePoint() {
  //       const pointMesh = earthmesh.children.find(mesh => mesh.userData.isLocationPoint);
  //       if (pointMesh) {
  //         pointMesh.visible = !pointMesh.visible;
  //       }
  //     }
    
  //     // Assuming you have already created a button with id 'toggleButton'
  //     const toggleButton7 = document.getElementById('toggleButton6');
  //     toggleButton7.addEventListener('click', togglePoint);




  // // function togglePoint() {
  // //   const pointMesh1 = earthmesh.children.find(mesh => mesh.userData.isLocationPoint);
  // //   if (pointMesh1) {
  // //     pointMesh1.visible = !pointMesh1.visible;
  // //   }
  // // }

  // // // Assuming you have already created a button with id 'toggleButton'
  // // const toggleButton7 = document.getElementById('toggleButton7');
  // // toggleButton7.addEventListener('click', togglePoint);



  // // Example usage:
  // const latitude2 = 43;  // Replace with your actual latitude
  // const longitude2 = 47; // Replace with your actual longitude
  // const globeRadius2 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates2 = geographicToSpherical(latitude2, longitude2, globeRadius2);

  // // Use the spherical coordinates to map the point to the globe
  // const x2 = sphericalCoordinates2.radius * Math.sin(sphericalCoordinates2.phi) * Math.cos(sphericalCoordinates2.theta);
  // const y2 = sphericalCoordinates2.radius * Math.cos(sphericalCoordinates2.phi);
  // const z2 = sphericalCoordinates2.radius * Math.sin(sphericalCoordinates2.phi) * Math.sin(sphericalCoordinates2.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry2 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh2 = new THREE.Mesh(pointGeometry2, pointMaterial2);

  // // Set the position of the point
  // pointMesh2.position.set(x2, y2, z2);

  // // Set a specific class to the point mesh for identification
  // pointMesh2.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh2);


  // // Example usage:
  // const latitude3 = 54;  // Replace with your actual latitude
  // const longitude3 = -101; // Replace with your actual longitude
  // const globeRadius3 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates3 = geographicToSpherical(latitude3, longitude3, globeRadius3);

  // // Use the spherical coordinates to map the point to the globe
  // const x3 = sphericalCoordinates3.radius * Math.sin(sphericalCoordinates3.phi) * Math.cos(sphericalCoordinates3.theta);
  // const y3 = sphericalCoordinates3.radius * Math.cos(sphericalCoordinates3.phi);
  // const z3 = sphericalCoordinates3.radius * Math.sin(sphericalCoordinates3.phi) * Math.sin(sphericalCoordinates3.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry3 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial3 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh3 = new THREE.Mesh(pointGeometry3, pointMaterial3);

  // // Set the position of the point
  // pointMesh3.position.set(x3, y3, z3);

  // // Set a specific class to the point mesh for identification
  // pointMesh3.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh3);

  // // Example usage:
  // const latitude4 = 12;  // Replace with your actual latitude
  // const longitude4 = -46; // Replace with your actual longitude
  // const globeRadius4 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates4 = geographicToSpherical(latitude4, longitude4, globeRadius4);

  // // Use the spherical coordinates to map the point to the globe
  // const x4 = sphericalCoordinates4.radius * Math.sin(sphericalCoordinates4.phi) * Math.cos(sphericalCoordinates4.theta);
  // const y4 = sphericalCoordinates4.radius * Math.cos(sphericalCoordinates4.phi);
  // const z4 = sphericalCoordinates4.radius * Math.sin(sphericalCoordinates4.phi) * Math.sin(sphericalCoordinates4.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry4 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial4 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh4 = new THREE.Mesh(pointGeometry4, pointMaterial4);

  // // Set the position of the point
  // pointMesh4.position.set(x4, y4, z4);

  // // Set a specific class to the point mesh for identification
  // pointMesh4.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh4);


  // // Example usage:
  // const latitude5 = 51;  // Replace with your actual latitude
  // const longitude5 = -45; // Replace with your actual longitude
  // const globeRadius5 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates5 = geographicToSpherical(latitude5, longitude5, globeRadius5);

  // // Use the spherical coordinates to map the point to the globe
  // const x5 = sphericalCoordinates5.radius * Math.sin(sphericalCoordinates5.phi) * Math.cos(sphericalCoordinates5.theta);
  // const y5 = sphericalCoordinates5.radius * Math.cos(sphericalCoordinates5.phi);
  // const z5 = sphericalCoordinates5.radius * Math.sin(sphericalCoordinates5.phi) * Math.sin(sphericalCoordinates5.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry5 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial5 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh5 = new THREE.Mesh(pointGeometry5, pointMaterial5);

  // // Set the position of the point
  // pointMesh5.position.set(x5, y5, z5);

  // // Set a specific class to the point mesh for identification
  // pointMesh5.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh5);


  // // Example usage:
  // const latitude6 = -20;  // Replace with your actual latitude
  // const longitude6 = 80; // Replace with your actual longitude
  // const globeRadius6 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates6 = geographicToSpherical(latitude6, longitude6, globeRadius6);

  // // Use the spherical coordinates to map the point to the globe
  // const x6 = sphericalCoordinates6.radius * Math.sin(sphericalCoordinates6.phi) * Math.cos(sphericalCoordinates6.theta);
  // const y6 = sphericalCoordinates6.radius * Math.cos(sphericalCoordinates6.phi);
  // const z6 = sphericalCoordinates6.radius * Math.sin(sphericalCoordinates6.phi) * Math.sin(sphericalCoordinates6.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry6 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial6 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh6 = new THREE.Mesh(pointGeometry6, pointMaterial6);

  // // Set the position of the point
  // pointMesh6.position.set(x6, y6, z6);

  // // Set a specific class to the point mesh for identification
  // pointMesh6.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh6);




  // // Example usage:
  // const latitude7 = 33;  // Replace with your actual latitude
  // const longitude7 = -35; // Replace with your actual longitude
  // const globeRadius7 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates7 = geographicToSpherical(latitude7, longitude7, globeRadius7);

  // // Use the spherical coordinates to map the point to the globe
  // const x7 = sphericalCoordinates7.radius * Math.sin(sphericalCoordinates7.phi) * Math.cos(sphericalCoordinates7.theta);
  // const y7 = sphericalCoordinates7.radius * Math.cos(sphericalCoordinates7.phi);
  // const z7 = sphericalCoordinates7.radius * Math.sin(sphericalCoordinates7.phi) * Math.sin(sphericalCoordinates7.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry7 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial7 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh7 = new THREE.Mesh(pointGeometry7, pointMaterial7);

  // // Set the position of the point
  // pointMesh7.position.set(x7, y7, z7);

  // // Set a specific class to the point mesh for identification
  // pointMesh7.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh7);



  // // Example usage:
  // const latitude8 = -84;  // Replace with your actual latitude
  // const longitude8 = 134; // Replace with your actual longitude
  // const globeRadius8 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates8 = geographicToSpherical(latitude8, longitude8, globeRadius8);

  // // Use the spherical coordinates to map the point to the globe
  // const x8 = sphericalCoordinates8.radius * Math.sin(sphericalCoordinates8.phi) * Math.cos(sphericalCoordinates8.theta);
  // const y8 = sphericalCoordinates8.radius * Math.cos(sphericalCoordinates8.phi);
  // const z8 = sphericalCoordinates8.radius * Math.sin(sphericalCoordinates8.phi) * Math.sin(sphericalCoordinates8.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry8 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial8 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh8 = new THREE.Mesh(pointGeometry8, pointMaterial8);

  // // Set the position of the point
  // pointMesh8.position.set(x8, y8, z8);

  // // Set a specific class to the point mesh for identification
  // pointMesh8.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh8);


  // // Example usage:
  // const latitude9 = -1;  // Replace with your actual latitude
  // const longitude9 = 71; // Replace with your actual longitude
  // const globeRadius9 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates9 = geographicToSpherical(latitude9, longitude9, globeRadius9);

  // // Use the spherical coordinates to map the point to the globe
  // const x9 = sphericalCoordinates9.radius * Math.sin(sphericalCoordinates9.phi) * Math.cos(sphericalCoordinates9.theta);
  // const y9 = sphericalCoordinates9.radius * Math.cos(sphericalCoordinates9.phi);
  // const z9 = sphericalCoordinates9.radius * Math.sin(sphericalCoordinates9.phi) * Math.sin(sphericalCoordinates9.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry9 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial9 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh9 = new THREE.Mesh(pointGeometry9, pointMaterial9);

  // // Set the position of the point
  // pointMesh9.position.set(x9, y9, z9);

  // // Set a specific class to the point mesh for identification
  // pointMesh9.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh9);


  // // Example usage:
  // const latitude10 = -37;  // Replace with your actual latitude
  // const longitude10 = 29; // Replace with your actual longitude
  // const globeRadius10 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates10 = geographicToSpherical(latitude10, longitude10, globeRadius10);

  // // Use the spherical coordinates to map the point to the globe
  // const x10 = sphericalCoordinates10.radius * Math.sin(sphericalCoordinates10.phi) * Math.cos(sphericalCoordinates10.theta);
  // const y10 = sphericalCoordinates10.radius * Math.cos(sphericalCoordinates10.phi);
  // const z10 = sphericalCoordinates10.radius * Math.sin(sphericalCoordinates10.phi) * Math.sin(sphericalCoordinates10.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry10 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial10 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh10 = new THREE.Mesh(pointGeometry10, pointMaterial10);

  // // Set the position of the point
  // pointMesh10.position.set(x10, y10, z10);

  // // Set a specific class to the point mesh for identification
  // pointMesh10.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh10);



  // // Example usage:
  // const latitude11 = 36;  // Replace with your actual latitude
  // const longitude11 = 16; // Replace with your actual longitude
  // const globeRadius11 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates11 = geographicToSpherical(latitude11, longitude11, globeRadius11);

  // // Use the spherical coordinates to map the point to the globe
  // const x11 = sphericalCoordinates11.radius * Math.sin(sphericalCoordinates11.phi) * Math.cos(sphericalCoordinates11.theta);
  // const y11 = sphericalCoordinates11.radius * Math.cos(sphericalCoordinates11.phi);
  // const z11 = sphericalCoordinates11.radius * Math.sin(sphericalCoordinates11.phi) * Math.sin(sphericalCoordinates11.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry11 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial11 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh11 = new THREE.Mesh(pointGeometry11, pointMaterial11);

  // // Set the position of the point

  // pointMesh11.position.set(x11, y11, z11);

  // // Set a specific class to the point mesh for identification
  // pointMesh11.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh11);


  // // Example usage:
  // const latitude12 = -48;  // Replace with your actual latitude
  // const longitude12 = 106; // Replace with your actual longitude
  // const globeRadius12 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates12 = geographicToSpherical(latitude12, longitude12, globeRadius12);

  // // Use the spherical coordinates to map the point to the globe
  // const x12 = sphericalCoordinates12.radius * Math.sin(sphericalCoordinates12.phi) * Math.cos(sphericalCoordinates12.theta);
  // const y12 = sphericalCoordinates12.radius * Math.cos(sphericalCoordinates12.phi);
  // const z12 = sphericalCoordinates12.radius * Math.sin(sphericalCoordinates12.phi) * Math.sin(sphericalCoordinates12.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry12 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial12 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh12 = new THREE.Mesh(pointGeometry12, pointMaterial12);

  // // Set the position of the point
  // pointMesh12.position.set(x12, y12, z12);

  // // Set a specific class to the point mesh for identification
  // pointMesh12.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh12);






  // // Example usage:
  // const latitude13 = -37; // Replace with your actual latitude
  // const longitude13 = -42; // Replace with your actual longitude
  // const globeRadius13 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates13 = geographicToSpherical(latitude13, longitude13, globeRadius13);

  // // Use the spherical coordinates to map the point to the globe
  // const x13 = sphericalCoordinates13.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y13 = sphericalCoordinates13.radius * Math.cos(sphericalCoordinates1.phi);
  // const z13 = sphericalCoordinates13.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry13 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial13 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh13 = new THREE.Mesh(pointGeometry13, pointMaterial13);

  // // Set the position of the point
  // pointMesh13.position.set(x13, y13, z13);

  // // Set a specific class to the point mesh for identification
  // pointMesh13.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh13);

  // // Example usage:
  // const latitude14 = 21; // Replace with your actual latitude
  // const longitude14 = -88; // Replace with your actual longitude
  // const globeRadius14 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates14 = geographicToSpherical(latitude14, longitude14, globeRadius14);

  // // Use the spherical coordinates to map the point to the globe
  // const x14 = sphericalCoordinates14.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y14 = sphericalCoordinates14.radius * Math.cos(sphericalCoordinates1.phi);
  // const z14 = sphericalCoordinates14.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry14 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial14 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh14 = new THREE.Mesh(pointGeometry14, pointMaterial14);

  // // Set the position of the point
  // pointMesh14.position.set(x14, y14, z14);

  // // Set a specific class to the point mesh for identification
  // pointMesh14.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh14);




  // // Example usage:
  // const latitude15 = 29; // Replace with your actual latitude
  // const longitude15 = 98; // Replace with your actual longitude
  // const globeRadius15 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates15 = geographicToSpherical(latitude15, longitude15, globeRadius15);

  // // Use the spherical coordinates to map the point to the globe
  // const x15 = sphericalCoordinates15.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y15 = sphericalCoordinates15.radius * Math.cos(sphericalCoordinates1.phi);
  // const z15 = sphericalCoordinates15.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry15 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial15 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh15 = new THREE.Mesh(pointGeometry15, pointMaterial15);

  // // Set the position of the point
  // pointMesh15.position.set(x15, y15, z15);

  // // Set a specific class to the point mesh for identification
  // pointMesh15.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh15);




  // // Example usage:
  // const latitude16 = 75; // Replace with your actual latitude
  // const longitude16 = -40; // Replace with your actual longitude
  // const globeRadius16 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates16 = geographicToSpherical(latitude16, longitude16, globeRadius16);

  // // Use the spherical coordinates to map the point to the globe
  // const x16 = sphericalCoordinates16.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y16 = sphericalCoordinates16.radius * Math.cos(sphericalCoordinates1.phi);
  // const z16 = sphericalCoordinates16.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry16 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial16 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh16 = new THREE.Mesh(pointGeometry16, pointMaterial16);

  // // Set the position of the point
  // pointMesh16.position.set(x16, y16, z16);

  // // Set a specific class to the point mesh for identification
  // pointMesh16.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh16);





  // // Example usage:
  // const latitude17 = -2; // Replace with your actual latitude
  // const longitude17 = 51; // Replace with your actual longitude
  // const globeRadius17 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates17 = geographicToSpherical(latitude17, longitude17, globeRadius17);

  // // Use the spherical coordinates to map the point to the globe
  // const x17 = sphericalCoordinates17.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y17 = sphericalCoordinates17.radius * Math.cos(sphericalCoordinates1.phi);
  // const z17 = sphericalCoordinates17.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry17 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial17 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh17 = new THREE.Mesh(pointGeometry17, pointMaterial17);

  // // Set the position of the point
  // pointMesh17.position.set(x17, y17, z17);

  // // Set a specific class to the point mesh for identification
  // pointMesh17.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh17);


  // // Example usage:
  // const latitude18 = -19; // Replace with your actual latitude
  // const longitude18 = 26; // Replace with your actual longitude
  // const globeRadius18 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates18 = geographicToSpherical(latitude18, longitude18, globeRadius18);

  // // Use the spherical coordinates to map the point to the globe
  // const x18 = sphericalCoordinates18.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y18 = sphericalCoordinates18.radius * Math.cos(sphericalCoordinates1.phi);
  // const z18 = sphericalCoordinates18.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry18 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial18 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh18 = new THREE.Mesh(pointGeometry18, pointMaterial18);

  // // Set the position of the point
  // pointMesh18.position.set(x18, y18, z18);

  // // Set a specific class to the point mesh for identification
  // pointMesh18.userData.isLocationPoint = true;


  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh18);


  // // Example usage:
  // const latitude19 = -49; // Replace with your actual latitude
  // const longitude19 = 45; // Replace with your actual longitude
  // const globeRadius19 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates19 = geographicToSpherical(latitude19, longitude19, globeRadius19);

  // // Use the spherical coordinates to map the point to the globe
  // const x19 = sphericalCoordinates19.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y19 = sphericalCoordinates19.radius * Math.cos(sphericalCoordinates1.phi);
  // const z19 = sphericalCoordinates19.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry19 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial19 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh19 = new THREE.Mesh(pointGeometry19, pointMaterial19);

  // // Set the position of the point
  // pointMesh19.position.set(x19, y19, z19);

  // // Set a specific class to the point mesh for identification
  // pointMesh19.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh19);

  // // Example usage:
  // const latitude20 = 3; // Replace with your actual latitude
  // const longitude20 = 58; // Replace with your actual longitude
  // const globeRadius20 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates20 = geographicToSpherical(latitude20, longitude20, globeRadius20);

  // // Use the spherical coordinates to map the point to the globe
  // const x20 = sphericalCoordinates20.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y20 = sphericalCoordinates20.radius * Math.cos(sphericalCoordinates1.phi);
  // const z20 = sphericalCoordinates20.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry20 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial20 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh20 = new THREE.Mesh(pointGeometry20, pointMaterial20);

  // // Set the position of the point
  // pointMesh20.position.set(x20, y20, z20);

  // // Set a specific class to the point mesh for identification
  // pointMesh20.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh20);


  // // Example usage:
  // const latitude21 = -8; // Replace with your actual latitude
  // const longitude21 = -64; // Replace with your actual longitude
  // const globeRadius21 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates21 = geographicToSpherical(latitude21, longitude21, globeRadius21);

  // // Use the spherical coordinates to map the point to the globe
  // const x21 = sphericalCoordinates21.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y21 = sphericalCoordinates21.radius * Math.cos(sphericalCoordinates1.phi);
  // const z21 = sphericalCoordinates21.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry21 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial21 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh21 = new THREE.Mesh(pointGeometry21, pointMaterial21);

  // // Set the position of the point
  // pointMesh21.position.set(x21, y21, z21);

  // // Set a specific class to the point mesh for identification
  // pointMesh21.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh21);



  // // Example usage:
  // const latitude22 = 50; // Replace with your actual latitude
  // const longitude22 = -30; // Replace with your actual longitude
  // const globeRadius22 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates22 = geographicToSpherical(latitude22, longitude22, globeRadius22);

  // // Use the spherical coordinates to map the point to the globe
  // const x22 = sphericalCoordinates22.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y22 = sphericalCoordinates22.radius * Math.cos(sphericalCoordinates1.phi);
  // const z22 = sphericalCoordinates22.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry22 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial22 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh22 = new THREE.Mesh(pointGeometry22, pointMaterial22);

  // // Set the position of the point
  // pointMesh22.position.set(x22, y22, z22);

  // // Set a specific class to the point mesh for identification
  // pointMesh22.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh22);



  // // Example usage:
  // const latitude23 = 38; // Replace with your actual latitude
  // const longitude23 = -44; // Replace with your actual longitude
  // const globeRadius23 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates23 = geographicToSpherical(latitude23, longitude23, globeRadius23);

  // // Use the spherical coordinates to map the point to the globe
  // const x23 = sphericalCoordinates23.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y23 = sphericalCoordinates23.radius * Math.cos(sphericalCoordinates1.phi);
  // const z23 = sphericalCoordinates23.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry23 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial23 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh23 = new THREE.Mesh(pointGeometry23, pointMaterial23);

  // // Set the position of the point
  // pointMesh23.position.set(x23, y23, z23);

  // // Set a specific class to the point mesh for identification
  // pointMesh23.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh23);




  // // Example usage:
  // const latitude24 = 50; // Replace with your actual latitude
  // const longitude24 = 20; // Replace with your actual longitude
  // const globeRadius24 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates24 = geographicToSpherical(latitude24, longitude24, globeRadius24);

  // // Use the spherical coordinates to map the point to the globe
  // const x24 = sphericalCoordinates24.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y24 = sphericalCoordinates24.radius * Math.cos(sphericalCoordinates1.phi);
  // const z24 = sphericalCoordinates24.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry24 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial24 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh24 = new THREE.Mesh(pointGeometry24, pointMaterial24);

  // // Set the position of the point
  // pointMesh24.position.set(x24, y24, z24);

  // // Set a specific class to the point mesh for identification
  // pointMesh24.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh24);




  // // Example usage:
  // const latitude25 = -19; // Replace with your actual latitude
  // const longitude25 = 12; // Replace with your actual longitude
  // const globeRadius25 = 1.0; // Replace with your actual globe radius

  // const sphericalCoordinates25 = geographicToSpherical(latitude25, longitude25, globeRadius25);

  // // Use the spherical coordinates to map the point to the globe
  // const x25 = sphericalCoordinates25.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  // const y25 = sphericalCoordinates25.radius * Math.cos(sphericalCoordinates1.phi);
  // const z25 = sphericalCoordinates25.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);

  // // Create a point (marker) at the specified location
  // const pointGeometry25 = new THREE.SphereGeometry(0.010, 16, 16);
  // const pointMaterial25 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh25 = new THREE.Mesh(pointGeometry25, pointMaterial25);

  // // Set the position of the point
  // pointMesh25.position.set(x25, y25, z25);

  // // Set a specific class to the point mesh for identification
  // pointMesh25.userData.isLocationPoint = true;

  // // Add the point mesh to the scene
  // //earthmesh.add(pointMesh25);

  //   // Example usage:
  //   const latitude26 = 77; // Replace with your actual latitude
  //   const longitude26 = 10; // Replace with your actual longitude
  //   const globeRadius26 = 1.0; // Replace with your actual globe radius
  
  //   const sphericalCoordinates26 = geographicToSpherical(latitude26, longitude26, globeRadius26);
  
  //   // Use the spherical coordinates to map the point to the globe
  //   const x26 = sphericalCoordinates26.radius * Math.sin(sphericalCoordinates1.phi) * Math.cos(sphericalCoordinates1.theta);
  //   const y26 = sphericalCoordinates26.radius * Math.cos(sphericalCoordinates1.phi);
  //   const z26 = sphericalCoordinates26.radius * Math.sin(sphericalCoordinates1.phi) * Math.sin(sphericalCoordinates1.theta);
  
  //   // Create a point (marker) at the specified location
  //   const pointGeometry26 = new THREE.SphereGeometry(0.010, 16, 16);
  //   const pointMaterial26 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  //   const pointMesh26 = new THREE.Mesh(pointGeometry26, pointMaterial26);
  
  //   // Set the position of the point
  //   pointMesh26.position.set(x26, y26, z26);
  
  //   // Set a specific class to the point mesh for identification
  //   pointMesh26.userData.isLocationPoint = true;
  
    // Add the point mesh to the scene
    //earthmesh.add(pointMesh26);



  //Labels Of Apollo11-17
  const labelMeshes = {};

  // Function to create text label
  const createTextLabel = (text, model, distance, rotationAngle) => {
    const loader = new FontLoader();
    let font;

    // Load the font
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (loadedFont) => {
      font = loadedFont;

      // Create text geometry
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: 0.010, // Adjust the size as needed
        height: 0.002, // Adjust the height as needed
      });

      // Create text material
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

      // Create text mesh
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      // Calculate the bounding box of the model's geometry
      const boundingBox = new THREE.Box3().setFromObject(model);

      // Calculate the position for the text on the surface of the globe
      const textPosition = new THREE.Vector3(
        boundingBox.max.x + distance,
        boundingBox.max.y,
        boundingBox.max.z
      );

      // Set the position of the text mesh
      textMesh.position.copy(textPosition);

      // Apply rotation to the text mesh
      textMesh.rotation.set(0, rotationAngle, 0);

      //Initially Hide the text
      textMesh.visible = false;

      // Add text mesh to the scene
      earthmesh.add(textMesh);

      labelMeshes[model.uuid] = textMesh;
      //labelMesh.visible=false; 
      // // Position the text next to the model
      // const textPosition = model.position.clone().normalize().multiplyScalar(distance);
      // textMesh.position.copy(textPosition);

      // // Return the text mesh
      // earthmesh.add(textMesh);
    });
  };

  //Labels Of Seas And Oceans
  // Function to label a specific location on the globe with rotation and space

  //     // Helper function to calculate 3D coordinates based on latitude, longitude, and distance
  //     const calculateCoordinates = (latitude, longitude, distance) => {
  //     const globeRadius = 1; // Radius of the globe

  //     // Calculate the position in 3D space based on latitude and longitude
  //     const x = globeRadius * Math.sin(latitude) * Math.cos(longitude);
  //     const y = globeRadius * Math.cos(latitude);
  //     const z = globeRadius * Math.sin(latitude) * Math.sin(longitude);

  //     // Calculate the normalized direction vector
  //     const normalizedDirection = new THREE.Vector3(x, y, z).normalize();

  //     // Calculate the position of the point on the surface of the globe with space
  //     const pointPosition = normalizedDirection.multiplyScalar(globeRadius + distance);

  //     return pointPosition;
  //   };

  // // Function to create text label and return the text mesh
  // const createTextLabel1 = (text, position, rotationAngle) => {
  //   const loader = new FontLoader();
  //   let font;

  //   // Load the font
  //   loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (loadedFont) => {
  //     font = loadedFont;

  //     // Create text geometry
  //     const textGeometry = new TextGeometry(text, {
  //       font: font,
  //       size: 0.010, // Adjust the size as needed
  //       height: 0.002, // Adjust the height as needed
  //     });

  //     // Create text material
  //     const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  //     // Create text mesh
  //     const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  //     // Set the position of the text mesh
  //     textMesh.position.copy(position);

  //     // Apply rotation to the text mesh
  //     textMesh.rotation.set(0, rotationAngle, 0);

  //     // Add text mesh to the scene
  //     scene.add(textMesh);
  //   });
  // };

  // // Function to label a specific location on the globe with rotation and space
  // const labelLocation = (latitude, longitude, labelText, rotationAngle, space) => {
  //   // Assuming the moon's center is at (0, 0, 0)
  //   const globeRadius = 1; // Radius of the globe

  //   // Create a point (marker) at the specified location
  //   const pointGeometry = new THREE.SphereGeometry(0.005, 16, 16);
  //   const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  //   const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);

  //   // Calculate the position of the point with space
  //   const pointPosition = calculateCoordinates(latitude, longitude, space);
  //   pointMesh.position.copy(pointPosition);

  //   // Add the point mesh to the scene
  //   scene.add(pointMesh);

  //   // Create text label next to the point
  //   const textPosition = calculateCoordinates(latitude, longitude, space + 0.1); // Adjust the distance as needed
  //   createTextLabel1(labelText, textPosition, rotationAngle);
  //   };

  //   // Example usage with rotation and space
  //   labelLocation(Math.PI / 4, Math.PI / 4, 'Label 1', Math.PI / 6, 0); // Add space of 0.02 units
  //   labelLocation(-Math.PI / 6, -Math.PI / 3, 'Label 2', Math.PI / 4, 0.02); // Add space of 0.02 units




  // // Function to label a specific location on the globe with rotation and space
  // const labelLocation = (latitude, longitude, labelText, rotationAngle, space) => {
  // const loader = new FontLoader();
  // let font;

  // // Load the font
  // loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (loadedFont) => {
  //   font = loadedFont;

  //   // Create text geometry
  //   const textGeometry = new TextGeometry(labelText, {
  //     font: font,
  //     size: 0.05, // Adjust the size as needed
  //     height: 0.01, // Adjust the height as needed
  //   });

  // // Create text material
  // const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  // // Create text mesh
  // const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  // // Calculate the position in 3D space based on latitude and longitude
  // const globeRadius = 1; // Radius of the globe
  // const x = globeRadius * Math.sin(latitude) * Math.cos(longitude);
  // const y = globeRadius * Math.cos(latitude);
  // const z = globeRadius * Math.sin(latitude) * Math.sin(longitude);

  // // Set the position of the text mesh with a space
  // textMesh.position.set(x, y, z).normalize().multiplyScalar(globeRadius + space);

  // // Apply rotation to the text mesh
  // textMesh.rotation.set(0, rotationAngle, 0); // Adjust the rotation as needed

  // // Add the text mesh to the scene
  // earthmesh.add(textMesh);

  // // Create a point (marker) at the specified location
  // const pointGeometry = new THREE.SphereGeometry(0.005, 16, 16);
  // const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);

  // // Set the position of the point without normalizing
  // pointMesh.position.set(x, y, z);

  // // Move the point along the line connecting the point and text to create space
  // pointMesh.position.add(textMesh.position.clone().normalize().multiplyScalar(space));

  // // Add the point mesh to the scene
  // earthmesh.add(pointMesh);
  // });
  // };

  // // Example usage with rotation and space
  // labelLocation(Math.PI / 4, Math.PI / 4, 'Label 1', Math.PI / 6, 0.2); // Add space of 0.02 units
  // labelLocation(-Math.PI / 6, -Math.PI / 3, 'Label 2', Math.PI / 4, 0.02); // Add space of 0.02 units


  // Function to label a specific location on the globe with rotation
  const labelLocation = (latitude, longitude, labelText, rotationAngle) => {
    const loader = new FontLoader();
    let font;

    // Load the font
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (loadedFont) => {
      font = loadedFont;

      // Create text geometry
      const textGeometry = new TextGeometry(labelText, {
        font: font,
        size: 0.01, // Adjust the size as needed
        height: 0.002, // Adjust the height as needed
      });

      // Create text material
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

      // Create text mesh
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      // Calculate the position in 3D space based on latitude and longitude
      const globeRadius = 1; // Radius of the globe
      const x = globeRadius * Math.sin(latitude) * Math.cos(longitude);
      const y = globeRadius * Math.cos(latitude);
      const z = globeRadius * Math.sin(latitude) * Math.sin(longitude);

      // Set the position of the text mesh
      textMesh.position.set(x, y, z);

      // Apply rotation to the text mesh
      textMesh.rotation.set(0, rotationAngle, 0); // Adjust the rotation as needed

      // Set a specific class to the text mesh for identification
      textMesh.userData.isLocationLabel = true;

      // Add the text mesh to the scene
      earthmesh.add(textMesh);
      textMesh.visible = false;

      // Create a point (marker) at the specified location
      const pointGeometry = new THREE.SphereGeometry(0.005, 16, 16);
      const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);

      // Set the position of the point with a space
      pointMesh.position.set(x, y, z).normalize().multiplyScalar(globeRadius + 0);

      // Set the position of the point
      //pointMesh.position.set(x, y, z);

      // Set a specific class to the point mesh for identification
      pointMesh.userData.isLocationPoint = true;

      // Add the point mesh to the scene
      earthmesh.add(pointMesh);
      pointMesh.visible = false;
    });
  };

  // Example usage with rotation
  labelLocation(Math.PI / 2.5, Math.PI / -3, '   Mare Crisium', Math.PI / 1.3);
  labelLocation(Math.PI / 2.2, Math.PI / -6, '   Mare Tranquilitatis', Math.PI / 1.5);
  labelLocation(Math.PI / 1.95, Math.PI / -3.5, '  Mare Fecunditatis', Math.PI / 1.5);
  labelLocation(Math.PI / 1.7, Math.PI / -5.5, '   Mare Nectaris', Math.PI / 1.5);
  labelLocation(Math.PI / 1.57, Math.PI / 13, '    Mare Nubium', Math.PI / 2.5);
  labelLocation(Math.PI / 1.57, Math.PI / 4.5, '     Mare homorum', Math.PI / 3.5);
  labelLocation(Math.PI / 1.8, Math.PI / 7.5, '     Mare Cognitum', Math.PI / 3.5);
  labelLocation(Math.PI / 2.05, Math.PI / 3.8, '     Oceanus Procellarum', Math.PI / 3.6);
  labelLocation(Math.PI / 2.85, Math.PI / 7, '     Mare Imbrium', Math.PI / 3.6);
  labelLocation(Math.PI / 5.5, Math.PI / 32, '     Mare Frigoris', Math.PI / 2.0);
  labelLocation(Math.PI / 2.85, Math.PI / -10, '     Mare Serenitatis', Math.PI / 1.6);


  // labelLocation(Math.PI / 2, Math.PI / 2, 'Mare Serenitatis');
  // labelLocation(Math.PI / 4, Math.PI / 4, 'Label 1', Math.PI / 6);
  // labelLocation(-Math.PI / 6, -Math.PI / 3, 'Label 2', Math.PI / 4);
  //Latitude Longitude On/OFF

  // Function to toggle visibility of latitude and longitude lines

  // Assuming you have a button with the id "toggleButton"
  const toggleLine = document.getElementById('toggleButton1');

  //   // Function to toggle visibility of latitude and longitude lines
  //  const toggleLines = () => {
  //  earthmesh.children.forEach((line) => {
  //  line.visible = !line.visible;
  // });
  // };


  // // Attach the toggleLines function to the click event of the button
  // toggleLine.addEventListener('click', toggleLines);
  // Function to toggle visibility of latitude and longitude lines
  const toggleLines = () => {
    earthmesh.children.forEach((line) => {
      if (line instanceof THREE.Line) {
        // Check if the child is a line
        line.visible = !line.visible;
      }
    });
  };

  // Attach the toggleLines function to the click event of the button
  toggleLine.addEventListener('click', toggleLines);

  // HEIGHT MAP FUNCTION

  // // Create a variable for bump map and height map textures
  //let bumpMap, heightMap;


  // Create separate materials for bump map and height map
  let bumpMapMaterial = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    map: textureLoader.load(moonTexture),
    bumpMap: textureLoader.load(moonDisplacementMap),
    bumpScale: 0.85,
  });

  let heightMapMaterial = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    map: textureLoader.load(moonTexture),
    normalMap: textureLoader.load(heightMapImage), // Assuming heightMap is a normal map
    normalScale: new THREE.Vector2(1, 1),
  });

  // Assuming earthmesh is initially created with the bump map material
  earthmesh.material = bumpMapMaterial;

  // Function to toggle between bump map and height map
  const toggleMaps = () => {
    if (earthmesh) {
      // Toggle between bump map and height map

      // Check if bump map is currently applied
      const isBumpMap = earthmesh.material.map === bumpMapMaterial;

      //  if (isBumpMap) {
      //    // If bump map is applied, modify its properties
      //    earthmesh.material.bumpMap = null; // Remove bump map
      //    earthmesh.material.normalMap = textureLoader.load(heightMapImage); // Add height map
      //    earthmesh.material.normalScale = new THREE.Vector2(1, 1);
      //  } else {
      //    // If height map is applied or no map, modify bump map properties
      //    earthmesh.material.bumpMap = textureLoader.load(moonDisplacementMap);
      //    earthmesh.material.normalMap = null; // Remove height map
      //}
      if (isBumpMap) {
        // If bump map is applied, switch to height map
        earthmesh.material.map = heightMapMaterial;
      } else {
        // If height map is applied or no map, switch to bump map
        earthmesh.material.map = bumpMapMaterial;
      }

      // Update the material to reflect the change
      earthmesh.material.needsUpdate = true;
    }
  };

  // Load the bump map texture
  const textureLoader1 = new THREE.TextureLoader();
  bumpMapMaterial = textureLoader1.load(moonDisplacementMap);

  // Load the height map texture
  heightMapMaterial = textureLoader1.load(heightMapImage);

  // Create a button element
  //  const toggleButton = document.createElement('button');
  const toggleButton = document.getElementById('toggleButton2');
  //  toggleButton.textContent = 'Toggle Maps';
  toggleButton.addEventListener('click', toggleMaps);

  // Append the button to the HTML body or your desired container
  //document.body.appendChild(toggleButton);


  //Rotation Control Button
  let rotationEnabled = false;

  // Function to toggle rotation
  const toggleRotation = () => {
    rotationEnabled = !rotationEnabled;
  };

  // Attach the toggleRotation function to the click event of your button
  // Replace 'yourButtonId' with the actual id of your button
  const rotationButton = document.getElementById('toggleButton3');
  rotationButton.addEventListener('click', toggleRotation);

  //Apollo Models Button

  //Apollo Models Button
  let apollo11Visible = false;

  // Function to toggle the visibility of the Apollo 11 model
  const toggleApollo11 = () => {
    apollo11Visible = !apollo11Visible;

    //const labelMesh = /* Get the reference to the label mesh */;
    // if (labelMesh) {
    //   labelMesh.visible = apollo11Visible;
    // }
    if (model) {
      model.visible = apollo11Visible;
      const labelMesh = labelMeshes[model.uuid];
      if (labelMesh) {
        labelMesh.visible = apollo11Visible;
      }
    }
    if (model_12) {
      model_12.visible = apollo11Visible;
      const labelMesh = labelMeshes[model_12.uuid];
      if (labelMesh) {
        labelMesh.visible = apollo11Visible;
      }
    }
    if (model_14) {
      model_14.visible = apollo11Visible;
      const labelMesh = labelMeshes[model_14.uuid];
      if (labelMesh) {
        labelMesh.visible = apollo11Visible;
      }
    }
    if (model_15) {
      model_15.visible = apollo11Visible;
      const labelMesh = labelMeshes[model_15.uuid];
      if (labelMesh) {
        labelMesh.visible = apollo11Visible;
      }
    }
    if (model_16) {
      model_16.visible = apollo11Visible;
      const labelMesh = labelMeshes[model_16.uuid];
      if (labelMesh) {
        labelMesh.visible = apollo11Visible;
      }
    }
    if (model_17) {
      model_17.visible = apollo11Visible;
      const labelMesh = labelMeshes[model_17.uuid];
      if (labelMesh) {
        labelMesh.visible = apollo11Visible;
      }
    }
    // if (model) {
    //   model.visible = apollo11Visible;
    // }

    // if (model_12) {
    //   model_12.visible = apollo11Visible;
    // }

    // if (model_14) {
    //   model_14.visible = apollo11Visible;
    // }

    // if (model_15) {
    //   model_15.visible = apollo11Visible;
    // }

    // if (model_16) {
    //   model_16.visible = apollo11Visible;
    // }

    // if (model_17) {
    //   model_17.visible = apollo11Visible;
    // }
    // const labelMesh = labelMeshes['Apollo11'];
    // if (labelMesh) {
    //   labelMesh.visible = apollo11Visible;
    // }

  };

  // Attach the toggleApollo11 function to the click event of your button
  // Replace 'yourButtonId' with the actual id of your button
  const yourButton = document.getElementById('toggleButton4');
  yourButton.addEventListener('click', toggleApollo11);


  //Function to Display seas and oceans
  // Assuming you have a button with id 'toggleLocationsButton'
  // Variable to track the visibility state of locations and points
  let locationsVisible = false;

  // Function to toggle the visibility of labeled locations and points
  const toggleLocations = () => {
    locationsVisible = !locationsVisible;

    // Loop through children of earthmesh to find labeled locations and points
    earthmesh.children.forEach((child) => {
      if (child instanceof THREE.Mesh && child.userData.isLocationPoint) {
        // It's a point
        child.visible = locationsVisible;
      } else if (child instanceof THREE.Mesh && child.userData.isLocationLabel) {
        // It's a labeled location
        child.visible = locationsVisible;
      }
    });
  };

  // Get a reference to your button with id "toggleButton5"
  const toggleButton5 = document.getElementById('toggleButton5');

  // Attach the toggleLocations function to the click event of the button
  toggleButton5.addEventListener('click', toggleLocations);


  // // Function to toggle the visibility of labeled locations and points
  // const toggleLocations = () => {
  //   locationsVisible = !locationsVisible;

  //   // Loop through children of earthmesh to find labeled locations and points
  //   earthmesh.children.forEach((child) => {
  //     if (child instanceof THREE.Mesh) {
  //       // Check if it's a labeled location or point
  //       if (child.geometry instanceof THREE.SphereGeometry) {
  //         // It's a point
  //         child.visible = locationsVisible;
  //       } else if (child.geometry instanceof THREE.TextGeometry) {
  //         // It's a labeled location
  //         child.visible = locationsVisible;
  //       }
  //     }
  //   });

  //   // Update the button text based on the new visibility state
  //   //toggleLocationsButton.textContent = locationsVisible ? 'Hide Locations' : 'Show Locations';
  // };

  // // Attach the toggleLocations function to the click event of your existing button
  // toggleLocationsButton.addEventListener('click', toggleLocations);





  // let apollo11Visible = false;

  // // Function to toggle the visibility of the Apollo 11 model
  // const toggleApollo11 = () => {
  // apollo11Visible = !apollo11Visible;

  // if (model) {
  //   model.visible = apollo11Visible;
  // }

  // if (model_12) {
  //   model_12.visible = apollo11Visible;
  // }

  // if (model_14) {
  //   model_14.visible = apollo11Visible;
  // }

  // if (model_15) {
  //   model_15.visible = apollo11Visible;
  // }

  // if (model_16) {
  //   model_16.visible = apollo11Visible;
  // }

  // if (model_17) {
  //   model_17.visible = apollo11Visible;
  // }

  // };

  // // Attach the toggleApollo11 function to the click event of your button
  // // Replace 'yourButtonId' with the actual id of your button
  // const yourButton = document.getElementById('toggleButton4');
  // yourButton.addEventListener('click', toggleApollo11);



  // Add a cube to the moon

  //Apollo11
  // const cubeGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  // const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  // cube.position.set(0, 0.7, 0); // Adjust the position as needed
  // scene.add(cube);

  // Load a 3D model (for example, an OBJ model)
  // const loader = new THREE.OBJLoader();
  // let model;

  // loader.load('path/to/your/3d/model.obj', (obj) => {
  //   model = obj;
  //   // Position the model on the moon's surface
  //   model.position.set(0, 1, 0);
  //   scene.add(model);
  // });

  //Apollo11
  const loader = new TDSLoader();
  let model;

  loader.load('textures/lunarlandernofoil_carbajal.3ds', (object) => {
    model = object;
    //model.name='Apollo11';
    model.uuid = THREE.MathUtils.generateUUID();
    //Adjust size of model
    model.scale.set(0.005, 0.005, 0.005);

    // Position the model on the moon's surface
    model.position.set(0, 1, 0);

    // Rotate the model
    model.rotation.set(0, 0, 0);
    // model.rotation.set(0,0,0);

    // Make the model look at a point (adjust the point if needed)
    const lookAtPoint = new THREE.Vector3(1, 1, 0); // You may need to adjust these coordinates
    model.lookAt(lookAtPoint);



    // Assuming the moon's center is at (0, 0, 0), you can set the model on the globe's surface
    const globeRadius = 1; // Radius of the globe
    const latitude = Math.PI / 2.04; // Adjust the latitude as needed
    const longitude = Math.PI / -7; // Adjust the longitude as needed

    const x = globeRadius * Math.sin(latitude) * Math.cos(longitude);
    const y = globeRadius * Math.cos(latitude);
    const z = globeRadius * Math.sin(latitude) * Math.sin(longitude);

    model.position.set(x, y, z);

    earthmesh.add(model);
    model.visible = false;

    // Add text label next to the model
    const labelText = 'Apollo 11'; // Set your desired label text
    const textDistance = globeRadius * 0.01; // 1.2Adjust the distance as needed

    // Create text label and add it to the scene
    const textLabel = createTextLabel(labelText, model, textDistance, Math.PI / 2.04);
    earthmesh.add(textLabel);
  });



  //Apollo12
  let model_12;
  loader.load('textures/lunarlandernofoil_carbajal.3ds', (object) => {
    model_12 = object;
    model_12.uuid = THREE.MathUtils.generateUUID();
    // model.name='Apollo12';

    //Adjust size of model
    model_12.scale.set(0.005, 0.005, 0.005);

    // Position the model on the moon's surface
    model_12.position.set(0, 1, 0);

    // Rotate the model
    model_12.rotation.set(0, 0, 0);
    // model.rotation.set(0,0,0);

    // Make the model look at a point (adjust the point if needed)
    const lookAtPoint = new THREE.Vector3(1, 1, 0); // You may need to adjust these coordinates
    model_12.lookAt(lookAtPoint);

    // Assuming the moon's center is at (0, 0, 0), you can set the model on the globe's surface
    const globeRadius = 1; // Radius of the globe
    const latitude = Math.PI / 1.93; // Adjust the latitude as needed
    const longitude = Math.PI / 7.5; // Adjust the longitude as needed

    const x = globeRadius * Math.sin(latitude) * Math.cos(longitude);
    const y = globeRadius * Math.cos(latitude);
    const z = globeRadius * Math.sin(latitude) * Math.sin(longitude);

    model_12.position.set(x, y, z);

    earthmesh.add(model_12);
    model_12.visible = false;
    //earthmesh.add(model);

    // Add text label next to the model
    const labelText = 'Apollo 12'; // Set your desired label text
    const textDistance = globeRadius * 0.01; // 1.2Adjust the distance as needed

    // Create text label and add it to the scene
    const textLabel = createTextLabel(labelText, model_12, textDistance, Math.PI / 2.04);
    earthmesh.add(textLabel);
  });

  //Apollo14
  let model_14;
  loader.load('textures/lunarlandernofoil_carbajal.3ds', (object) => {
    model_14 = object;
    model_14.uuid = THREE.MathUtils.generateUUID();

    // model.name='Apollo14';

    //Adjust size of model
    model_14.scale.set(0.005, 0.005, 0.005);

    // Position the model on the moon's surface
    model_14.position.set(0, 1, 0);

    // Rotate the model
    model_14.rotation.set(0, 0, 0);
    // model.rotation.set(0,0,0);

    // Make the model look at a point (adjust the point if needed)
    const lookAtPoint = new THREE.Vector3(1, 1, 0); // You may need to adjust these coordinates
    model_14.lookAt(lookAtPoint);

    // Assuming the moon's center is at (0, 0, 0), you can set the model on the globe's surface
    const globeRadius = 1; // Radius of the globe
    const latitude = Math.PI / 1.90; // Adjust the latitude as needed
    const longitude = Math.PI / 10; // Adjust the longitude as needed

    const x = globeRadius * Math.sin(latitude) * Math.cos(longitude);
    const y = globeRadius * Math.cos(latitude);
    const z = globeRadius * Math.sin(latitude) * Math.sin(longitude);

    model_14.position.set(x, y, z);

    earthmesh.add(model_14);
    model_14.visible = false;
    // Add text label next to the model
    const labelText = 'Apollo 14'; // Set your desired label text
    const textDistance = globeRadius * 0.01; // 1.2Adjust the distance as needed

    // Create text label and add it to the scene
    const textLabel = createTextLabel(labelText, model_14, textDistance, Math.PI / 2.04);
    earthmesh.add(textLabel);
  });

  //Apollo15
  let model_15;
  loader.load('textures/lunarlandernofoil_carbajal.3ds', (object) => {
    model_15 = object;
    model_15.uuid = THREE.MathUtils.generateUUID();

    // model.name='Apollo15';

    //Adjust size of model
    model_15.scale.set(0.005, 0.005, 0.005);

    // Position the model on the moon's surface
    model_15.position.set(0, 1, 0);

    // Rotate the model
    model_15.rotation.set(0, 0, 0);
    // model.rotation.set(0,0,0);

    // Make the model look at a point (adjust the point if needed)
    const lookAtPoint = new THREE.Vector3(1, 1, 0); // You may need to adjust these coordinates
    model_15.lookAt(lookAtPoint);

    // Assuming the moon's center is at (0, 0, 0), you can set the model on the globe's surface
    const globeRadius = 1; // Radius of the globe
    const latitude = Math.PI / 2.85; // Adjust the latitude as needed
    const longitude = Math.PI / -40; // Adjust the longitude as needed

    const x = globeRadius * Math.sin(latitude) * Math.cos(longitude);
    const y = globeRadius * Math.cos(latitude);
    const z = globeRadius * Math.sin(latitude) * Math.sin(longitude);

    model_15.position.set(x, y, z);

    earthmesh.add(model_15);
    model_15.visible = false;

    // Add text label next to the model
    const labelText = 'Apollo 15'; // Set your desired label text
    const textDistance = globeRadius * 0.01; // 1.2Adjust the distance as needed

    // Create text label and add it to the scene
    const textLabel = createTextLabel(labelText, model_15, textDistance, Math.PI / 2.04);
    earthmesh.add(textLabel);
  });

  //Apollo16
  let model_16;
  loader.load('textures/lunarlandernofoil_carbajal.3ds', (object) => {
    model_16 = object;
    model_16.uuid = THREE.MathUtils.generateUUID();

    // model.name='Apollo16';

    //Adjust size of model
    model_16.scale.set(0.005, 0.005, 0.005);

    // Position the model on the moon's surface
    model_16.position.set(0, 1, 0);

    // Rotate the model
    model_16.rotation.set(0, 0, 0);
    // model.rotation.set(0,0,0);

    // Make the model look at a point (adjust the point if needed)
    const lookAtPoint = new THREE.Vector3(1, 1, 0); // You may need to adjust these coordinates
    model_16.lookAt(lookAtPoint);

    // Assuming the moon's center is at (0, 0, 0), you can set the model on the globe's surface
    const globeRadius = 1; // Radius of the globe
    const latitude = Math.PI / 1.8; // Adjust the latitude as needed
    const longitude = Math.PI / -12.5; // Adjust the longitude as needed

    const x = globeRadius * Math.sin(latitude) * Math.cos(longitude);
    const y = globeRadius * Math.cos(latitude);
    const z = globeRadius * Math.sin(latitude) * Math.sin(longitude);

    model_16.position.set(x, y, z);

    earthmesh.add(model_16);
    model_16.visible = false;
    // Add text label next to the model
    const labelText = 'Apollo 16'; // Set your desired label text
    const textDistance = globeRadius * 0.01; // 1.2Adjust the distance as needed

    // Create text label and add it to the scene
    const textLabel = createTextLabel(labelText, model_16, textDistance, Math.PI / 2.04);
    earthmesh.add(textLabel);
  });

  //Apollo17
  let model_17;
  loader.load('textures/lunarlandernofoil_carbajal.3ds', (object) => {
    model_17 = object;
    model_17.uuid = THREE.MathUtils.generateUUID();

    // model.name='Apollo17';

    //Adjust size of model
    model_17.scale.set(0.005, 0.005, 0.005);

    // Position the model on the moon's surface
    model_17.position.set(0, 1, 0);

    // Rotate the model
    model_17.rotation.set(0, 0, 0);
    // model.rotation.set(0,0,0);

    // Make the model look at a point (adjust the point if needed)
    const lookAtPoint = new THREE.Vector3(1, 1, 0); // You may need to adjust these coordinates
    model_17.lookAt(lookAtPoint);

    // Assuming the moon's center is at (0, 0, 0), you can set the model on the globe's surface
    const globeRadius = 1; // Radius of the globe
    const latitude = Math.PI / 2.6; // Adjust the latitude as needed
    const longitude = Math.PI / -5.7; // Adjust the longitude as needed

    const x = globeRadius * Math.sin(latitude) * Math.cos(longitude);
    const y = globeRadius * Math.cos(latitude);
    const z = globeRadius * Math.sin(latitude) * Math.sin(longitude);

    model_17.position.set(x, y, z);

    earthmesh.add(model_17);
    model_17.visible = false;
    // Add text label next to the model
    const labelText = 'Apollo 17'; // Set your desired label text
    const textDistance = globeRadius * 0.01; // 1.2Adjust the distance as needed

    // Create text label and add it to the scene
    const textLabel = createTextLabel(labelText, model_17, textDistance, Math.PI / 2.04);
    earthmesh.add(textLabel);
  });

  //  // Function to create latitude lines
  //  const createLatitudeLines = (radius, latitude, segments) => {
  //  const geometry = new THREE.BufferGeometry();
  //  const material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });

  //  const vertices = [];
  //  const phi = Math.PI * latitude / 180;

  //  for (let i = 0; i <= segments; i++) {
  //    const theta = 2 * Math.PI * i / segments;
  //    const x = radius * Math.sin(phi) * Math.cos(theta);
  //    const y = radius * Math.cos(phi);
  //    const z = radius * Math.sin(phi) * Math.sin(theta);

  //    vertices.push(x, y, z);
  //  }

  //  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  //  const line = new THREE.LineLoop(geometry, material);
  //  scene.add(line);
  //  };

  //  // Create latitude lines
  //  const latitudeSegments = 16;
  //  for (let lat = -90; lat <= 90; lat += 180 / latitudeSegments) {
  //    createLatitudeLines(1, lat, 32);
  //  }

  //  // Function to create longitude lines
  //  const createLongitudeLines = (radius, longitude, segments) => {
  //  const geometry = new THREE.BufferGeometry();
  //  const material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });


  //  const vertices = [];
  //  const theta = Math.PI * longitude / 180;

  //  for (let i = 0; i <= segments; i++) {
  //    const phi = 2 * Math.PI * i / segments;
  //    const x = radius * Math.sin(phi) * Math.cos(theta);
  //    const y = radius * Math.cos(phi);
  //    const z = radius * Math.sin(phi) * Math.sin(theta);

  //    vertices.push(x, y, z);
  //  }

  //  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  //  const line = new THREE.LineLoop(geometry, material);
  //  scene.add(line);
  //  };

  //  // Create longitude lines
  //  const longitudeSegments = 32;
  //  for (let lon = 0; lon <= 360; lon += 360 / longitudeSegments) {
  //    createLongitudeLines(1, lon, 32);
  //  }


  //create Rotaion Control
  const controls = new OrbitControls(camera, renderer.domElement);
  // const controls = new OrbitControls(camera);
  // controls = new THREE.OrbitControls(camera, renderer.domElement);

  //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;

  controls.screenSpacePanning = false;

  controls.minDistance = 1;
  controls.maxDistance = 3;

  // controls.maxPolarAngle = Math.PI/2;
  controls.maxPolarAngle = Math.PI;


  //sel ambientlight

  const ambientlight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientlight);

  //set point light
  const pointerlight = new THREE.PointLight(0xffffff, 0.2);

  //set light position
  pointerlight.position.set(5, 3, 5);
  scene.add(pointerlight);

  //star
  //STARS IN backgroung using galaxy



  const animate = () => {
    requestAnimationFrame(animate);
    // earthmesh.rotation.y-=-0.00015;
    //earthmesh.rotation.y-=-0.001;
    if (rotationEnabled) {
      // Rotate only when rotation is enabled
      earthmesh.rotation.y -= -0.001;
    }
    controls.update();
    render();
  }
  const render = () => {
    renderer.render(scene, camera);
  }
  animate();
}
window.onload = main;































































// //Create new scene
// const scene = new THREE.Scene();

// //Create Sphere
// const geometry = new THREE.SphereGeometry(3,64,64);

// //Load textures
// const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load(moonTexture);
// const displacementMap = textureLoader.load(moonDisplacementMap);

// //add material
// const material = new THREE.MeshStandardMaterial({
//   color: 0xffffff,
//   map: texture,
//   displacementMap: displacementMap,
//   displacementScale: 0.05,
//   bumpMap: displacementMap,
//   bumpScale: 0.04,
// });

// const mesh = new THREE.Mesh(geometry,material);
// scene.add(mesh);

// //Sizes
// let w;
// if(window.innerWidth<800){
//   w=window.innerWidth;
// }
// else{
//   w=window.innerWidth/2;
// }
// let h= window.innerHeight;

// //Light
// const light = new THREE.DirectionalLight(0xffffff,1);
// light.position.set(100,10,5);
// scene.add(light);

// //Camera
// const camera = new THREE.PerspectiveCamera(25,w/h);
// camera.position.z=20;
// scene.add(camera);

// //Renderer
// const canvas = document.querySelector('canvas.webgl');
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas, antialias:true
// });
// renderer.render(scene,camera);

// //Orbit Controls
// const controls = new OrbitControls(camera,canvas);
// controls.enableDamping=true;
// controls.enablePan=false;
// controls.enableZoom=false;

// //Window Resize
// //**Update Size 
// window.addEventListener("resize", () =>{
//   if(window,innerWidth<800){
//     w=window.innerWidth;
//   }
//   else{
//     w=window.innerWidth/2;
//   }
//   h=window.innerHeight;
// //**Update camera
// camera.aspect=w/h;
// camera.updateProjectionMatrix();
// renderer.setSize(w,h);
// })

// //Animate and update the scene
// const loop = () =>{
//   mesh.rotation.y += 0.001;
//   renderer.render(scene,camera);
//   window.requestAnimationFrame(loop);
// }
// loop();