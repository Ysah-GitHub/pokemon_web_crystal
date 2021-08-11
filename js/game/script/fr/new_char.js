function f_script_new_char(){
  return [
    ["....................", 0],
    ["....................", 1],
    ["Zzz...Hm? Quoi...?", 0],
    ["Tu m'as réveillé!", 1],
    ["Mais quelle heure", 0],
    ["est t-il?", 1],
    ["", 0, function before(){
      this[0] = f_get_hours_and_minutes() + "!";
    }],
    ["J'suis en retard!", 1],
    ["Bonjour!", 0, function before(){
      f_music_add("road_30", true);
      f_animation_opacity_on(document.getElementById("game_new_sprite_oak"), 1);
    }],
    ["Désolé de l'attente!", 1],
    ["Bienvenue dans le", 0],
    ["monde de Pokémon!", 1],
    ["Mon nom est Chen", 0],
    ["Mais on m'appelle", 1],
    ["le Prof.Pokémon.", 1],
    ["Ce monde est peuplé", 0, function before(){
      f_animation_opacity_off(document.getElementById("game_new_sprite_oak"), 0.25);
      setTimeout(f_animation_opacity_on, 300, document.getElementById("game_new_sprite_pokemon"), 0.5);
    }],
    ["de créatures", 1],
    ["appelées Pokémon.", 1],
    ["Humains et Pokémon", 0],
    ["vivent en parfaite", 1],
    ["harmonie...", 1],
    ["Certains jouent", 0],
    ["avec les Pokémon,", 1],
    ["d'autres font des", 1],
    ["combats avec eux.", 1],
    ["Mais il reste", 0, function before(){
      f_animation_opacity_off(document.getElementById("game_new_sprite_pokemon"), 0.25);
      setTimeout(f_animation_opacity_on, 300, document.getElementById("game_new_sprite_oak"), 0.5);
    }],
    ["beaucoup à apprendre", 1],
    ["sur nos amis", 1],
    ["les Pokémon", 1],
    ["De nombreux mystères", 0],
    ["planent à leur sujet.", 1],
    ["Et c'est pourquoi", 0],
    ["j'étudie les Pokémon", 1],
    ["tous les jours.", 1],
    ["Heu...", 0],
    ["C'est quoi ton nom?", 1, function after(){
      document.getElementById("textbox").removeEventListener("click", f_textbox_text);
      f_control_keydown_function_remove("a", "f_textbox_text");
      document.getElementById("game_new_player_name").style.display = "block";
      document.getElementById("game_new_player_name_validation").style.display = "block";
      f_animation_opacity_on(document.getElementById("game_new_player_name"), 0.25);
      f_animation_opacity_on(document.getElementById("game_new_player_name_validation"), 0.25);
    }],
    ["...", 0, function after(){
      document.getElementById("textbox").removeEventListener("click", f_textbox_text);
      f_control_keydown_function_remove("a", "f_textbox_text");
      document.getElementById("game_new_player_name").style.display = "none";
      document.getElementById("game_new_player_name_validation").style.display = "none";
      document.getElementById("game_new_sprite_oak").style.display = "none";
      f_animation_opacity_on(document.getElementById("game_new_pokemon_1"), 0.25);
      f_animation_opacity_on(document.getElementById("game_new_pokemon_2"), 0.25);
      f_animation_opacity_on(document.getElementById("game_new_pokemon_3"), 0.25);
    }],
    ["", 0, function before(){
      document.getElementById("game_new_sprite_oak").style.display = "block";
      this[0] = v_player.name;
    }],
    ["ta quête est sur le", 1],
    ["point de commencer.", 1],
    ["Joies et périls", 0],
    ["paveront ta route...", 1],
    ["Un monde de rêve,", 0],
    ["de dangers et de", 1],
    ["Pokémon t'attend!", 1],
    ["En avant!", 1],
    ["...", 0],
    ["A plus tard!", 1, function after(){
      document.getElementById("textbox").removeEventListener("click", f_textbox_text);
      f_control_keydown_function_remove("a", "f_textbox_text");
      f_player_new();
      setTimeout(function(){
        f_textbox_close();
        f_game_load();
      }, 500);
    }],
  ];
}
