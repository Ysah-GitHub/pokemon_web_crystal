f_menu();

function f_menu(){
  // --- Temp Variables
  let v_temp_menu;
  let v_temp_menu_list;

  // --- Menu
  v_temp_menu = document.createElement("nav");
  v_temp_menu.id = "menu";

  v_temp_menu.onmouseover = f_menu_expand_on;
  v_temp_menu.onmouseout = f_menu_expand_off;

  v_temp_menu_list = document.createElement("ul");

  v_temp_menu_list.append(f_menu_add("profile"));
  v_temp_menu_list.append(f_menu_add("video"));
  v_temp_menu_list.append(f_menu_add("audio"));
  v_temp_menu_list.append(f_menu_add("input"));
  v_temp_menu_list.append(f_menu_add("interface"));
  v_temp_menu_list.append(f_menu_add("docs"));
  v_temp_menu_list.append(f_menu_add("donate"));

  v_temp_menu.append(v_temp_menu_list);

  document.body.prepend(v_temp_menu);
  document.body.insertAdjacentHTML("afterbegin", "<!---Menu---------->");
}

function f_menu_add(p_menu_name){
  // --- Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;

  // --- Menu
  v_temp_element_1 = document.createElement("li");
  v_temp_element_1.id = "menu_" + p_menu_name;
  v_temp_element_1.onclick = function(){f_menu_open(p_menu_name)};

  v_temp_element_2 = document.createElement("img");
  v_temp_element_2.src = "rsc/icon/" + p_menu_name + ".png";
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("span");
  v_temp_element_2.textContent = p_menu_name.toUpperCase();
  v_temp_element_1.append(v_temp_element_2);

  return v_temp_element_1;
}

function f_menu_section_add(p_menu_name){
  // --- Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;
  let v_temp_element_3;

  // --- Menu Section
  v_temp_element_1 = document.createElement("section");
  v_temp_element_1.id = p_menu_name;
  v_temp_element_1.className = "menu_section";

  // --- Menu Header
  v_temp_element_2 = document.createElement("header");
  v_temp_element_2.className = "menu_header";

  v_temp_element_3 = document.createElement("img");
  v_temp_element_3.src = "rsc/icon/close.png";
  v_temp_element_3.onclick = f_menu_close;
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_3 = document.createElement("span");
  v_temp_element_3.textContent = p_menu_name.toUpperCase();
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_1.append(v_temp_element_2);

  return v_temp_element_1;
}

function f_menu_expand_on(){
  v_app.menu.expand = true;
  document.getElementById("menu").className = "expand";
}

function f_menu_expand_off(){
  v_app.menu.expand = false;
  document.getElementById("menu").removeAttribute("class");
}

function f_menu_open(p_menu_name){
  if (v_app.menu.active == null) {
    window["f_" + p_menu_name]();
  }
  else if (v_app.menu.active != p_menu_name) {
    window["f_" + v_app.menu.active + "_remove"]();
    window["f_" + p_menu_name]();
  }
}

function f_menu_close(){
  if (v_app.menu.active != null) {
    window["f_" + v_app.menu.active + "_remove"]();
    v_app.menu.active = null;
    f_menu_expand_off();
  }
}
