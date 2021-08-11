f_app_scale_default();
f_app_position_auto();
window.addEventListener("resize", function(){f_app_position_auto(); f_app_position()});



function f_app_scale_default(){
  v_app.scale[0] = 2; // Landscape
  v_app.scale[1] = 2; // Portrait
}

function f_app_position(){
  // --- Temp Variables
  let v_temp_position_top = (v_app.orientation == "landscape" ? v_app.position[0].top : v_app.position[1].top);
  let v_temp_position_left = (v_app.orientation == "landscape" ? v_app.position[0].left : v_app.position[1].left);

  // --- Position
  document.getElementById("game").style.top = v_temp_position_top + "px";
  document.getElementById("game").style.left = v_temp_position_left + "px";
}

function f_app_position_auto(){
  // Landscape
  v_app.position[0].top = ((window.innerHeight / 2) - 160)
  v_app.position[0].left = (v_app.orientation == "landscape" ? ((window.innerWidth / 2) - 160) : ((window.innerHeight / 2) - 160));
  // Portrait
  v_app.position[1].top = (((288 * v_app.scale[1]) - 288) / 2);
  v_app.position[1].left = (((320 * v_app.scale[1]) - 320) / 2);
}
