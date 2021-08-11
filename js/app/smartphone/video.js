function f_video(){
  document.getElementById("menu").onmouseout = "";

  // --- Temp Variables
  let v_temp_element_1;

  // --- Update Variable
  v_app.menu.active = "video";

  // --- Menu Section & Header
  v_temp_element_1 = f_menu_section_add("video");

  document.getElementById("menu").after(v_temp_element_1);
}
