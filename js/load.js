f_app_language();
f_app_device();
f_app_load_file_list();

function f_app_language(){
  // Application files language is defined by the navigator language
  // If navigator language is not supported by app, set to english

  // --- Temp Variables
  let v_temp_language = navigator.language.substr(0,2);
  let v_temp_language_supported = [
    "en",
    "fr",
  ];

  // ---
  if (v_temp_language_supported.includes(v_temp_language)) {
    v_app.language = v_temp_language;
  }
  else {
    v_app.language = "en";
  }
}

function f_app_device(){
  // Detect device navigator, js and css app files depending of device value
  // Laptop and tablet not discerned from desktop and smartphone but it works

  // --- Temp Variables
  let v_temp_device = /Mobi/.test(navigator.userAgent);

  // --- App Device
  if (v_temp_device) {
    v_app.device = "smartphone";
  }
  else {
    v_app.device = "desktop";
  }

  // --- App Orientation
  if (window.screen.width >= window.screen.height) {
    v_app.orientation = "landscape";
  }
  else {
    v_app.orientation = "portrait";
  }
}

function f_app_load_file_list(){
  // Load the list of all files (Application and Game)
  // launch function f_app_load_files after file list are loaded

  f_app_load_file_js("js/file_list/" + v_app.device + "/file_list_app");
  f_app_load_file_js("js/file_list/file_list_game");

  // ---
  document.body.insertAdjacentHTML("beforeend", "<!---JS Application---------->");
}

function f_app_load_files(){
  // Load all files (js and css)
  // Directory depending of v_app.device and v_app.language

  // --- Temp Variables
  let v_temp_file_list;

  // --- JS Application files
  v_temp_file_list = f_app_files_list_js();
  for (let i = 0; i < v_temp_file_list.length; i++) {
    f_app_load_file_js("js/app/" + v_app.device + "/" + v_temp_file_list[i]);
  }

  // --- CSS Application files
  v_temp_file_list = f_app_files_list_css();
  document.head.insertAdjacentHTML("beforeend", "<!---CSS Application---------->");
  for (let i = 0; i < v_temp_file_list.length; i++) {
    f_app_load_file_css("css/app/" + v_app.device + "/" + v_temp_file_list[i]);
  }

  // --- JS Game files
  v_temp_file_list = f_game_files_list_js();
  document.body.insertAdjacentHTML("beforeend", "<!---JS Game---------->");
  for (let i = 0; i < v_temp_file_list.length; i++) {
    f_app_load_file_js("js/game/" + v_temp_file_list[i]);
  }

  // --- JS Game files - Map
  v_temp_file_list = f_game_files_list_js_map();
  document.body.insertAdjacentHTML("beforeend", "<!---JS Game - Map---------->");
  for (let i = 0; i < v_temp_file_list.length; i++) {
    f_app_load_file_js("js/game/map/" + v_temp_file_list[i]);
  }

  // --- JS Game files - Script
  v_temp_file_list = f_game_files_list_js_script();
  document.body.insertAdjacentHTML("beforeend", "<!---JS Game - Script---------->");
  for (let i = 0; i < v_temp_file_list.length; i++) {
    f_app_load_file_js("js/game/script/" + v_app.language + "/" + v_temp_file_list[i]);
  }

  // --- CSS Game files
  v_temp_file_list = f_game_files_list_css();
  document.head.insertAdjacentHTML("beforeend", "<!---CSS Game---------->");
  for (let i = 0; i < v_temp_file_list.length; i++) {
    f_app_load_file_css("css/game/" + v_temp_file_list[i]);
  }
}

function f_app_load_file_js(p_path){
  // --- Temp Variables
  let v_temp_script;

  // --- Script
  v_temp_script = document.createElement("script");
  v_temp_script.src = p_path + ".js";
  document.body.append(v_temp_script);
}

function f_app_load_file_css(p_path){
  // --- Temp Variables
  let v_temp_stylesheet;

  // --- Stylesheet
  v_temp_stylesheet = document.createElement("link");
  v_temp_stylesheet.rel = "stylesheet";
  v_temp_stylesheet.href = p_path + ".css";
  document.head.append(v_temp_stylesheet);
}
