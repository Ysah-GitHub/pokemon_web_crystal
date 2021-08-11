function f_map(){
  // --- Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;

  let v_temp_map_y = 0;
  let v_temp_map_x = 0;

  // --- Map
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "game_map";

  for (let i = 0; i < 132; i++, v_temp_map_x++) {
    if (v_temp_map_x == 12) {v_temp_map_x = 0; v_temp_map_y++}

    v_temp_element_2 = document.createElement("div");
    v_temp_element_2.style.top = (v_temp_map_y * 32) + "px";
    v_temp_element_2.style.left = (v_temp_map_x * 32) + "px";
    v_temp_element_1.append(v_temp_element_2);
  }

  document.getElementById("game").prepend(v_temp_element_1);
}

function f_map_load(p_map_name){
  // --- Temp Variable
  let v_temp_map = window["f_map_" + p_map_name]();
  let v_temp_script = window["f_script_" + p_map_name]();

  // --- Update Variable
  v_map.name = p_map_name;
  v_map.y = v_temp_map.y;
  v_map.x = v_temp_map.x;
  v_map.length = v_temp_map.length;
  v_map.script_map = v_temp_script.script_map;
  v_map.script_text = v_temp_script.script_text;
  v_map.script_pokemon_grass = v_temp_script.script_pokemon_grass;
  v_map.block = v_temp_map.block;
  v_map.flower = v_temp_map.flower;
  v_map.water = v_temp_map.water;

  v_player.map.name = p_map_name;

  // --- Map Flower
  f_map_flower();

  // --- Map Water
  f_map_water();

  // --- Map Tilesets
  f_map_load_tilesets();
}

function f_map_load_tilesets(){
  // --- Temp Variables
  let v_temp_map_y = (v_player.map.y - 5);
  let v_temp_map_x = (v_player.map.x - 5);
  let v_temp_block_number = (v_temp_map_y * v_map.x - (v_map.x - v_temp_map_x)) - 1;
  let v_temp_number = 0;

  // --- Update Variables
  v_map.block_temp = [];

  // --- Map Tilesets
  for (let i = 0; i < 132; i++, v_temp_map_x++, v_temp_number++, v_temp_block_number++) {
    if (v_temp_number == 12) {
      v_temp_map_y++;
      v_temp_map_x = (v_player.map.x - 5);
      v_temp_block_number = (v_temp_map_y * v_map.x - (v_map.x - v_temp_map_x)) - 1;
      v_temp_number = 0;
    }

    if (v_temp_map_x > 0 && v_temp_map_x <= v_map.x && v_temp_map_y > 0 && v_temp_map_y <= v_map.y) {
      v_map.block_temp.push(v_temp_block_number);
      document.getElementById("game_map").children[i].style.backgroundImage = f_map_tileset_new(v_map.block[v_temp_block_number]);
    }
    else {
      v_map.block_temp.push(null);
      document.getElementById("game_map").children[i].style.backgroundImage = "";
    }
  }

  // --- Reset Map Position
  document.getElementById("game_map").style.transform = "translate(0px, 0px)";
}

function f_map_tileset_new(p_tileset){
  // --- Temp Variables
  v_temp_tileset = "";

  // --- Tileset Path
  for (let i = (p_tileset.length - 1); i > 0; i--) {
    v_temp_tileset += "url(rsc/tileset/" + f_tileset_list()[p_tileset[i]] + ".png)";
    if (i > 1) {v_temp_tileset += ", "}
  }

  // ---
  return v_temp_tileset;
}

function f_map_animation_up(){
  document.getElementById("game_map").style.transform = "translate(0, 4px)";
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, 8px)"}, 40);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, 16px)"}, 80);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, 20px)"}, 120);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, 24px)"}, 160);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, 28px)"}, 200);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, 32px)"; f_map_load_tilesets();}, 240);
}

function f_map_animation_down(){
  document.getElementById("game_map").style.transform = "translate(0, -4px)";
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, -8px)"}, 40);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, -16px)"}, 80);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, -20px)"}, 120);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, -24px)"}, 160);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, -28px)"}, 200);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(0, -32px)"; f_map_load_tilesets();}, 240);
}

