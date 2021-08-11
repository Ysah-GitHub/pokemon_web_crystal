function f_profile(){
  document.getElementById("menu").onmouseout = "";

  // --- Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;
  let v_temp_element_3;

  // --- Update Variable
  v_app.menu.active = "profile";

  // --- Menu Section & Header
  v_temp_element_1 = f_menu_section_add("profile");

  v_temp_element_2 = document.createElement("div");
  v_temp_element_2.id = "profile_player";

  v_temp_element_3 = document.createElement("img");
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_3 = document.createElement("span");
  v_temp_element_3.textContent = v_player.name;
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_3 = document.createElement("ol");
  v_temp_element_3.append(f_game_menu_pokemon_add(v_player.team[1]));
  v_temp_element_3.append(f_game_menu_pokemon_add(v_player.team[2]));
  v_temp_element_3.append(f_game_menu_pokemon_add(v_player.team[3]));
  v_temp_element_3.append(f_game_menu_pokemon_add(v_player.team[4]));
  v_temp_element_3.append(f_game_menu_pokemon_add(v_player.team[5]));
  v_temp_element_3.append(f_game_menu_pokemon_add(v_player.team[6]));

  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_3 = document.createElement("input");
  v_temp_element_3.type = "button";
  v_temp_element_3.value = "SYNCRONISATION";
  v_temp_element_3.onclick = f_sync_save;
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_3 = document.createElement("input");
  v_temp_element_3.type = "button";
  v_temp_element_3.value = "DELETE SYNC";
  v_temp_element_3.onclick = f_sync_delete;
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_1.append(v_temp_element_2);

  document.getElementById("menu").after(v_temp_element_1);
}

function f_profile_remove(){
  document.getElementById("menu").onmouseout = f_menu_expand_off;
  document.getElementById("profile").remove();
}
