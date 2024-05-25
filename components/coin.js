AFRAME.registerComponent("coin-collect", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random(-15,15) * 2 + (-1));      
        var posY = (Math.random(-5,5) * 2 + (-1));
        var posZ = (Math.random(-7,7) * 2 + 1);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      var islandEl = document.querySelector("#island");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("scale",{x:0.1,y:0.1,z:0.1})
      coinEl.setAttribute("gltf-model","./models/coin/scene.gltf");
      coinEl.setAttribute("animation-mixer",{});   
      coinEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:3,
      });

      islandEl.appendChild(coinEl);
    }
  });