function f_map_animation_right(){
  document.getElementById("game_map").style.transform = "translate(-4px, 0)";
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(-8px, 0)"}, 40);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(-16px, 0)"}, 80);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(-20px, 0)"}, 120);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(-24px, 0)"}, 160);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(-28px, 0)"}, 200);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(-32px, 0)"; f_map_load_tilesets();}, 240);
}

function f_map_animation_left(){
  document.getElementById("game_map").style.transform = "translate(4px, 0px)";
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(8px, 0)"}, 40);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(16px, 0)"}, 80);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(20px, 0)"}, 120);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(24px, 0)"}, 160);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(28px, 0)"}, 200);
  setTimeout(function(){document.getElementById("game_map").style.transform = "translate(32px, 0)"; f_map_load_tilesets();}, 240);
}

function f_map_flower(){
  if (v_map.flower != null && v_animation.flower.interval == null) {
    // --- Start Flower Animation
    v_animation.flower.interval = setInterval(f_map_flower_animation, 500);
  }
  else if (v_map.flower == null){
    // --- Remove and Reset Flower Animation
    clearInterval(v_animation.flower.interval);
    v_animation.flower.interval = null;
    v_animation.flower.number = 0;
  }
}

function f_map_flower_animation(){
  // --- Temp Variable
  let v_temp_flower_top;
  let v_temp_flower_bottom;

  // --- Update Variable
  if (v_animation.flower.number == 0) {
    v_animation.flower.number = 1;
    v_temp_flower_top = "ei";
    v_temp_flower_bottom = "eh";
  }
  else {
    v_animation.flower.number = 0;
    v_temp_flower_top = "eg";
    v_temp_flower_bottom = "ef";
  }

  // --- Flower Animation
  for (var i = 0; i < v_map.flower.length; i++) {
    v_map.block[v_map.flower[i][0]][2] = v_temp_flower_top;
    v_map.block[v_map.flower[i][1]][2] = v_temp_flower_bottom;

    // -- Update Flower Tileset
    if (v_map.block_temp.includes(v_map.flower[i][0])) {
      document.getElementById("game_map").children[v_map.block_temp.indexOf(v_map.flower[i][0])].style.background = f_map_tileset_new(v_map.block[v_map.flower[i][0]]);
    }
    if (v_map.block_temp.includes(v_map.flower[i][1])) {
      document.getElementById("game_map").children[v_map.block_temp.indexOf(v_map.flower[i][1])].style.background = f_map_tileset_new(v_map.block[v_map.flower[i][1]]);
    }
  }
}

function f_map_water(){
  if (v_map.water != null && v_animation.water.interval == null) {
    // --- Start Water Animation
    v_animation.water.interval = setInterval(f_map_water_animation, 450);
  }
  else if (v_map.water == null){
    // --- Remove and Reset Water Animation
    clearInterval(v_animation.water.interval);
    v_animation.water.interval = null;
    v_animation.water.number = 0;
  }
}

function f_map_water_animation(){
  // --- Temp Variable
  let v_temp_water;

  // --- Update Variable
  switch (v_animation.water.number) {
    case 0: v_animation.water.number = 1; v_temp_water = "eb"; break;
    case 1: v_animation.water.number = 2; v_temp_water = "ec"; break;
    case 2: v_animation.water.number = 3; v_temp_water = "ed"; break;
    case 3: v_animation.water.number = 0; v_temp_water = "ec"; break;
  }

  // --- Water Animation
  for (var i = 0; i < v_map.water.length; i++) {
    v_map.block[v_map.water[i]][1] = v_temp_water;

    // -- Update Water Tileset
    if (v_map.block_temp.includes(v_map.water[i])) {
      document.getElementById("game_map").children[v_map.block_temp.indexOf(v_map.water[i])].style.background = f_map_tileset_new(v_map.block[v_map.water[i]]);
    }
  }
}
