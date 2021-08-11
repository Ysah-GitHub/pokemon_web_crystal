f_game();

function f_game(){
  // --- Temp Variables
  let v_temp_game;
  let v_temp_intro;
  let v_temp_intro_child;

  // --- Game
  v_temp_game = document.createElement("main");
  v_temp_game.id = "game";
  v_temp_game.style.transform = "scale(" + (v_app.orientation == "landscape" ? v_app.scale[0] : v_app.scale[1]) + ")";
  v_temp_game.style.top = (v_app.orientation == "landscape" ? v_app.position[0].top : v_app.position[1].top) + "px";
  v_temp_game.style.left = (v_app.orientation == "landscape" ? v_app.position[0].left : v_app.position[1].left) + "px";

  // Intro
  v_temp_intro = document.createElement("div");
  v_temp_intro.id = "intro";

  v_temp_intro_child = document.createElement("img");
  v_temp_intro_child.src = "rsc/sprite/title.png";
  v_temp_intro.append(v_temp_intro_child);

  v_temp_intro_child = document.createElement("p");
  v_temp_intro_child.textContent = "Click or Press Start";
  f_animation_opacity_off_on(v_temp_intro_child, 1);
  v_temp_intro.append(v_temp_intro_child);


  v_temp_game.append(v_temp_intro);

  document.body.prepend(v_temp_game);
  document.body.insertAdjacentHTML("afterbegin", "<!---Game---------->");

  // --- Control
  document.getElementById("intro").onclick = f_game_start;
  f_control_keydown_function_add("start", f_game_start);
}

function f_game_start(){
  // --- Reset Control
  document.getElementById("intro").onclick = "";
  f_control_keydown_function_reset("start");

  // --- Audio
  f_music();
  f_sound();

  // --- Remove Intro
  document.getElementById("intro").remove();

  // --- Transition
  f_transition_add(350);

  // --- Title
  f_title();
}

function f_game_load(){
  // --- Remove Title
  if (document.getElementById("title")) {
    document.getElementById("title").remove();
  }
  else {
    document.getElementById("game_new").remove();
  }


  // --- Reset Control
  f_control_keydown_function_reset("a");
  f_control_keydown_function_reset("up");
  f_control_keydown_function_reset("down");

  // --- Transition
  f_transition_add(1000);

  // --- Music
  f_music_transition(v_player.map.music, true);

  // --- Map
  f_map();
  f_map_load(v_player.map.name);

  // --- Temp Variables
  let v_temp_element_1;

  // --- Player
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "player";
  v_temp_element_1.className = v_player.map.orientation;
  document.getElementById("game_map").before(v_temp_element_1);

  // --- Enable Player Control
  f_player_control_movement_next_on();
  f_player_control_action_on();
  f_player_control_movement_keypress_on();
  f_player_control_movement_keyup_on();
}
