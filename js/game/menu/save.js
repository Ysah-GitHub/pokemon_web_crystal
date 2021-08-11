function f_game_menu_save(){
  // ---  Temp Variables
  let v_temp_script = [
    ["Sauvegarder la", 0],
    ["partie ?", 1, function after(){
      document.getElementById("textbox").removeEventListener("click", f_textbox_text);
      f_control_keydown_function_remove("a", "f_textbox_text");
      v_response_box.function = function(p_response){
        if (p_response == true) {
          f_player_save();
          f_textbox_script_add([
            ["Sauvegarder réussi", 0],
            ["...", 1],
          ]);
          f_textbox_text();
        }
        else {
          f_textbox_script_add([
            ["Sauvegarde annulée", 0],
            ["...", 1],
          ]);
          f_textbox_text();
        }
      };
      f_response_box_open();
    }],
  ];

  document.getElementById("game_menu").remove();

  // --- Script
  f_textbox_script_add(v_temp_script);
  f_textbox_open();
  f_textbox_text();
}
