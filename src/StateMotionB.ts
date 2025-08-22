///<reference path="../libs/stagegl-extensions.next.d.ts" />
///<reference path="./Box.ts" />

module examples
{


    export class StateMotionB
    {

        private _boxArray;

        //カメラ
        private _cameraController;
        private _distance;

        /**
         * Constructor
         */
        constructor(boxArray, cameraController)
        {
            this._boxArray = boxArray;
            this._cameraController = cameraController;

            this.setupPosition();
        }

        /**
         * 
         */
        public reset():void
        {
            this._boxArray = [];
        }

        /**
         * 
         */
        private setupPosition():void
        {
            var range = 1000;            
            var len = this._boxArray.length;

            for (var i = 0; i < len; i++)
            {
                var box = this._boxArray[i];               
                box.posx = Math.random() * range - range * 0.5;
                box.posy = Math.random() * range - range * 0.5;
                box.posz = Math.random() * range - range * 0.5;      
            }  

            //カメラ
            this._distance = Math.random()*400 + 1000;           
        }

        /**
         * 
         */
        public run():void
        {
            var len = this._boxArray.length;
            for(var i = 0; i < len; i++)
            {
                var box = this._boxArray[i];

                box.cube.x += (box.posx - box.cube.x )*0.2;
                box.cube.y += (box.posy - box.cube.y )*0.2;
                box.cube.z += (box.posz - box.cube.z )*0.2;

                box.cube.rotationX +=1;
            }

            //カメラ
            this._cameraController.distance += (this._distance - this._cameraController.distance )*0.08;
            this._cameraController.panAngle +=0.5;  
        }
        
    }       
}