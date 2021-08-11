function f_script_road_29(){
  return {
    script_map: function(){
      if (v_player.map.orientation == "right" && v_player.map.y == 13 && v_player.map.x == 60) {
        f_script_map_transition(11, 6, "right", "new_bark_town");
        f_music_transition("new_bark_town", true);
      }
      else if (v_player.map.orientation == "right" && v_player.map.y == 14 && v_player.map.x == 60) {
        f_script_map_transition(12, 6, "right", "new_bark_town");
        f_music_transition("new_bark_town", true);
      }
      else {
        return false;
      }
    },
    script_text: function(p_y, p_x){
      f_player_control_action_on();
    },
    script_pokemon_grass: function(){
      return [
        [35, 0, 2, 5],
        [35, 3, 2, 5],
        [30, 6, 2, 5],
      ];
    },
  };
}
