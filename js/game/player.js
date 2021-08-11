f_player_load_data();

function f_player_load_data(){
  if (localStorage.getItem("player")) {
    // --- Temp variables
    let v_temp_player;

    // --- Player Data
    v_temp_player = JSON.parse(localStorage.getItem("player"));
    v_player.name = v_temp_player.name;
    v_player.map = v_temp_player.map;
    v_player.team = v_temp_player.team;
  }
}

function f_player_new(){
  v_player.map.name = "player_house_1";
  v_player.map.y = 5;
  v_player.map.x = 2;
  v_player.map.orientation = "right";
  v_player.map.music = "new_bark_town";

  f_player_save();
}

function f_player_save(){
  // --- Temp variables
  let v_temp_player = {
    name: null,
    map: {},
    team: {},
  };

  // --- Player Data
  v_temp_player.name = v_player.name;
  v_temp_player.map = v_player.map;
  v_temp_player.team = v_player.team;

  // ---
  localStorage.setItem("player", JSON.stringify(v_temp_player));
};

function f_player_sync(){
  // --- Temp variables
  let v_temp_player = {
    name: null,
    map: {},
    team: {},
  };

  // --- Player Data
  v_temp_player.name = v_player.name;
  v_temp_player.map = v_player.map;
  v_temp_player.team = v_player.team;

  // ---
  return JSON.stringify(v_temp_player);
};

function f_player_action_position_y(){
  switch (v_player.map.orientation) {
    case "up": return (v_player.map.y - 1);
    case "down": return (v_player.map.y + 1);
    default: return v_player.map.y;
  }
}

function f_player_action_position_x(){
  switch (v_player.map.orientation) {
    case "right": return (v_player.map.x + 1);
    case "left": return (v_player.map.x - 1);
    default: return v_player.map.x;
  }
}

function f_player_orientation(p_orientation){
  // --- Update Variable
  v_player.map.orientation = p_orientation;

  // --- Player Tileset
  document.getElementById("player").className = p_orientation;
}

function f_player_animation(p_orientation){
  // --- Update Variable
  v_player.map.orientation = p_orientation;

  // --- Map Event
  if (v_map.script_map() != false) {return}

  // --- Player Movement
  f_player_movement(p_orientation);

  // --- Animation
  window["f_player_animation_" + p_orientation]();

  // --- Animation Next
  setTimeout(f_player_animation_next, 260);
}

function f_player_animation_up(){
  // --- Player Orientation - 0.000s
  f_player_orientation("up");

  // --- Player Animation - 0.130s
  setTimeout(function(){
    if (v_player.animation.switch) {
      v_player.animation.switch = false;
      document.getElementById("player").className = "up animation_right";
    }
    else {
      v_player.animation.switch = true;
      document.getElementById("player").className = "up animation_left";
    }
  }, 130);

  // --- Player Orientation - 0.260s
  setTimeout(f_player_orientation, 260, "up");
}

function f_player_animation_down(){
  // --- Player Orientation - 0.000s
  f_player_orientation("down");

  // --- Player Animation - 0.130s
  setTimeout(function(){
    if (v_player.animation.switch) {
      v_player.animation.switch = false;
      document.getElementById("player").className = "down animation_right";
    }
    else {
      v_player.animation.switch = true;
      document.getElementById("player").className = "down animation_left";
    }
  }, 130);

  // --- Player Orientation - 0.260s
  setTimeout(f_player_orientation, 260, "down");
}

function f_player_animation_right(){
  // --- Player Orientation - 0.000s
  f_player_orientation("right");

  // --- Player Animation - 0.130s
  setTimeout(function(){document.getElementById("player").className = "right animation"}, 130);

  // --- Player Orientation - 0.260s
  setTimeout(f_player_orientation, 260, "right");
}

function f_player_animation_left(){
  // --- Player Orientation - 0.000s
  f_player_orientation("left");

  // --- Player Animation - 0.130s
  setTimeout(function(){document.getElementById("player").className = "left animation"}, 130);

  // --- Player Orientation - 0.260s
  setTimeout(f_player_orientation, 260, "left");
}

function f_player_animation_next(){
  switch (v_player.control.next) {
    case v_app.input.up[1]: f_player_animation("up"); break;
    case v_app.input.down[1]: f_player_animation("down"); break;
    case v_app.input.right[1]: f_player_animation("right"); break;
    case v_app.input.left[1]: f_player_animation("left"); break;
    default: f_player_control_action_on(); f_player_control_movement_keypress_on();
  }
}

