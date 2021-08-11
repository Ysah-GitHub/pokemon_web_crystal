function f_textbox(){
  // --- Temp Variables
  let v_temp_textbox;

  // --- Textbox
  v_temp_textbox = document.createElement("div");
  v_temp_textbox.id = "textbox";
  document.getElementById("game").prepend(v_temp_textbox);
}

function f_textbox_open(){
  // --- Open Textbox
  f_textbox();

  // --- Control
  f_control_keydown_function_add("a", f_textbox_control_key_keydown);
  f_control_keyup_function_add("a", f_textbox_control_key_keyup);
}

function f_textbox_close(){
  // --- Close Textbox
  document.getElementById("textbox").remove();

  // --- Reset Variables
  v_textbox.key = null;

  // --- Remove Event
  f_control_keydown_function_remove("a", "f_textbox_control_key_keydown");
  f_control_keyup_function_remove("a", "f_textbox_control_key_keyup");
}

function f_textbox_text(){
  // --- Disable Textbox Text Event
  document.getElementById("textbox").removeEventListener("click", f_textbox_text);
  f_control_keydown_function_remove("a", "f_textbox_text");

  // --- If Text doesn't exist
  if (v_textbox.script[0] == null) {
    f_textbox_close();
    f_player_control_action_on();
    f_player_control_movement_keypress_on();
    return; // Break Function
  }

  // --- Enable Textbox Speed Event
  document.getElementById("textbox").addEventListener("click", f_textbox_speed_custom);
  f_control_keydown_function_add("a", f_textbox_speed_custom);
  f_control_keyup_function_add("a", f_textbox_speed_default);

  // --- Remove Textbox Icon
  f_textbox_icon_remove();

  // --- If function "before" exist
  if (typeof v_textbox.script[0][2] === "function" && v_textbox.script[0][2].name == "before") {
    v_textbox.script[0][2]();
  }

  // --- Text
  if (v_textbox.script[0][1] == 0 && v_textbox.script[1] != null && v_textbox.script[1][1] == 1) {
    f_textbox_text_remove();
    f_textbox_text_add(v_textbox.script[0][0], v_textbox.script[1][0], v_textbox.script[1][0].length);
  }
  else if (v_textbox.script[0][1] == 0) {
    f_textbox_text_remove();
    f_textbox_text_add(v_textbox.script[0][0]);
  }
  else if (v_textbox.script[0][1] == 1) {
    f_textbox_scroll();
    document.getElementById("textbox").innerHTML += "<br>";
    f_textbox_text_add(v_textbox.script[0][0]);
  }

  // --- Sound
  f_sound_add("pressing_input");
}

function f_textbox_text_add(p_text, p_text2, p_text2_length){
  // --- Temp variables
  let v_temp_text_1 = p_text;
  let v_temp_text_2 = p_text2;

  // --- Insert Character
  if (v_temp_text_1.length > 0) {
    document.getElementById("textbox").innerHTML += v_temp_text_1.charAt(0);
    v_temp_text_1 = v_temp_text_1.substr(1);
  }
  else if (v_temp_text_2 != null && v_temp_text_2.length > 0) {
    if (v_temp_text_2.length == p_text2_length) {
      document.getElementById("textbox").innerHTML += "<br>";
    }
    document.getElementById("textbox").innerHTML += v_temp_text_2.charAt(0);
    v_temp_text_2 = v_temp_text_2.substr(1);
  }
  else {
    f_textbox_text_next();
    return; // Break Function
  }

  // --- Next Character
  setTimeout(f_textbox_text_add, v_textbox.speed, v_temp_text_1, v_temp_text_2, p_text2_length);
}

function f_textbox_text_next(){
  // --- Disable Textbox Speed Event
  document.getElementById("textbox").removeEventListener("click", f_textbox_speed_custom);
  f_control_keydown_function_remove("a", "f_textbox_speed_custom");
  f_control_keyup_function_remove("a", "f_textbox_speed_default");

  // --- Enable Textbox Text Event
  document.getElementById("textbox").addEventListener("click", f_textbox_text);
  f_control_keydown_function_add("a", f_textbox_text);

  // --- If function "after" exist
  if (v_textbox.script[0][1] == 0 && v_textbox.script[1] != null && v_textbox.script[1][1] == 1) {
    if (typeof v_textbox.script[1][2] === "function" && v_textbox.script[1][2].name == "after") {
      v_textbox.script[1][2]();
    }
  }
  else {
    if (typeof v_textbox.script[0][2] === "function" && v_textbox.script[0][2].name == "after") {
      v_textbox.script[0][2]();
    }
  }

  // --- Remove Previous Text
  if (v_textbox.script[0][1] == 0 && v_textbox.script[1] != null && v_textbox.script[1][1] == 1) {
    v_textbox.script.splice(0, 1);
    v_textbox.script.splice(0, 1);
  }
  else{
    v_textbox.script.splice(0, 1);
  }

  // --- Textbox Icon
  if (v_textbox.script[0] == null) {
    f_textbox_icon_add("close");
  }
  else {
    f_textbox_icon_add("next");
  }

  // --- Textbox Speed
  f_textbox_speed_default();
}

function f_textbox_text_remove(){
  document.getElementById("textbox").textContent = "";
}

function f_textbox_speed_default(){
  v_textbox.speed = v_textbox.speed_default;
}

function f_textbox_speed_custom(){
  v_textbox.speed = v_textbox.speed_custom;
}

function f_textbox_icon_add(p_name){
  // --- Temp Variables
  let v_temp_element_1;

  // --- Textbox Icon
  v_temp_element_1 = document.createElement("img");
  v_temp_element_1.id = "textbox_icon";
  v_temp_element_1.src = "rsc/icon/textbox_" + p_name + ".png";
  document.getElementById("textbox").append(v_temp_element_1);

  f_animation_opacity_off_on(v_temp_element_1, 0.7);
}

function f_textbox_icon_remove(){
  if (document.getElementById("textbox_icon")) {
    document.getElementById("textbox_icon").remove();
  }
}

function f_textbox_script_add(p_script){
  v_textbox.script = p_script;
}

function f_textbox_scroll(){
  // --- Temp Variables
  let v_temp_millisecond = 0;

  // --- Scroll
  for (let i = 1; i < 31; i++, v_temp_millisecond += 20) {
    setTimeout(function(){document.getElementById("textbox").scrollTop += i}, v_temp_millisecond);
  }
}

function f_textbox_control_key_keydown(){
  v_textbox.key = v_app.input["a"][1];
}

function f_textbox_control_key_keyup(){
  v_textbox.key = null;
}
