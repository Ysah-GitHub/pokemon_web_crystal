f_control_on();

function f_control_keydown(){
  switch (event.key) {
    case v_app.input["a"][1]: f_control_keydown_function("a"); break;
    case v_app.input["b"][1]: f_control_keydown_function("b"); break;
    case v_app.input["up"][1]: f_control_keydown_function("up"); break;
    case v_app.input["down"][1]: f_control_keydown_function("down"); break;
    case v_app.input["left"][1]: f_control_keydown_function("left"); break;
    case v_app.input["right"][1]: f_control_keydown_function("right"); break;
    case v_app.input["start"][1]: f_control_keydown_function("start"); break;
    case v_app.input["select"][1]: f_control_keydown_function("select"); break;
  }
}

function f_control_keydown_on(){
  window.addEventListener("keydown", f_control_keydown);
}

function f_control_keydown_off(){
  window.removeEventListener("keydown", f_control_keydown);
}

function f_control_keydown_function(p_input_name){
  for (let i = 0; i < v_app.input[p_input_name][2].length; i++) {
    v_app.input[p_input_name][2][i]();
  }
}

function f_control_keydown_function_add(p_input_name, p_function){
  v_app.input[p_input_name][2].push(p_function);
}

function f_control_keydown_function_remove(p_input_name, p_function_name){
  // --- Temp Variables
  let v_temp_index;

  // --- Index
  for (let i = 0; i < v_app.input[p_input_name][2].length; i++) {
    if (v_app.input[p_input_name][2][i].name == p_function_name) {
      v_temp_index = i;
      break;
    }
  }

  // --- Remove Function
  if (v_temp_index != null) {v_app.input[p_input_name][2].splice(v_temp_index, 1)}
}


function f_control_keydown_function_reset(p_input_name){
  v_app.input[p_input_name][2] = [];
}

function f_control_keydown_function_reset_all(){
  f_control_keydown_function_reset("a");
  f_control_keydown_function_reset("b");
  f_control_keydown_function_reset("up");
  f_control_keydown_function_reset("down");
  f_control_keydown_function_reset("left");
  f_control_keydown_function_reset("right");
  f_control_keydown_function_reset("start");
  f_control_keydown_function_reset("select");
}

function f_control_keyup(){
  switch (event.key) {
    case v_app.input["a"][1]: f_control_keyup_function("a"); break;
    case v_app.input["b"][1]: f_control_keyup_function("b"); break;
    case v_app.input["up"][1]: f_control_keyup_function("up"); break;
    case v_app.input["down"][1]: f_control_keyup_function("down"); break;
    case v_app.input["left"][1]: f_control_keyup_function("left"); break;
    case v_app.input["right"][1]: f_control_keyup_function("right"); break;
    case v_app.input["start"][1]: f_control_keyup_function("start"); break;
    case v_app.input["select"][1]: f_control_keyup_function("select"); break;
  }
}

function f_control_keyup_on(){
  window.addEventListener("keyup", f_control_keyup);
}

function f_control_keyup_off(){
  window.removeEventListener("keyup", f_control_keyup);
}

function f_control_keyup_function(p_input_name){
  for (let i = 0; i < v_app.input[p_input_name][3].length; i++) {
    v_app.input[p_input_name][3][i]();
  }
}

function f_control_keyup_function_add(p_input_name, p_function){
  v_app.input[p_input_name][3].push(p_function);
}

function f_control_keyup_function_remove(p_input_name, p_function_name){
  // --- Temp Variables
  let v_temp_index;

  // --- Index
  for (let i = 0; i < v_app.input[p_input_name][2].length; i++) {
    if (v_app.input[p_input_name][3][i].name == p_function_name) {
      v_temp_index = i;
      break;
    }
  }

  // --- Remove Function
  if (v_temp_index != null) {v_app.input[p_input_name][3].splice(v_temp_index, 1)}
}

function f_control_keyup_function_reset(p_input_name){
  v_app.input[p_input_name][3] = [];
}

function f_control_keyup_function_reset_all(){
  f_control_keyup_function_reset("a");
  f_control_keyup_function_reset("b");
  f_control_keyup_function_reset("up");
  f_control_keyup_function_reset("down");
  f_control_keyup_function_reset("left");
  f_control_keyup_function_reset("right");
  f_control_keyup_function_reset("start");
  f_control_keyup_function_reset("select");
}

function f_control_on(){
  f_control_keydown_on();
  f_control_keyup_on();
}

function f_control_off(){
  f_control_keydown_off();
  f_control_keyup_off();
}

function f_control_reset_all(){
  f_control_keydown_function_reset_all();
  f_control_keyup_function_reset_all();
}
