function f_script_new_bark_town(){
  return {
    script_map: function(){
      if (v_player.map.orientation == "up" && v_player.map.y == 9 && v_player.map.x == 19) {
        f_script_map_transition_in(8, 7, "up", "player_house");
      }
      else if (v_player.map.orientation == "left" && v_player.map.y == 11 && v_player.map.x == 6) {
        f_script_map_transition(13, 60, "left", "road_29");
        f_music_transition("road_29", true);
      }
      else if (v_player.map.orientation == "left" && v_player.map.y == 12 && v_player.map.x == 6) {
        f_script_map_transition(14, 60, "left", "road_29");
        f_music_transition("road_29", true);
      }
      else if (v_player.map.orientation == "up" && v_player.map.y == 7 && v_player.map.x == 12) {
        f_script_map_transition_in(12, 5, "up", "elm_lab");
        f_music_transition("elm_lab", true);
      }
      else {
        return false;
      }
    },
    script_text: function(p_y, p_x){
      if (p_y == 6 && p_x == 9) {
        f_script_text([
          ["LABO POKÉMON du", 0],
          ["PROF.ORME", 1],
        ]);
      }
      else if (p_y == 11 && p_x == 14) {
        f_script_text([
          ["BOURG GEON", 0],
          ["La ville où", 0],
          ["souffle le vent", 1],
          ["d'une nouvelle vie", 1],
        ]);
      }
      else if (p_y == 16 && p_x == 15) {
        f_script_text([
          ["MAISON DU PROF.ORME", 0]
        ]);
      }
      else if (p_y == 8 && p_x == 17) {
        f_script_text([
          ["MAISON DE " + v_player.name, 0]
        ]);
      }
      else if (p_y == 14 && p_x == 9) {
        f_script_text([
          ["Cette maison est", 0],
          ["fermé...", 1],
          ["! Un mystérieux", 0],
          ["message est attaché", 1],
          ["à la porte :", 1],
          ["Le jeu est encore en", 0],
          ["alpha, revenez à la", 1],
          ["prochaine mise à jour", 1],
        ]);
      }
      else if (p_y == 16 && p_x == 17) {
        f_script_text([
          ["Cette maison est", 0],
          ["fermé...", 1],
          ["! Un mystérieux", 0],
          ["message est attaché", 1],
          ["à la porte :", 1],
          ["Le jeu est encore en", 0],
          ["alpha, revenez à la", 1],
          ["prochaine mise à jour", 1],
        ]);
      }
      else {
        f_player_control_action_on();
      }
    },
  };
}

function f_script_player_house(){
  return {
    script_map: function(){
      if (v_player.map.orientation == "up" && v_player.map.y == 2 && v_player.map.x == 10) {
        f_script_map_transition_in_out("up", 1, 8, "down", "player_house_1");
      }
      else if (v_player.map.orientation == "down" && v_player.map.y == 8 && v_player.map.x == 7) {
        f_script_map_transition_out(8, 19, "down", "new_bark_town");
      }
      else if (v_player.map.orientation == "down" && v_player.map.y == 8 && v_player.map.x == 8) {
        f_script_map_transition_out(8, 19, "down", "new_bark_town");
      }
      else {
        return false;
      }
    },
    script_text: function(p_y, p_x){
      if (p_y == 2 && p_x == 5) {
        f_script_text([
          ["Une chanson passe", 0],
          ["à la TV : ", 1],
          ["Le nez de Dorothée", 0],
          ["Qu'on se le dise", 1],
          ["Restera cette année", 1],
          ["Dans sa valise...", 1],
          ["...", 1],
          ["Mince, c'est déjà", 0],
          ["fini...", 1],
        ]);
      }
      else {
        f_player_control_action_on();
      }
    },
  };
}

function f_script_player_house_1(){
  return {
    script_map: function(){
      if (v_player.map.orientation == "up" && v_player.map.y == 2 && v_player.map.x == 8) {
        f_script_map_transition_in_out("up", 1, 10, "down", "player_house");
      }
      else {
        return false;
      }

    },
    script_text: function(p_y, p_x){
      if (p_y == 2 && p_x == 5) {
        f_script_text([
          ["La TV est éteinte", 0],
          ["...", 1],
        ]);
      }
      else {
        f_player_control_action_on();
      }
    },
  };
}

function f_script_elm_lab(){
  return {
    script_map: function(){
      if (v_player.map.orientation == "down" && v_player.map.y == 12 && v_player.map.x == 5) {
        f_script_map_transition_out(6, 12, "down", "new_bark_town");
        f_music_transition("new_bark_town", true);
      }
      else if (v_player.map.orientation == "down" && v_player.map.y == 12 && v_player.map.x == 6) {
        f_script_map_transition_out(6, 12, "down", "new_bark_town");
        f_music_transition("new_bark_town", true);
      }
      else {
        return false;
      }
    },
    script_text: function(p_y, p_x){
      if (p_y == 4 && p_x == 10) {
        f_script_text([
          ["La poubelle est vide", 0],
          ["...", 1],
        ]);
      }
      else {
        f_player_control_action_on();
      }
    },
    script_item: function(){

    },
  };
}
