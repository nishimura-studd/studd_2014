///<reference path="../libs/stagegl-extensions.next.d.ts" />

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

    export class Box
    {

        public cube;
        public posx;
        public posy;
        public posz;

        /**
         * Constructor
         */
        constructor(scene, material)
        {
            this.setup(scene, material);
        }

        /**
         * setup
         */
        private setup(scene, material):void
        {
            var rnd = Math.random()*400+200;
            this.cube = <Mesh> new PrimitiveCubePrefab(rnd, rnd, rnd, 1, 1, 1, false).getNewObject();
            this.cube.material = material;
            this.cube.rotationX = Math.random()*360;
            this.cube.rotationY = Math.random()*360;
            this.cube.rotationZ = Math.random()*360;                                
            scene.addChild(this.cube); 
        }

    }       
}