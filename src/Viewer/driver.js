import * as THREE from 'three'
let clock = new THREE.Clock()

let container,canvas,camera, scene, renderer,textureloader

export const mountThreeJS = () => {
    console.log('mounting threejs application')
    
    //grab app canvas & container
    container = document.getElementById("viewer-container")
    canvas = document.getElementById("viewer")

    //initialize threejs objects
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.001, 1000 )
    scene.add(camera)

    camera.target = new THREE.Vector3(0,0,0)

    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    })


    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0xffffff,0.2)
    let gl = renderer.getContext()

    //initialize loaders
    let loader = new THREE.LoadingManager()
    loader.onLoad = () => { console.log("Loading Complete") }
    loader.onError = (url, err) => { console.log("Error: " + err); console.log("^^^Loading Asset " + url + " ^^^") }

    let textureloader = new THREE.TextureLoader(loader)


    //inject listeners
    window.addEventListener('resize', onWindowResize)
  
    //call window resize to correct aspect ratio
    onWindowResize()

    //draw
    draw()
}




//event listeners
let onWindowResize = () => {
    let rect = container.getBoundingClientRect()
    //set camera aspect ratio
    camera.aspect = rect.width / rect.height
    //set viewport and size for renderer
    renderer.setViewport(0,0,container.clientWidth, container.clientHeight)
    renderer.setSize(rect.width,rect.height) 
}


// main threejs functions

let render = () => {
    renderer.render(scene,camera)
}

let update = (delta) => {
    
    camera.updateProjectionMatrix()
}

let draw = () => {
    let delta = clock.getDelta()
    update(delta)
    render()

    requestAnimationFrame(draw)   

}