function f_interface(){
  document.getElementById("menu").onmouseout = "";

  // --- Temp Variables
  let v_temp_element_1;

  // --- Update Variable
  v_app.menu.active = "interface";

  // --- Menu Section & Header
  v_temp_element_1 = f_menu_section_add("interface");

  document.getElementById("menu").after(v_temp_element_1);
}

function f_interface_remove(){
  document.getElementById("menu").onmouseout = f_menu_expand_off;
  document.getElementById("interface").remove();
}
