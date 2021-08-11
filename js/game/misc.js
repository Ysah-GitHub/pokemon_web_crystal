function f_number_random(p_min, p_max){
  return Math.floor((Math.random() * p_max) + p_min);
}

function f_get_hours_and_minutes(){
  var v_temp_response;
  var v_temp_date = new Date();

  v_temp_response = v_temp_date.getHours() + ":";

  if (v_temp_date.getMinutes() < 10) {
    return v_temp_response += "0" + v_temp_date.getMinutes();
  }
  else {
    return v_temp_response += v_temp_date.getMinutes();
  }
}
