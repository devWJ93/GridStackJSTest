/// <reference path = "API/babylon.max.js" />
/// <reference path = "API/babylon.max.js.map"/>
/// <reference path = "API/babylon.d.ts" />
/// <reference path = "API/babylonjs.loaders.min.js"/>
/// <reference path = "API/babylon.gui.d.ts" />
/// <reference path = "API/babylon.gui.js" />

let engine;
let canvas;
let scene;

document.addEventListener("DOMContentLoaded", startApp);

function startApp(){
    canvas = document.getElementById("renderCanvas_3");
    scene = createScene();
}

async function createScene(){
    engine = new BABYLON.Engine(canvas, true);
    let scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 5, -5), scene);
    camera.attachControl(canvas);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(50, -100, 0), scene);
    var light_1 = new BABYLON.HemisphericLight("light_1", new BABYLON.Vector3(50, 100, 0), scene);
    var light_2 = new BABYLON.HemisphericLight("light_2", new BABYLON.Vector3(-50, 100, 0), scene);

    await BABYLON.SceneLoader.ImportMeshAsync("", "models/", "red_01.glb", scene);

    engine.runRenderLoop(function () {
        scene.render();
    });
    
    return scene;
}

window.addEventListener("resize", function () {
    engine.resize();
});