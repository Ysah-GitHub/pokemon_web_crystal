function f_menu(){
  // --- Temp Variables
  let v_temp_menu;
  let v_temp_menu_list;

  // --- Menu
  v_temp_menu = document.createElement("nav");
  v_temp_menu.id = "menu";

  v_temp_menu_list = document.createElement("ul");

  v_temp_menu_list.append(f_menu_add("return", false, f_menu_remove));
  v_temp_menu_list.append(f_menu_add("profile", true));
  v_temp_menu_list.append(f_menu_add("video", true));
  v_temp_menu_list.append(f_menu_add("audio", true));
  v_temp_menu_list.append(f_menu_add("interface", true));
  v_temp_menu_list.append(f_menu_add("docs", true));
  v_temp_menu_list.append(f_menu_add("donate", true));

  v_temp_menu.append(v_temp_menu_list);

  document.body.prepend(v_temp_menu);
  document.body.insertAdjacentHTML("afterbegin", "<!---Menu---------->");
}

function f_menu_remove(){
  document.getElementById("menu").remove();
}

function f_menu_add(p_menu_name, p_f_menu, p_function){
  // --- Temp Variables
  let v_temp_li;
  let v_temp_element;

  // --- Menu
  v_temp_li = document.createElement("li");
  v_temp_li.id = "menu_" + p_menu_name;
  if (p_f_menu) { v_temp_li.onclick = function(){f_menu_open(p_menu_name)}}
  else {v_temp_li.onclick = p_function}

  v_temp_element = document.createElement("img");
  v_temp_element.src = "rsc/icon/" + p_menu_name + ".png";
  v_temp_li.append(v_temp_element);

  v_temp_element = document.createElement("span");
  v_temp_element.textContent = p_menu_name.toUpperCase();
  v_temp_li.append(v_temp_element);

  return v_temp_li;
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

function f_menu_open(p_menu_name){
  // --- Open Menu Active
  window["f_" + p_menu_name]();

  // --- Hide Menu
  document.getElementById("menu").style.display = "none";
}

function f_menu_close(){
  // --- Close Menu Active
  document.getElementById(v_app.menu.active).remove();

  // --- Reset Variables
  v_app.menu.active = null;

  // --- Show Menu
  document.getElementById("menu").style.display = "block";
}
