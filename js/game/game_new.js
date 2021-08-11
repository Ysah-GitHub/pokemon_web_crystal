function f_game_new(){
  // --- Temp variables
  let v_temp_element_1;
  let v_temp_element_2;

  // --- Remove Game Title
  document.getElementById("title").remove();

  // --- Reset Control
  f_control_keydown_function_reset_all();

  // --- Stop Music
  f_music_stop();

  // --- Game New
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "game_new";

  // --- Oak Sprite
  v_temp_element_2 = document.createElement("img");
  v_temp_element_2.id = "game_new_sprite_oak";
  v_temp_element_2.src = "rsc/sprite/oak.png";
  v_temp_element_1.append(v_temp_element_2);

  // --- Pokemon Sprite
  v_temp_element_2 = document.createElement("img");
  v_temp_element_2.id = "game_new_sprite_pokemon";
  v_temp_element_2.src = "rsc/sprite/pokemon/wooper.png";
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("img");
  v_temp_element_2.id = "game_new_pokemon_1";
  v_temp_element_2.src = "rsc/sprite/pokemon/bulbasaur.png";
  v_temp_element_2.onclick = function(){
    document.getElementById("game_new_pokemon_1").style.display = "none";
    document.getElementById("game_new_pokemon_2").style.display = "none";
    document.getElementById("game_new_pokemon_3").style.display = "none";
    v_player.team[1] = f_pokemon_new(0, 5);
    f_textbox_text();
  };
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("img");
  v_temp_element_2.id = "game_new_pokemon_2";
  v_temp_element_2.src = "rsc/sprite/pokemon/charmander.png";
  v_temp_element_2.onclick = function(){
    document.getElementById("game_new_pokemon_1").style.display = "none";
    document.getElementById("game_new_pokemon_2").style.display = "none";
    document.getElementById("game_new_pokemon_3").style.display = "none";
    v_player.team[1] = f_pokemon_new(3, 5);
    f_textbox_text();
  };
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("img");
  v_temp_element_2.id = "game_new_pokemon_3";
  v_temp_element_2.src = "rsc/sprite/pokemon/squirtle.png";
  v_temp_element_2.onclick = function(){
    document.getElementById("game_new_pokemon_1").style.display = "none";
    document.getElementById("game_new_pokemon_2").style.display = "none";
    document.getElementById("game_new_pokemon_3").style.display = "none";
    v_player.team[1] = f_pokemon_new(6, 5);
    f_textbox_text();
  };
  v_temp_element_1.append(v_temp_element_2);

  // --- Player Name
  v_temp_element_2 = document.createElement("input");
  v_temp_element_2.id = "game_new_player_name";
  v_temp_element_2.type = "text";
  v_temp_element_2.placeholder = "Name";
  v_temp_element_2.setAttribute("maxlength", "10");
  v_temp_element_1.append(v_temp_element_2);

  // --- Player Name Validation
  v_temp_element_2 = document.createElement("input");
  v_temp_element_2.id = "game_new_player_name_validation";
  v_temp_element_2.type = "button";
  v_temp_element_2.value = "ok";
  v_temp_element_2.onclick = function(){
    v_player.name = document.getElementById("game_new_player_name").value;
    f_textbox_text();
  };
  v_temp_element_1.append(v_temp_element_2);

  document.getElementById("music").before(v_temp_element_1);

  // --- Textbox
  f_textbox_script_add(f_script_new_char());
  f_textbox_open();
  f_textbox_text();
}
