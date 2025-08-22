///<reference path="../libs/stagegl-extensions.next.d.ts" />
///<reference path="../libs/ref/jquery.d.ts" />
///<reference path="../libs/ref/underscore.d.ts" />
///<reference path="./Box.ts" />
///<reference path="./StateMotionA.ts" />
///<reference path="./StateMotionB.ts" />
///<reference path="./StateMotionC.ts" />
///<reference path="./StateMotionD.ts" />
///<reference path="./StateMotionE.ts" />

module examples
{
    import Scene                        = away.containers.Scene;
    import View                         = away.containers.View;
    import HoverController              = away.controllers.HoverController;
    import Loader                       = away.containers.Loader;
    import Camera                       = away.entities.Camera;
    import Mesh                         = away.entities.Mesh;
    import AssetEvent                   = away.events.AssetEvent;
    import LoaderEvent                  = away.events.LoaderEvent;
    import Vector3D                     = away.geom.Vector3D;
    import AssetLibrary                 = away.library.AssetLibrary;
    import AssetType                    = away.library.AssetType;
    import IAsset                       = away.library.IAsset;
    import DirectionalLight             = away.entities.DirectionalLight;
    import DefaultMaterialManager       = away.materials.DefaultMaterialManager;
    import StaticLightPicker            = away.materials.StaticLightPicker;
    import TriangleMethodMaterial       = away.materials.TriangleMethodMaterial;
    import URLRequest                   = away.net.URLRequest;
    import PrimitiveCubePrefab          = away.prefabs.PrimitiveCubePrefab;
    import PrimitivePlanePrefab         = away.prefabs.PrimitivePlanePrefab;
    import PrimitiveSpherePrefab        = away.prefabs.PrimitiveSpherePrefab;
    import PrimitiveTorusPrefab         = away.prefabs.PrimitiveTorusPrefab;
    import DefaultRenderer              = away.render.DefaultRenderer;
    import Texture2DBase                = away.textures.Texture2DBase;
    import RequestAnimationFrame        = away.utils.RequestAnimationFrame;

    export class Index
    {
        //engine variables
        private _scene:Scene;
        private _camera:Camera;
        private _view:View;
        private _cameraController:HoverController;

        //material objects
        private _cubeMaterial:TriangleMethodMaterial;

        //light objects
        private _light1:DirectionalLight;
        private _lightPicker:StaticLightPicker;

        //scene objects
        private _boxArray;
        private _state;
        private _stateIndex:number = 0;
        private _motionArray = ["A", "B", "C", "D", "E"];
        private _shuffleArray;

        //navigation variables
        private _timer:RequestAnimationFrame;
        private _time:number = 0;
        private _move:boolean = false;
        private _lastPanAngle:number;
        private _lastTiltAngle:number;
        private _lastMouseX:number;
        private _lastMouseY:number;

        //timer
        private _timerTransform;

        /**
         * Constructor
         */
        constructor()
        {
            this.init();
        }

        /**
         * Global initialise function
         */
        private init():void
        {
            this.initEngine();
            this.initLights();
            this.initMaterials();
            this.initObjects();
            this.initListeners();

            this.startTimer(); 
        }

        /**
         * Initialise the engine
         */
        private initEngine():void
        {
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
        }

        /**
         * Initialise the entities
         */
        private initLights():void
        {
            this._light1 = new DirectionalLight();
            this._light1.direction = new Vector3D(0, -1, 1);
            this._light1.ambient = 0.9;
            this._light1.diffuse = 0.1;

            this._scene.addChild(this._light1);

            this._lightPicker = new StaticLightPicker([this._light1]);
        }

        /**
         * Initialise the materials
         */
        private initMaterials():void
        {
            this._cubeMaterial = new TriangleMethodMaterial();
            this._cubeMaterial.lightPicker = this._lightPicker;
        }

        /**
         * Initialise the scene objects
         */
        private initObjects():void
        {
            this._boxArray = [];

            for( var i = 0; i < 100; i++)
            {
                var box = new Box(this._scene, this._cubeMaterial);
                this._boxArray.push(box);           
            }         
        }

        /**
         * Initialise the listeners
         */
        private initListeners():void
        {
            window.onresize  = (event:UIEvent) => this.onResize(event);

            this.onResize();

            this._timer = new RequestAnimationFrame(this.onEnterFrame, this);
            this._timer.start();

            //配列シャッフル
            this._shuffleArray = _.shuffle(this._motionArray);

            this.change();
        }

        /**
         * Navigation and render loop
         */
        private onEnterFrame(dt:number):void
        {
            this._time += dt;

            this._state.run();

            this._view.render();
        }

        private startTimer():void
        {
            this._timerTransform = setInterval(()=> this.change(), 5000);
        }

        private stopTimer():void
        {
            clearInterval(this._timerTransform);
        }

        private change():void
        {
            if(this._state != null)
            {
                this._state.reset();
            }

            var pattern = this._shuffleArray[this._stateIndex%5];

            switch(pattern)
            {
                case "A":
                    this._state = new StateMotionA(this._boxArray, this._cameraController);
                    break;
                case "B":
                    this._state = new StateMotionB(this._boxArray, this._cameraController);
                    break; 
                case "C":
                    this._state = new StateMotionC(this._boxArray, this._cameraController);
                    break;  
                case "D":
                    this._state = new StateMotionD(this._boxArray, this._cameraController);
                    break; 
                case "E":
                    this._state = new StateMotionE(this._boxArray, this._cameraController);
                    break;                                                                                               
            }

            this._stateIndex++;            
        }

        /**
         * window listener for resize events
         */
        private onResize(event:UIEvent = null):void
        {
            this._view.y = 0;
            this._view.x = 0;
            this._view.width = window.innerWidth;
            this._view.height = window.innerHeight;
        }

    }
}

window.onload = function ()
{
    new examples.Index();        
}

