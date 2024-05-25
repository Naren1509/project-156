AFRAME.registerComponent("flying-fish",{
    init:function(){
        for(var i=1 ;i<=20 ;i++){
            var id = `fish${id}`;
            var posX = Math.floor(Math.random(0,7) * 2 + -1);
            var posY = Math.floor(Math.random(7,15) * 2 + -1);
            var posZ = Math.floor(Math.random(0,7) * 2 + -1);
            var position = {x:posX,y:posY,z:posZ};
            this.fishflying(id,position);
        }
    },
    fishflying:(id,position)=>{
        var terrainEl = document.querySelector("#island");
        var fishEl = document.createElement("a-entity");
        fishEl.setAttribute("id",id);
        fishEl.setAttribute("position",position);
        fishEl.setAttribute("scale",{x:0.025,y:0.025,z:0.025});
        fishEl.setAttribute("gltf-model","./models/fish/scene.gltf");
        fishEl.setAttribute("animation-mixer",{});
        fishEl.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:3,
        });

        terrainEl.appendChild(fishEl);
    }
});