function f_game_menu_open(){
  // ---  Disable Player Control
  f_player_control_action_off();
  f_player_control_movement_keypress_off();

  // ---  Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;

  // ---  Game Menu
  v_temp_element_1 = document.createElement("nav");
  v_temp_element_1.id = "game_menu";

  v_temp_element_2 = document.createElement("p");
  v_temp_element_2.textContent = "POKEDEX";
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("p");
  v_temp_element_2.textContent = "POKEMON";
  v_temp_element_2.onclick = f_game_menu_pokemon_open;
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("p");
  v_temp_element_2.textContent = "ITEM";
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("p");
  v_temp_element_2.textContent = "SAVE";
  v_temp_element_2.onclick = f_game_menu_save;
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("p");
  v_temp_element_2.textContent = "EXIT";
  v_temp_element_2.onclick = f_game_menu_close;
  v_temp_element_1.append(v_temp_element_2);

  document.getElementById("player").before(v_temp_element_1);
}

function f_game_menu_close(){
  // ---  Enable Player Control
  f_player_control_action_on();
  f_player_control_movement_keypress_on();

  // ---  Remove Game Menu
  document.getElementById("game_menu").remove();
}
