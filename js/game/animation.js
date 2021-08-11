function f_animation_opacity_on(p_element, p_second){
  p_element.style.animationName = "kf_opacity_on";
  p_element.style.opacity = "1";
  p_element.style.animationDuration = p_second + "s";
}

function f_animation_opacity_off(p_element, p_second){
  p_element.style.animationName = "kf_opacity_off";
  p_element.style.opacity = "0";
  p_element.style.animationDuration = p_second + "s";
}

function f_animation_opacity_off_on(p_element, p_second){
  p_element.style.animationName = "kf_opacity_off_on";
  p_element.style.opacity = "0";
  p_element.style.animationDuration = p_second + "s";
  p_element.style.animationTimingFunction = "linear";
  p_element.style.animationIterationCount = "infinite";
}
