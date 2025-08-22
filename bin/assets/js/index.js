///<reference path="../libs/stagegl-extensions.next.d.ts" />
var examples;
(function (examples) {
    var PrimitiveCubePrefab = away.prefabs.PrimitiveCubePrefab;

    var Box = (function () {
        /**
        * Constructor
        */
        function Box(scene, material) {
            this.setup(scene, material);
        }
        /**
        * setup
        */
        Box.prototype.setup = function (scene, material) {
            var rnd = Math.random() * 400 + 200;
            this.cube = new PrimitiveCubePrefab(rnd, rnd, rnd, 1, 1, 1, false).getNewObject();
            this.cube.material = material;
            this.cube.rotationX = Math.random() * 360;
            this.cube.rotationY = Math.random() * 360;
            this.cube.rotationZ = Math.random() * 360;
            scene.addChild(this.cube);
        };
        return Box;
    })();
    examples.Box = Box;
})(examples || (examples = {}));
///<reference path="../libs/stagegl-extensions.next.d.ts" />
///<reference path="./Box.ts" />
var examples;
(function (examples) {
    var StateMotionA = (function () {
        /**
        * Constructor
        */
        function StateMotionA(boxArray, cameraController) {
            this._boxArray = boxArray;
            this._cameraController = cameraController;

            this.setupPosition();
        }
        /**
        *
        */
        StateMotionA.prototype.reset = function () {
            this._boxArray = [];
        };

        /**
        *
        */
        StateMotionA.prototype.setupPosition = function () {
            var len = this._boxArray.length;

            for (var i = 0; i < len; i++) {
                var box = this._boxArray[i];
                box.posx = 0;
                box.posy = 0;
                box.posz = 0;
            }

            //カメラ
            this._distance = Math.random() * 1000 + 600;
        };

        /**
        *
        */
        StateMotionA.prototype.run = function () {
            var len = this._boxArray.length;
            for (var i = 0; i < len; i++) {
                var box = this._boxArray[i];

                box.cube.x += (box.posx - box.cube.x) * 0.2;
                box.cube.y += (box.posy - box.cube.y) * 0.2;
                box.cube.z += (box.posz - box.cube.z) * 0.2;

                box.cube.rotationX += 1;
            }

            //カメラ
            this._cameraController.distance += (this._distance - this._cameraController.distance) * 0.08;
            this._cameraController.panAngle += 0.5;
        };
        return StateMotionA;
    })();
    examples.StateMotionA = StateMotionA;
})(examples || (examples = {}));
///<reference path="../libs/stagegl-extensions.next.d.ts" />
///<reference path="./Box.ts" />
var examples;
(function (examples) {
    var StateMotionB = (function () {
        /**
        * Constructor
        */
        function StateMotionB(boxArray, cameraController) {
            this._boxArray = boxArray;
            this._cameraController = cameraController;

            this.setupPosition();
        }
        /**
        *
        */
        StateMotionB.prototype.reset = function () {
            this._boxArray = [];
        };

        /**
        *
        */
        StateMotionB.prototype.setupPosition = function () {
            var range = 1000;
            var len = this._boxArray.length;

            for (var i = 0; i < len; i++) {
                var box = this._boxArray[i];
                box.posx = Math.random() * range - range * 0.5;
                box.posy = Math.random() * range - range * 0.5;
                box.posz = Math.random() * range - range * 0.5;
            }

            //カメラ
            this._distance = Math.random() * 400 + 1000;
        };

        /**
        *
        */
        StateMotionB.prototype.run = function () {
            var len = this._boxArray.length;
            for (var i = 0; i < len; i++) {
                var box = this._boxArray[i];

                box.cube.x += (box.posx - box.cube.x) * 0.2;
                box.cube.y += (box.posy - box.cube.y) * 0.2;
                box.cube.z += (box.posz - box.cube.z) * 0.2;

                box.cube.rotationX += 1;
            }

            //カメラ
            this._cameraController.distance += (this._distance - this._cameraController.distance) * 0.08;
            this._cameraController.panAngle += 0.5;
        };
        return StateMotionB;
    })();
    examples.StateMotionB = StateMotionB;
})(examples || (examples = {}));
///<reference path="../libs/stagegl-extensions.next.d.ts" />
///<reference path="./Box.ts" />
var examples;
(function (examples) {
    var StateMotionC = (function () {
        /**
        * Constructor
        */
        function StateMotionC(boxArray, cameraController) {
            this._boxArray = boxArray;
            this._cameraController = cameraController;

            this.setupPosition();
        }
        /**
        *
        */
        StateMotionC.prototype.reset = function () {
            this._boxArray = [];
        };

        /**
        *
        */
        StateMotionC.prototype.setupPosition = function () {
            var len = this._boxArray.length;

            for (var i = 0; i < 50; i++) {
                var box = this._boxArray[i];
                box.posx = -1250 + Math.floor(i / 5) * 550;
                box.posy = -1250 + (i % 5) * 550;
                box.posz = 0;
            }

            for (var i = 50; i < 100; i++) {
                var box = this._boxArray[i];
                box.posx = -1250 + Math.floor((i - 50) / 5) * 550;
                box.posy = -1450 + ((i - 50) % 5) * 550;
                box.posz = 0;
            }

            //カメラ
            this._distance = Math.random() * 400 + 1000;
        };

        /**
        *
        */
        StateMotionC.prototype.run = function () {
            var len = this._boxArray.length;
            for (var i = 0; i < len; i++) {
                var box = this._boxArray[i];

                box.cube.x += (box.posx - box.cube.x) * 0.2;
                box.cube.y += (box.posy - box.cube.y) * 0.2;
                box.cube.z += (box.posz - box.cube.z) * 0.2;

                box.cube.rotationX += 1;
            }

            //カメラ
            this._cameraController.distance += (this._distance - this._cameraController.distance) * 0.08;
            this._cameraController.panAngle += 0.5;
        };
        return StateMotionC;
    })();
    examples.StateMotionC = StateMotionC;
})(examples || (examples = {}));
///<reference path="../libs/stagegl-extensions.next.d.ts" />
///<reference path="./Box.ts" />
var examples;
(function (examples) {
    var StateMotionD = (function () {
        /**
        * Constructor
        */
        function StateMotionD(boxArray, cameraController) {
            this._boxArray = boxArray;
            this._cameraController = cameraController;

            this.setupPosition();

            this._isMoved = false;
        }
        /**
        *
        */
        StateMotionD.prototype.reset = function () {
            this._boxArray = [];
        };

        /**
        *
        */
        StateMotionD.prototype.setupPosition = function () {
            var len = this._boxArray.length;

            for (var i = 0; i < len; i++) {
                var box = this._boxArray[i];
                box.posx = -2500 + Math.floor(i / 2) * 300;
                box.posy = -500 + (i % 2) * 1000;
                box.posz = 0;
            }

            //カメラ
            this._distance = Math.random() * 400 + 1000;
        };

        /**
        *
        */
        StateMotionD.prototype.run = function () {
            var len = this._boxArray.length;
            for (var i = 0; i < len; i++) {
                var box = this._boxArray[i];

                if (!this._isMoved) {
                    if (Math.abs(box.posx - box.cube.x) > 0.1 || Math.abs(box.posy - box.cube.y) > 0.1 || Math.abs(box.posz - box.cube.z) > 0.1) {
                        box.cube.x += (box.posx - box.cube.x) * 0.2;
                        box.cube.y += (box.posy - box.cube.y) * 0.2;
                        box.cube.z += (box.posz - box.cube.z) * 0.2;
                    } else {
                        this._isMoved = true;
                    }
                } else {
                    //定位置に移動後、左右に動く
                    if (i % 2 == 0) {
                        box.cube.x += 5;
                    } else {
                        box.cube.x -= 5;
                    }
                }
                box.cube.rotationX += 1;
            }

            //カメラ
            this._cameraController.distance += (this._distance - this._cameraController.distance) * 0.08;
            this._cameraController.panAngle += 0.5;
        };
        return StateMotionD;
    })();
    examples.StateMotionD = StateMotionD;
})(examples || (examples = {}));
///<reference path="../libs/stagegl-extensions.next.d.ts" />
///<reference path="./Box.ts" />
var examples;
(function (examples) {
    var StateMotionE = (function () {
        /**
        * Constructor
        */
        function StateMotionE(boxArray, cameraController) {
            this._boxArray = boxArray;
            this._cameraController = cameraController;

            this.setupPosition();

            this._isMoved = false;
        }
        /**
        *
        */
        StateMotionE.prototype.reset = function () {
            this._boxArray = [];
        };

        /**
        *
        */
        StateMotionE.prototype.setupPosition = function () {
            var len = this._boxArray.length;

            for (var i = 0; i < 50; i++) {
                var box = this._boxArray[i];
                box.posx = 0;
                box.posy = -2500 + (i * 400);
                box.posz = 0;
            }

            for (var i = 50; i < 100; i++) {
                var box = this._boxArray[i];
                box.posx = 0;
                box.posy = -2500 + ((i - 50) * 400);
                box.posz = 0;
            }

            //カメラ
            this._distance = Math.random() * 400 + 1000;
        };

        /**
        *
        */
        StateMotionE.prototype.run = function () {
            var len = this._boxArray.length;
            for (var i = 0; i < len; i++) {
                var box = this._boxArray[i];

                if (!this._isMoved) {
                    if (Math.abs(box.posx - box.cube.x) > 0.1 || Math.abs(box.posy - box.cube.y) > 0.1 || Math.abs(box.posz - box.cube.z) > 0.1) {
                        box.cube.x += (box.posx - box.cube.x) * 0.2;
                        box.cube.y += (box.posy - box.cube.y) * 0.2;
                        box.cube.z += (box.posz - box.cube.z) * 0.2;
                    } else {
                        this._isMoved = true;
                    }
                } else {
                    //定位置に移動後、左右に動く
                    box.cube.y += 5;
                }
                box.cube.rotationX += 1;
            }

            //カメラ
            this._cameraController.distance += (this._distance - this._cameraController.distance) * 0.08;
            this._cameraController.panAngle += 0.5;
        };
        return StateMotionE;
    })();
    examples.StateMotionE = StateMotionE;
})(examples || (examples = {}));
///<reference path="../libs/stagegl-extensions.next.d.ts" />
///<reference path="../libs/ref/jquery.d.ts" />
///<reference path="../libs/ref/underscore.d.ts" />
///<reference path="./Box.ts" />
///<reference path="./StateMotionA.ts" />
///<reference path="./StateMotionB.ts" />
///<reference path="./StateMotionC.ts" />
///<reference path="./StateMotionD.ts" />
///<reference path="./StateMotionE.ts" />
var examples;
(function (examples) {
    var Scene = away.containers.Scene;
    var View = away.containers.View;
    var HoverController = away.controllers.HoverController;

    var Camera = away.entities.Camera;

    var Vector3D = away.geom.Vector3D;

    var DirectionalLight = away.entities.DirectionalLight;

    var StaticLightPicker = away.materials.StaticLightPicker;
    var TriangleMethodMaterial = away.materials.TriangleMethodMaterial;

    var DefaultRenderer = away.render.DefaultRenderer;

    var RequestAnimationFrame = away.utils.RequestAnimationFrame;

    var Index = (function () {
        /**
        * Constructor
        */
        function Index() {
            this._stateIndex = 0;
            this._motionArray = ["A", "B", "C", "D", "E"];
            this._time = 0;
            this._move = false;
            this.init();
        }
        /**
        * Global initialise function
        */
        Index.prototype.init = function () {
            this.initEngine();
            this.initLights();
            this.initMaterials();
            this.initObjects();
            this.initListeners();

            this.startTimer();
        };

        /**
        * Initialise the engine
        */
        Index.prototype.initEngine = function () {
            this._scene = new Scene();

            this._camera = new Camera();

            this._view = new View(new DefaultRenderer());
            this._view.scene = this._scene;
            this._view.camera = this._camera;
            this._view.backgroundColor = 0xEEEEEE;

            //setup controller to be used on the camera
            this._cameraController = new HoverController(this._camera);
            this._cameraController.distance = 1000;
            this._cameraController.minTiltAngle = 0;
            this._cameraController.maxTiltAngle = 90;
            this._cameraController.panAngle = 45;
            this._cameraController.tiltAngle = 0;
        };

        /**
        * Initialise the entities
        */
        Index.prototype.initLights = function () {
            this._light1 = new DirectionalLight();
            this._light1.direction = new Vector3D(0, -1, 1);
            this._light1.ambient = 0.9;
            this._light1.diffuse = 0.1;

            this._scene.addChild(this._light1);

            this._lightPicker = new StaticLightPicker([this._light1]);
        };

        /**
        * Initialise the materials
        */
        Index.prototype.initMaterials = function () {
            this._cubeMaterial = new TriangleMethodMaterial();
            this._cubeMaterial.lightPicker = this._lightPicker;
        };

        /**
        * Initialise the scene objects
        */
        Index.prototype.initObjects = function () {
            this._boxArray = [];

            for (var i = 0; i < 100; i++) {
                var box = new examples.Box(this._scene, this._cubeMaterial);
                this._boxArray.push(box);
            }
        };

        /**
        * Initialise the listeners
        */
        Index.prototype.initListeners = function () {
            var _this = this;
            window.onresize = function (event) {
                return _this.onResize(event);
            };

            this.onResize();

            this._timer = new RequestAnimationFrame(this.onEnterFrame, this);
            this._timer.start();

            //配列シャッフル
            this._shuffleArray = _.shuffle(this._motionArray);

            this.change();
        };

        /**
        * Navigation and render loop
        */
        Index.prototype.onEnterFrame = function (dt) {
            this._time += dt;

            this._state.run();

            this._view.render();
        };

        Index.prototype.startTimer = function () {
            var _this = this;
            this._timerTransform = setInterval(function () {
                return _this.change();
            }, 5000);
        };

        Index.prototype.stopTimer = function () {
            clearInterval(this._timerTransform);
        };

        Index.prototype.change = function () {
            if (this._state != null) {
                this._state.reset();
            }

            var pattern = this._shuffleArray[this._stateIndex % 5];

            switch (pattern) {
                case "A":
                    this._state = new examples.StateMotionA(this._boxArray, this._cameraController);
                    break;
                case "B":
                    this._state = new examples.StateMotionB(this._boxArray, this._cameraController);
                    break;
                case "C":
                    this._state = new examples.StateMotionC(this._boxArray, this._cameraController);
                    break;
                case "D":
                    this._state = new examples.StateMotionD(this._boxArray, this._cameraController);
                    break;
                case "E":
                    this._state = new examples.StateMotionE(this._boxArray, this._cameraController);
                    break;
            }

            this._stateIndex++;
        };

        /**
        * window listener for resize events
        */
        Index.prototype.onResize = function (event) {
            if (typeof event === "undefined") { event = null; }
            this._view.y = 0;
            this._view.x = 0;
            this._view.width = window.innerWidth;
            this._view.height = window.innerHeight;
        };
        return Index;
    })();
    examples.Index = Index;
})(examples || (examples = {}));

window.onload = function () {
    new examples.Index();
};
//# sourceMappingURL=index.js.map
