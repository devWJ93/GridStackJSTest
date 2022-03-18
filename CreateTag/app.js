/// <reference path = "../API/babylon.max.js" />
/// <reference path = "../API/babylon.max.js.map"/>
/// <reference path = "../API/babylon.d.ts" />
/// <reference path = "../API/babylonjs.loaders.min.js"/>
/// <reference path = "../API/babylon.gui.d.ts" />
/// <reference path = "../API/babylon.gui.js" />

var inputString = prompt("추가할 개수를 입력하세요.", 0);
alert(inputString + "개를 출력합니다.");
var createNum = parseInt(inputString);

var inputArea = document.getElementById("grid-stack");

// fetch("./canvasData.json")
//     .then((resp) => {
//         return resp.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });

var createHTMLElement = (canvasName) => {
    //grid-stack-item 생성
    var grid_stack_item = document.createElement('div');
    grid_stack_item.setAttribute('class', 'grid-stack-item');
    grid_stack_item.setAttribute('data-gs-width', '5');
    grid_stack_item.setAttribute('data-gs-height', '5');
    inputArea.appendChild(grid_stack_item);

    //grid-stack-item-content 생성
    var grid_stack_item_content = document.createElement('div');
    grid_stack_item_content.setAttribute('class', 'grid-stack-item-content');
    grid_stack_item.appendChild(grid_stack_item_content);

    var canvasContent = document.createElement('canvas');
    canvasContent.setAttribute('id', canvasName);
    grid_stack_item_content.appendChild(canvasContent);
};

for(var i = 0; i < createNum; i++){
    switch(i){
        case 0:
            createHTMLElement('renderCanvas');
            createBabylonScene('renderCanvas');
            break;
        case 1:
            createHTMLElement('MyChart_' + i);
            createBarChart('MyChart_' + i);
            break;
        case 2:
            createHTMLElement('MyChart_' + i);
            createLineChart('MyChart_' + i);
            break;
        case 3:
            createHTMLElement('MyChart_' + i);
            createPieChart('MyChart_' + i);
            break;
        default:
            createHTMLElement('MyChart_' + i);
        break;
    }

    // if(i == 0){
    //     createHTMLElement('renderCanvas');
    // }
    // else{
    //     createHTMLElement('MyChart_' + i)
    // }
}

function createBarChart(elementName){
    var chartElement = document.getElementById(elementName).getContext('2d');
    var barChart = new Chart(chartElement, {
        type: 'bar', //pie, line, doughnut, polarArea
        data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{
                label: 'Dummy',
                data: [
                    200,
                    100,
                    250,
                    200,
                    1000
                ],
                backgroundColor: [
                    'red',
                    'rgba(255, 255, 0, 0.5)',
                    '#990000',
                    'skyblue',
                    'dodgerblue',
                ],
                borderWidth: 2,
                borderColor: '#000',
                hoverBorderWidth: 5,
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Bar Chart',
                    color: 'red',
                    font: {
                        size: 30,

                    }
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 20,
                    bottom: 10
                }
            }
        },
        tooltip: {
            enabled: true,
        },

    });

    return barChart;
}

function createPieChart(elementName){
    var chartElement = document.getElementById(elementName).getContext('2d');
    var pieChart = new Chart(chartElement, {
        type: 'pie', //pie, line, doughnut, polarArea
        data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{
                label: 'Dummy',
                data: [
                    200,
                    100,
                    250,
                    200,
                    1000
                ],
                backgroundColor: [
                    'red',
                    'rgba(255, 255, 0, 0.5)',
                    '#990000',
                    'skyblue',
                    'dodgerblue',
                ],
                borderWidth: 2,
                borderColor: '#000',
                hoverBorderWidth: 5,
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Pie Chart',
                    color: 'red',
                    font: {
                        size: 30,

                    }
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 20,
                    bottom: 10
                }
            }
        },
        tooltip: {
            enabled: true,
        },
    });

    return pieChart;
}

function createLineChart(elementName){
    var chartElement = document.getElementById(elementName).getContext('2d');
    var lineChart = new Chart(chartElement, {
        type: 'line', //pie, line, doughnut, polarArea
        data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{
                label: 'Dummy',
                data: [
                    200,
                    100,
                    250,
                    200,
                    1000
                ],
                backgroundColor: [
                    'red',
                    'rgba(255, 255, 0, 0.5)',
                    '#990000',
                    'skyblue',
                    'dodgerblue',
                ],
                borderWidth: 2,
                borderColor: '#000',
                hoverBorderWidth: 5,
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Line Chart',
                    color: 'red',
                    font: {
                        size: 30,

                    }
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 20,
                    bottom: 10
                }
            }
        },
        tooltip: {
            enabled: true,
        },
    });

    return lineChart;
}

function createBabylonScene(elementName) {
    var engine;
    var canvas;
    var scene;

    document.addEventListener("DOMContentLoaded", startApp);

    function startApp() {
        canvas = document.getElementById(elementName);
        scene = createScene();
    }

    async function createScene() {
        engine = new BABYLON.Engine(canvas, true);
        var scene = new BABYLON.Scene(engine);

        var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 5, -5), scene);
        camera.attachControl(canvas);

        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(50, -100, 0), scene);
        var light_1 = new BABYLON.HemisphericLight("light_1", new BABYLON.Vector3(50, 100, 0), scene);
        var light_2 = new BABYLON.HemisphericLight("light_2", new BABYLON.Vector3(-50, 100, 0), scene);

        await BABYLON.SceneLoader.ImportMeshAsync("", "../Chart/models/", "red_01.glb", scene);

        engine.runRenderLoop(function () {
            scene.render();
        });

        return scene;
    }

    window.addEventListener("resize", function () {
        engine.resize();
    });
}