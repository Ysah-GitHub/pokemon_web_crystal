function f_docs(){
  document.getElementById("menu").onmouseout = "";

  // --- Temp Variables
  let v_temp_element_1;

  // --- Update Variable
  v_app.menu.active = "docs";
// https://mega.nz/folder/GN1SnSaK#0dSWqK5X8c29vVvGXwxtYw
  // --- Menu Section & Header
  v_temp_element_1 = f_menu_section_add("docs");

  document.getElementById("menu").after(v_temp_element_1);
}

function f_docs_remove(){
  document.getElementById("menu").onmouseout = f_menu_expand_off;
  document.getElementById("docs").remove();
}
