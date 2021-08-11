function f_response_box_open(){
  // ---  Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;

  // ---  Reset Variables
  v_response_box.select = 0;

  // ---  Add Response Box Control
  f_response_box_select_on()

  // ---  Response Box
  v_temp_element_1 = document.createElement("span");
  v_temp_element_1.id = "response_box";

  v_temp_element_2 = document.createElement("div");
  v_temp_element_2.textContent = "Yes";
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("div");
  v_temp_element_2.textContent = "No";
  v_temp_element_1.append(v_temp_element_2);

  document.getElementById("textbox").before(v_temp_element_1);

  // ---  Default Select
  f_response_box_select_up();
}

function f_response_box_close(){
  // ---  Reset Select
  v_response_box.select = null;

  // ---  Reset Function
  v_response_box.function = null;
  f_response_box_select_off();

  // ---  Remove Response Box
  document.getElementById("response_box").remove();
}

function f_response_box_select(){
  v_response_box.function(v_response_box.select == 0 ? true : false);
  f_response_box_close();
}

function f_response_box_select_up(){
  v_response_box.select = 0;
  document.getElementById("response_box").children[1].className = "";
  document.getElementById("response_box").children[0].className = "select";
}

function f_response_box_select_down(){
  v_response_box.select = 1;
  document.getElementById("response_box").children[0].className = "";
  document.getElementById("response_box").children[1].className = "select";
}

function f_response_box_select_on(){
  f_control_keydown_function_add("a", f_response_box_select);
  f_control_keydown_function_add("up", f_response_box_select_up);
  f_control_keydown_function_add("down", f_response_box_select_down);
}

function f_response_box_select_off(){
  f_control_keydown_function_remove("a", "f_response_box_select");
  f_control_keydown_function_remove("up", "f_response_box_select_up");
  f_control_keydown_function_remove("down", "f_response_box_select_down");
}
