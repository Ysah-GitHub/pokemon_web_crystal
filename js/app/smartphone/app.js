f_app_rotation();
f_app_scale_auto();
f_app_position_auto();
window.addEventListener("resize", function(){f_app_rotation(); f_app_scale(); f_app_position()});

function f_app_rotation(){
  if (window.screen.width >= window.screen.height) {
    v_app.orientation = "landscape";
    document.body.className = "landscape";
  }
  else {
    v_app.orientation = "portrait";
    document.body.className = "portrait";
  }
}

function f_app_scale(){
  // --- Temp Variables
  let v_temp_scale = (v_app.orientation == "landscape" ? v_app.scale[0] : v_app.scale[1]);

  // --- Scale
  document.getElementById("game").style.transform = "scale(" + v_temp_scale + ")";
}

function f_app_scale_auto(){
  if (v_app.orientation == "landscape") {
    v_app.scale[0] = (window.innerHeight / 288); // Landscape
    v_app.scale[1] = (window.innerHeight / 320); // Portrait
  }
  else {
    v_app.scale[0] = (window.innerWidth / 288); // Landscape
    v_app.scale[1] = (window.innerWidth / 320); // Portrait
  }
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
  v_app.position[0].top = (((288 * v_app.scale[0]) - 288) / 2);
  v_app.position[0].left = (v_app.orientation == "landscape" ? ((window.innerWidth / 2) - 160) : ((window.innerHeight / 2) - 160));
  // Portrait
  v_app.position[1].top = (((288 * v_app.scale[1]) - 288) / 2);
  v_app.position[1].left = (((320 * v_app.scale[1]) - 320) / 2);
}
