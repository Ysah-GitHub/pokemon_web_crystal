function f_script_text(p_script){
  // --- Disable Player Control
  f_player_control_movement_keypress_off();

  // --- Script
  f_textbox_script_add(p_script);
  f_textbox_open();
  f_textbox_text();
}

function f_script_map_transition(p_y, p_x, p_orientation, p_map){
  // --- Player Animation
  f_player_animation_auto(p_orientation);

  // --- Map Transition - 0.260s
  setTimeout(function(){
    f_player_position(p_y, p_x, p_orientation);
    f_map_load(p_map);
    f_player_animation_next();
  }, 260);
}

function f_script_map_transition_in(p_y, p_x, p_orientation, p_map){
  // --- Player Animation
  f_player_animation_auto(p_orientation);

  // --- Map Transition - 0.260s
  setTimeout(function(){
    f_transition_add(600);
    f_player_position(p_y, p_x, p_orientation);
    f_map_load(p_map);
    f_player_animation_next();
  }, 260);
}

function f_script_map_transition_out(p_y, p_x, p_orientation, p_map){
  // --- Map Transition
  f_transition_add(600);
  f_player_position(p_y, p_x, p_orientation);
  f_map_load(p_map);

  // --- Player Animation
  f_player_animation_auto(p_orientation);
  setTimeout(function(){
    f_player_animation_next();
  }, 260);
}

function f_script_map_transition_in_out(p_orientation_in, p_y, p_x, p_orientation_out, p_map){
  // --- Player Animation
  f_player_animation_auto(p_orientation_in);

  // --- Map Transition - 0.260s
  setTimeout(function(){
    f_transition_add(600);
    f_player_position(p_y, p_x, p_orientation_out);
    f_map_load(p_map);

    // -- Player Animation
    f_player_animation_auto(p_orientation_out);
    setTimeout(f_player_animation_next, 260);
  }, 260);
}

function f_scrip_map_pokemon_grass(){
  // ---
  if (f_number_random(0, 11) != 10) {
    return;
  }

  // --- Temp Variables
  let v_temp_pokemon_grass_list = v_map.script_pokemon_grass();
  let v_temp_pokemon_random_list = [];
  let v_temp_pokemon_random;

  // ---
  for (var i = 0; i < v_temp_pokemon_grass_list.length; i++) {
    for (var j = 0; j < v_temp_pokemon_grass_list[i][0]; j++) {
      v_temp_pokemon_random_list.push(v_temp_pokemon_grass_list[i]);
    }
  }

  v_temp_pokemon_random = v_temp_pokemon_random_list[f_number_random(0, 100)];

  console.log(f_pokemon_new(v_temp_pokemon_random[1], f_number_random(v_temp_pokemon_random[2], v_temp_pokemon_random[3])));
}
