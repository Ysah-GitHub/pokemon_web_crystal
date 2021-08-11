f_input_touch();

function f_input_touch(){
  // --- Temp Variables
  let v_temp_element_1;

  // --- Input
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "input_touch";

  v_temp_element_1.append(f_input_touch_add("a", true, true));
  v_temp_element_1.append(f_input_touch_add("b", true, true));
  v_temp_element_1.append(f_input_touch_add("up", false, true));
  v_temp_element_1.append(f_input_touch_add("left", false, true));
  v_temp_element_1.append(f_input_touch_add("right", false, true));
  v_temp_element_1.append(f_input_touch_add("down", false, true));
  v_temp_element_1.append(f_input_touch_add("select", true, true));
  v_temp_element_1.append(f_input_touch_add("start", true, true));
  v_temp_element_1.append(f_input_touch_add("menu", false, false, f_menu));

  document.body.prepend(v_temp_element_1);
}

function f_input_touch_add(p_name, p_text, p_keydown, p_function){
  // --- Temp Variables
  let v_temp_input;

  // --- Input
  v_temp_input = document.createElement("input");
  v_temp_input.id = "input_touch_" + p_name;
  v_temp_input.type = "button";
  if (p_text) {v_temp_input.value = p_name.toUpperCase()}
  if (p_keydown) {v_temp_input.onclick = function(){f_control_keydown_function(p_name)}}
  else {v_temp_input.onclick = p_function}
  return v_temp_input;
}