function f_player_animation_auto(p_orientation){
  // --- Update Variable
  switch (p_orientation) {
    case "up": v_player.map.y--; break;
    case "down": v_player.map.y++; break;
    case "right": v_player.map.x++; break;
    case "left":  v_player.map.x--; break;
  }

  // --- Player Position
  f_player_position(v_player.map.y, v_player.map.x, p_orientation);

  // --- Player Animation
  window["f_player_animation_" + p_orientation]();

  // --- Map Animation
  window["f_map_animation_" + p_orientation]();
}

function f_player_movement(p_orientation){
  // --- Temp variables
  let v_temp_player_position = (v_player.map.y * v_map.x - (v_map.x - v_player.map.x)) - 1;

  // --- Movement
  window["f_player_movement_" + p_orientation](v_temp_player_position);
}

function f_player_movement_up(p_position){
  if (v_player.map.y != 1 && v_map.block[p_position - v_map.x][0] == 1) {
    v_player.map.y--;
    f_map_animation_up();
  }
  else if (v_player.map.y != 1 && v_map.block[p_position - v_map.x][0] == 2) {
    v_player.map.y--;
    f_map_animation_up();
    f_scrip_map_pokemon_grass();
  }
}

function f_player_movement_down(p_position){
  if (v_player.map.y != v_map.y && v_map.block[p_position + v_map.x][0] == 1) {
    v_player.map.y++;
    f_map_animation_down();
  }
  else if (v_player.map.y != v_map.y && v_map.block[p_position + v_map.x][0] == 2) {
    v_player.map.y++;
    f_map_animation_down();
    f_scrip_map_pokemon_grass();
  }
}

function f_player_movement_right(p_position){
  if (v_player.map.x != v_map.x && v_map.block[p_position + 1][0] == 1) {
    v_player.map.x++;
    f_map_animation_right();
  }
  else if (v_player.map.x != v_map.x && v_map.block[p_position + 1][0] == 2) {
    v_player.map.x++;
    f_map_animation_right();
    f_scrip_map_pokemon_grass();
  }
}

function f_player_movement_left(p_position){
  if (v_player.map.x != 1 && v_map.block[p_position - 1][0] == 1) {
    v_player.map.x--;
    f_map_animation_left();
  }
  else if (v_player.map.x != 1 && v_map.block[p_position - 1][0] == 2) {
    v_player.map.x--;
    f_map_animation_left();
    f_scrip_map_pokemon_grass();
  }
}

function f_player_control_action_on(){
  // --- Input A
  f_control_keydown_function_add("a", function f_player_control_action_a(){
    f_player_control_action_off();
    v_map.script_text(f_player_action_position_y(), f_player_action_position_x());
  });

  // --- Input START
  f_control_keydown_function_add("start", function f_player_control_action_start(){
    f_player_control_action_off();
    f_game_menu_open();
  });
}

function f_player_control_action_off(){
  f_control_keydown_function_remove("a", "f_player_control_action_a");
  f_control_keydown_function_remove("start", "f_player_control_action_start");
}

function f_player_control_movement_keypress_on(){
  // --- Input UP
  f_control_keydown_function_add("up", function f_player_control_movement_keypress(){
    // Control
    f_player_control_action_off();
    f_player_control_movement_keypress_off();

    // Orientation
    f_player_orientation("up");
    v_player.control.timeout = setTimeout(f_player_control_movement_keypress_on, 125);

    // Animation
    v_player.animation.timeout = setTimeout(function(){
      clearTimeout(v_player.control.timeout);
      v_player.control.timeout = null;
      f_player_animation("up");
    }, 75);
  });

  // --- Input DOWN
  f_control_keydown_function_add("down", function f_player_control_movement_keypress(){
    // Control
    f_player_control_action_off();
    f_player_control_movement_keypress_off();

    // Orientation
    f_player_orientation("down");
    v_player.control.timeout = setTimeout(f_player_control_movement_keypress_on, 125);

    // Animation
    v_player.animation.timeout = setTimeout(function(){
      clearTimeout(v_player.control.timeout);
      v_player.control.timeout = null;
      f_player_animation("down");
    }, 75);
  });

  // --- Input LEFT
  f_control_keydown_function_add("left", function f_player_control_movement_keypress(){
    // Control
    f_player_control_action_off();
    f_player_control_movement_keypress_off();

    // Orientation
    f_player_orientation("left");
    v_player.control.timeout = setTimeout(f_player_control_movement_keypress_on, 125);

    // Animation
    v_player.animation.timeout = setTimeout(function(){
      clearTimeout(v_player.control.timeout);
      v_player.control.timeout = null;
      f_player_animation("left");
    }, 75);
  });

  // --- Input RIGHT
  f_control_keydown_function_add("right", function f_player_control_movement_keypress(){
    // Control
    f_player_control_action_off();
    f_player_control_movement_keypress_off();

    // Orientation
    f_player_orientation("right");
    v_player.control.timeout = setTimeout(f_player_control_movement_keypress_on, 125);

    // Animation
    v_player.animation.timeout = setTimeout(function(){
      clearTimeout(v_player.control.timeout);
      v_player.control.timeout = null;
      f_player_animation("right");
    }, 75);
  });
}

