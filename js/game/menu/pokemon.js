function f_game_menu_pokemon_open(){
  // ---  Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;

  // ---  Game Menu
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "game_menu_pokemon";

  v_temp_element_2 = document.createElement("ol");
  v_temp_element_2.append(f_game_menu_pokemon_add(v_player.team[1]));
  v_temp_element_2.append(f_game_menu_pokemon_add(v_player.team[2]));
  v_temp_element_2.append(f_game_menu_pokemon_add(v_player.team[3]));
  v_temp_element_2.append(f_game_menu_pokemon_add(v_player.team[4]));
  v_temp_element_2.append(f_game_menu_pokemon_add(v_player.team[5]));
  v_temp_element_2.append(f_game_menu_pokemon_add(v_player.team[6]));

  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("div");
  v_temp_element_2.textContent = "return";
  v_temp_element_2.onclick = f_game_menu_pokemon_close;
  v_temp_element_1.append(v_temp_element_2);

  document.getElementById("game_menu").after(v_temp_element_1);
}

function f_game_menu_pokemon_add(p_pokemon){
  // ---  Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;
  let v_temp_element_3;

  // ---
  v_temp_element_1 = document.createElement("li");

  if (p_pokemon == null) {
    return v_temp_element_1;
  }

  v_temp_element_2 = document.createElement("img");
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("span");
  v_temp_element_2.textContent = "Lv." + p_pokemon.level;
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("span");
  v_temp_element_2.textContent = p_pokemon.name;
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("div");
  v_temp_element_2.textContent = p_pokemon.hp + " / " + p_pokemon.stats.hp;
  v_temp_element_2.style.background = f_game_menu_pokemon_hp(p_pokemon.hp, p_pokemon.stats.hp);
  v_temp_element_1.append(v_temp_element_2);



  // ---
  return v_temp_element_1;
}

function f_game_menu_pokemon_hp(p_hp, p_hp_max){
  // --- Temp Variables
  let v_temp_hp_color;
  let v_temp_hp_percentage = (p_hp / p_hp_max) * 100;

  // ---
  if (v_temp_hp_percentage <= 25) {
    v_temp_hp_color = "rgb(190, 60, 60)";
  }
  else if (v_temp_hp_percentage <= 50) {
    v_temp_hp_color = "rgb(190, 190, 60)";
  }
  else if (v_temp_hp_percentage > 50) {
    v_temp_hp_color = "rgb(60, 190, 60)";
  }

  // ---
  return "linear-gradient(to right, " + v_temp_hp_color + v_temp_hp_percentage + "%, rgba(0, 0, 0, 0) 0%)";
}

function f_game_menu_pokemon_close(){
  document.getElementById("game_menu_pokemon").remove();
}
