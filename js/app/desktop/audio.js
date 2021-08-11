f_audio_load();

function f_audio(){
  document.getElementById("menu").onmouseout = "";

  // --- Temp Variables
  let v_temp_element_1;

  // --- Update Variable
  v_app.menu.active = "audio";

  // --- Menu Section & Header
  v_temp_element_1 = f_menu_section_add("audio");

  // --- Menu Input - Music & Sound
  v_temp_element_1.append(f_audio_new("music"));
  v_temp_element_1.append(f_audio_new("sound"));

  document.getElementById("menu").after(v_temp_element_1);
}

function f_audio_new(p_audio_name){
  // --- Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;

  // --- Audio
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "audio_" + p_audio_name;
  v_temp_element_1.className = "audio_";

  v_temp_element_2 = document.createElement("div");
  v_temp_element_2.textContent = p_audio_name.toUpperCase();
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("input");
  v_temp_element_2.id = "audio_" + p_audio_name + "_number";
  v_temp_element_2.type = "text";
  v_temp_element_2.value = v_app.audio[p_audio_name];
  v_temp_element_2.addEventListener("change", function(){f_audio_update(p_audio_name, f_audio_min_max_value(this.value, 0, 100))});
  v_temp_element_2.addEventListener("change", f_audio_save);
  v_temp_element_1.append(v_temp_element_2);

  v_temp_element_2 = document.createElement("input");
  v_temp_element_2.id = "audio_" + p_audio_name + "_range";
  v_temp_element_2.type = "range";
  v_temp_element_2.min = "0";
  v_temp_element_2.max = "100";
  v_temp_element_2.value = v_app.audio[p_audio_name];
  v_temp_element_2.addEventListener("input", function(){f_audio_update(p_audio_name, f_audio_min_max_value(this.value, 0, 100))});
  v_temp_element_2.addEventListener("change", f_audio_save);
  v_temp_element_1.append(v_temp_element_2);

  return v_temp_element_1;
}

function f_audio_min_max_value(p_value, p_min, p_max){
  if (p_value == "") {
    return "";
  }
  else if (isNaN(p_value)) {
    return 0;
  }
  else if (p_value > p_max) {
    return p_max;
  }
  else if (p_value < p_min) {
    return p_min;
  }
  else {
    return Number(p_value);
  }
}

function f_audio_update(p_audio_name, p_value){
  v_app.audio[p_audio_name] = p_value;
  document.getElementById("audio_" + p_audio_name + "_number").value = p_value;
  document.getElementById("audio_" + p_audio_name + "_range").value = p_value;
  f_music_volume_update(p_value / 100);
}

function f_audio_load(){
  if (localStorage.getItem("audio") != null) {
    v_app.audio = JSON.parse(localStorage.getItem("audio"));
  }
}

function f_audio_save(){
  localStorage.setItem("audio", JSON.stringify(v_app.audio));
}

function f_audio_remove(){
  document.getElementById("menu").onmouseout = f_menu_expand_off;
  document.getElementById("audio").remove();
}
