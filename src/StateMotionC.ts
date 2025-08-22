///<reference path="../libs/stagegl-extensions.next.d.ts" />
///<reference path="./Box.ts" />

module examples
{


    export class StateMotionC
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
            var len = this._boxArray.length;

            for (var i = 0; i < 50; i++)
            {
                var box = this._boxArray[i];               
                box.posx = -1250 + Math.floor(i/5)*550;
                box.posy = -1250 + (i%5)*550
                box.posz = 0;                                       
            }  

            for (var i = 50; i < 100; i++)
            {
                var box = this._boxArray[i];               
                box.posx = -1250 + Math.floor((i-50)/5)*550;
                box.posy = -1450 + ((i-50)%5)*550
                box.posz = 0;                                       
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