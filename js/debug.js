function f_debug_object(p_object){
  // --- Temp Variables
  let v_temp_object_keys = Object.keys(p_object);

  // ---
  for (let i = 0; i < v_temp_object_keys.length; i++) {
    console.log("%c" + v_temp_object_keys[i] + ", " + typeof(p_object[v_temp_object_keys[i]]), "color: rgb(125, 100, 255)");
    console.log(p_object[v_temp_object_keys[i]]);
  }

  return "object.length: " + v_temp_object_keys.length;
}
