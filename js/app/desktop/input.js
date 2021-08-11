f_input_load();

function f_input(){
  document.getElementById("menu").onmouseout = "";

  // --- Temp Variables
  let v_temp_element_1;

  // --- Update Variable
  v_app.menu.active = "input";

  // --- Menu Section & Header
  v_temp_element_1 = f_menu_section_add("input");

  // --- Menu Input - Inputs
  v_temp_element_1.append(f_input_new("a"));
  v_temp_element_1.append(f_input_new("b"));
  v_temp_element_1.append(f_input_new("up"));
  v_temp_element_1.append(f_input_new("down"));
  v_temp_element_1.append(f_input_new("left"));
  v_temp_element_1.append(f_input_new("right"));
  v_temp_element_1.append(f_input_new("start"));
  v_temp_element_1.append(f_input_new("select"));

  document.getElementById("menu").after(v_temp_element_1);
}

function f_input_new(p_input_name){
  // --- Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;

  // --- Input
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "input_" + p_input_name;
  v_temp_element_1.className = "input_";

  v_temp_element_2 = document.createElement("div");
  v_temp_element_2.id = "input_select_name";
  v_temp_element_2.textContent = p_input_name.toUpperCase();
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("div");
  v_temp_element_2.id = "input_" + p_input_name + "_custom";
  v_temp_element_2.textContent = v_app.input[p_input_name][1];
  v_temp_element_2.onmouseover = function(){
    this.textContent = "Press key";
    window.onkeypress = function(){
      v_app.input[p_input_name][1] = event.key;
      document.getElementById("input_" + p_input_name + "_custom").textContent = event.key;
      f_input_save();
    };
    this.onmouseout = function(){
      window.onkeypress = null;
      this.onmouseout = null;
      this.textContent = v_app.input[p_input_name][1];
    };
  };
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("img");
  v_temp_element_2.id = "input_" + p_input_name + "_default";
  v_temp_element_2.src = "rsc/icon/return.png";
  v_temp_element_2.onclick = function(){
    v_app.input[p_input_name][1] = v_app.input[p_input_name][0];
    document.getElementById("input_" + p_input_name + "_custom").textContent = v_app.input[p_input_name][0];
    f_input_save();
  };
  v_temp_element_1.append(v_temp_element_2);

  return v_temp_element_1;
}

function f_input_load(){
  // --- Temp Variables
  let v_temp_input_default;
  let v_temp_input_custom;

  // --- Default Input
  if (v_app.language == "fr") {
    v_temp_input_default = f_input_azerty();
  }
  else {
    v_temp_input_default = f_input_qwerty();
  }

  // --- Custom Input
  if (localStorage.getItem("input") != null) {
    v_temp_input_custom = JSON.parse(localStorage.getItem("input"));
  }
  else {
    v_temp_input_custom = v_temp_input_default;
  }

  // --- Load Default Input
  v_app.input["a"][0] = v_temp_input_default["a"];
  v_app.input["b"][0] = v_temp_input_default["b"];
  v_app.input["up"][0] = v_temp_input_default["up"];
  v_app.input["down"][0] = v_temp_input_default["down"];
  v_app.input["left"][0] = v_temp_input_default["left"];
  v_app.input["right"][0] = v_temp_input_default["right"];
  v_app.input["start"][0] = v_temp_input_default["start"];
  v_app.input["select"][0] = v_temp_input_default["select"];

  // --- Load Custom Input
  v_app.input["a"][1] = v_temp_input_custom["a"];
  v_app.input["b"][1] = v_temp_input_custom["b"];
  v_app.input["up"][1] = v_temp_input_custom["up"];
  v_app.input["down"][1] = v_temp_input_custom["down"];
  v_app.input["left"][1] = v_temp_input_custom["left"];
  v_app.input["right"][1] = v_temp_input_custom["right"];
  v_app.input["start"][1] = v_temp_input_custom["start"];
  v_app.input["select"][1] = v_temp_input_custom["select"];
}

function f_input_save(){
  // --- Temp Variables
  let v_temp_input = {
    a: v_app.input["a"][1],
    b: v_app.input["b"][1],
    up: v_app.input["up"][1],
    down: v_app.input["down"][1],
    left: v_app.input["left"][1],
    right: v_app.input["right"][1],
    start: v_app.input["start"][1],
    select: v_app.input["select"][1],
  };

  // --- Save Input
  localStorage.setItem("input", JSON.stringify(v_temp_input));
}

function f_input_qwerty(){
  return {
    a : "q",
    b : "e",
    up : "w",
    down : "s",
    left : "a",
    right : "d",
    start : "Enter",
    select : "f",
  };
}

function f_input_azerty(){
  return {
    a : "a",
    b : "e",
    up : "z",
    down : "s",
    left : "q",
    right : "d",
    start : "Enter",
    select : "f",
  };
}

function f_input_remove(){
  document.getElementById("menu").onmouseout = f_menu_expand_off;
  document.getElementById("input").remove();
}