function f_player_control_movement_keypress_off(){
  f_control_keydown_function_remove("up", "f_player_control_movement_keypress");
  f_control_keydown_function_remove("down", "f_player_control_movement_keypress");
  f_control_keydown_function_remove("left", "f_player_control_movement_keypress");
  f_control_keydown_function_remove("right", "f_player_control_movement_keypress");
}

function f_player_control_movement_keyup_on(){
  // --- Input UP
  f_control_keyup_function_add("up", function f_player_control_movement_keyup(){
    if (v_player.control.next == v_app.input.up[1]) {
      clearTimeout(v_player.control.timeout);
      clearTimeout(v_player.animation.timeout);
      v_player.control.next = null;
      if (v_player.control.timeout != null) {
        v_player.control.timeout = null;
        f_player_control_movement_keypress_on();
      }
    }
  });

  // --- Input DOWN
  f_control_keyup_function_add("down", function f_player_control_movement_keyup(){
    if (v_player.control.next == v_app.input.down[1]) {
      clearTimeout(v_player.control.timeout);
      clearTimeout(v_player.animation.timeout);
      v_player.control.next = null;
      if (v_player.control.timeout != null) {
        v_player.control.timeout = null;
        f_player_control_movement_keypress_on();
      }
    }
  });

  // --- Input LEFT
  f_control_keyup_function_add("left", function f_player_control_movement_keyup(){
    if (v_player.control.next == v_app.input.left[1]) {
      clearTimeout(v_player.control.timeout);
      clearTimeout(v_player.animation.timeout);
      v_player.control.next = null;
      if (v_player.control.timeout != null) {
        v_player.control.timeout = null;
        f_player_control_movement_keypress_on();
      }
    }
  });

  // --- Input RIGHT
  f_control_keyup_function_add("right", function f_player_control_movement_keyup(){
    if (v_player.control.next == v_app.input.right[1]) {
      clearTimeout(v_player.control.timeout);
      clearTimeout(v_player.animation.timeout);
      v_player.control.next = null;
      if (v_player.control.timeout != null) {
        v_player.control.timeout = null;
        f_player_control_movement_keypress_on();
      }
    }
  });
}

function f_player_control_movement_next_on(){
  // --- Input A
  f_control_keydown_function_add("a", function f_player_control_movement_next(){
    v_player.control.next = v_app.input.a[1];
  });

  // --- Input UP
  f_control_keydown_function_add("up", function f_player_control_movement_next(){
    v_player.control.next = v_app.input.up[1];
  });

  // --- Input DOWN
  f_control_keydown_function_add("down", function f_player_control_movement_next(){
    v_player.control.next = v_app.input.down[1];
  });

  // --- Input LEFT
  f_control_keydown_function_add("left", function f_player_control_movement_next(){
    v_player.control.next = v_app.input.left[1];
  });

  // --- Input RIGHT
  f_control_keydown_function_add("right", function f_player_control_movement_next(){
    v_player.control.next = v_app.input.right[1];
  });
}

function f_player_control_movement_next_off(){
  f_control_keydown_function_remove("a", "f_player_control_movement_next");
  f_control_keydown_function_remove("up", "f_player_control_movement_next");
  f_control_keydown_function_remove("down", "f_player_control_movement_next");
  f_control_keydown_function_remove("left", "f_player_control_movement_next");
  f_control_keydown_function_remove("right", "f_player_control_movement_next");
}

function f_player_position(p_y, p_x, p_orientation){
  v_player.map.y = p_y;
  v_player.map.x = p_x;
  v_player.map.orientation = p_orientation;
}
