setTimeout(f_app_load_files, 200); 

function f_game_files_list_js(){
  return [
    "animation",
    "game_menu",
    "game_new",
    "game",
    "audio",
    "title",
    "textbox",
    "response_box",
    "player",
    "map",
	  "tilesets",
    "script",
    "transition",
    "misc",
    "pokemon/pokemon",
    "pokemon/pokemon_model",
    "pokemon/name/" + v_app.language + "/pokemon_name",
    "menu/pokemon",
    "menu/save",
  ];
}

function f_game_files_list_js_map(){
  return [
    "new_bark_town",
    "road_29",
  ];
}

function f_game_files_list_js_script(){
  return [
    "new_char",
    "new_bark_town",
    "road_29",
  ];
}

function f_game_files_list_css(){
  return [
    "animation",
    "intro",
    "audio",
    "title",
    "textbox",
    "response_box",
    "game_menu",
    "game_new",
    "player",
    "map",
    "transition",
    "menu/pokemon",
  ];
}
