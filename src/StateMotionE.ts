///<reference path="../libs/stagegl-extensions.next.d.ts" />
///<reference path="./Box.ts" />

module examples
{


    export class StateMotionE
    {

        private _boxArray;
        
        //カメラ
        private _cameraController;
        private _distance;

        private _isMoved;

        /**
         * Constructor
         */
        constructor(boxArray, cameraController)
        {
            this._boxArray = boxArray;
            this._cameraController = cameraController;

            this.setupPosition();

            this._isMoved = false;            
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
                box.posx = 0;
                box.posy = -2500 + (i*400);
                box.posz = 0;                                       
            }  

            for (var i = 50; i < 100; i++)
            {
                var box = this._boxArray[i];               
                box.posx = 0;
                box.posy = -2500 + ((i-50)*400);
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

                if( !this._isMoved)
                {
                    if(Math.abs(box.posx - box.cube.x) > 0.1 || Math.abs(box.posy - box.cube.y) > 0.1 || Math.abs(box.posz - box.cube.z) > 0.1)
                    {
                        box.cube.x += (box.posx - box.cube.x )*0.2;
                        box.cube.y += (box.posy - box.cube.y )*0.2;
                        box.cube.z += (box.posz - box.cube.z )*0.2;

                    }else{
                        this._isMoved = true;
                    }
                }else{
                    //定位置に移動後、左右に動く
                    box.cube.y +=5;             
                }
                box.cube.rotationX +=1;                
            }

            //カメラ
            this._cameraController.distance += (this._distance - this._cameraController.distance )*0.08;            
            this._cameraController.panAngle +=0.5;                
        }
        
    }       
}