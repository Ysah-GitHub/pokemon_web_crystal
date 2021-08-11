function f_transition_add(p_time){
  // --- Temp Variables
  let v_temp_element_1;

  // --- Transition
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "game_transition";
  v_temp_element_1.style.animationName = "kf_transition";
  v_temp_element_1.style.animationDuration = (p_time / 1000) + "s";

  document.getElementById("game").prepend(v_temp_element_1);

  // --- Remove Transition
  setTimeout(f_transition_remove, p_time, v_temp_element_1);
}

function f_transition_remove(p_transition){
  p_transition.remove();
}
