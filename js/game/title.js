function f_title(){
  // --- Temp Variables
  let v_temp_title;
  let v_temp_element_1;
  let v_temp_element_2;

  // --- Title
  v_temp_title = document.createElement("div");
  v_temp_title.id = "title";

  // Background
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "title_background";
  v_temp_element_1.append(document.createElement("div"));
  v_temp_element_1.append(document.createElement("div"));

  v_temp_title.append(v_temp_element_1);

  // Menu
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "title_menu";

  v_temp_element_2 = document.createElement("img");
  v_temp_element_2.src = "rsc/sprite/title.png";
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("p");
  v_temp_element_2.textContent = "CONTINUE";
  v_temp_element_2.onmouseover = function(){f_title_select(1)};
  if (v_player.name == null) {v_temp_element_2.style.color = "rgb(80, 80, 80)"}
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("p");
  v_temp_element_2.textContent = "NEW";
  v_temp_element_2.onclick = f_game_new;
  v_temp_element_2.onmouseover = function(){f_title_select(2)};
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("p");
  v_temp_element_2.textContent = "LOAD";
  v_temp_element_2.onmouseover = function(){f_title_select(3)};
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("div");
  v_temp_element_2.textContent = v_app.version;
  v_temp_element_1.append(v_temp_element_2);

  v_temp_title.append(v_temp_element_1);

  document.getElementById("game").prepend(v_temp_title);

  // --- Music
  f_music_add("title_screen", true);

  // --- Control
  if (v_player.name != null) {
    document.getElementById("title_menu").children[1].onclick = f_game_load;
    f_title_select(1);
  }
  else {f_title_select(2)}

  document.getElementById("title_menu").children[3].onclick = f_sync_load;

  v_app.input["up"][2].push(f_title_select_up);
  v_app.input["down"][2].push(f_title_select_down);
}

function f_title_select_up(){
  switch (v_app.input["a"][2][0].name) {
    case "f_title_select_3": f_title_select(2); break;
    case "f_title_select_2": f_title_select(1); break;
  }
}

function f_title_select_down(){
  switch (v_app.input["a"][2][0].name) {
    case "f_title_select_1": f_title_select(2); break;
    case "f_title_select_2": f_title_select(3); break;
  }
}

function f_title_select(p_number){
  // --- Reset Select
  document.getElementById("title_menu").children[1].className = "";
  document.getElementById("title_menu").children[2].className = "";
  document.getElementById("title_menu").children[3].className = "";

  // --- Select
  f_title_select_function(p_number);
  document.getElementById("title_menu").children[p_number].className = "select";
}

function f_title_select_function(p_number){
  switch (p_number) {
    case 1:
      v_app.input["a"][2][0] = function f_title_select_1(){
        if (v_player.name != null) {f_game_load()};
      };
      break;
    case 2:
      v_app.input["a"][2][0] = function f_title_select_2(){
        f_game_new();
      };
      break;
    case 3:
      v_app.input["a"][2][0] = function f_title_select_3(){
        f_sync_load();
      };
      break;
  }
}
