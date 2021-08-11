function f_music(){
  // --- Temp Variables
  let v_temp_music;

  // --- Music
  v_temp_music = document.createElement("div");
  v_temp_music.id = "music";
  document.getElementById("game").append(v_temp_music);
}

function f_music_add(p_name, p_loop){
  // --- Temp Variables
  let v_temp_audio = document.createElement("audio");

  // --- Loop
  if (p_loop) {
    f_music_loop_add(p_name, v_temp_audio);
  }
  else {
    v_temp_audio.onended = f_music_remove;
  }

  // --- Music
  v_temp_audio.src = "rsc/music/" + p_name + ".mp3";
  v_temp_audio.volume = 0;
  document.getElementById("music").append(v_temp_audio);

  // --- Play Sound
  v_temp_audio.play();
  f_music_volume_up();
}

function f_music_remove(){
  this.remove();
}

function f_music_remove_all(){
  // --- Temp Variables
  let v_temp_music_length = document.getElementById("music").children.length;

  // --- Remove All Music
  for (var i = 0; i < v_temp_music_length; i++) {
    document.getElementById("music").children[i].remove();
  }
}

function f_music_stop(){
  // --- Remove All Music
  clearTimeout(v_audio.music.loop_timeout);
  clearInterval(v_audio.music.loop_interval);

  // ---
  f_music_volume_down();

  // ---
  setTimeout(f_music_remove_all, 1000); // 1000ms for all music volume = 0
}

function f_music_loop_add(p_name, p_music){
  // --- OnPlay
  p_music.onplay = function(){
    // -- Timeout
    v_audio.music.loop_timeout = setTimeout(function(){
      p_music.currentTime = f_music_list()[p_name].loop;
      // - Interval
      v_audio.music.loop_interval = setInterval(function(){
        p_music.currentTime = f_music_list()[p_name].loop;
      }, (f_music_list()[p_name].duration - f_music_list()[p_name].loop) * 1000);
    }, f_music_list()[p_name].duration * 1000);
  };
}

function f_music_volume_up(p_volume){
  // --- Temp Variables
  let v_temp_volume = p_volume != null ? p_volume : 0;

  // --- Update Variables
  if (v_temp_volume < v_app.audio.music / 100) {
    v_temp_volume += (v_app.audio.music / 1000);
    setTimeout(f_music_volume_up, 100, v_temp_volume);
  }
  else {
    v_temp_volume = v_app.audio.music / 100;
  }

  // --- Up Volume
  f_music_volume_update(v_temp_volume);
}

function f_music_volume_down(p_volume){
  // --- Temp Variables
  let v_temp_volume = p_volume != null ? p_volume : v_app.audio.music / 100;

  // --- Update Variables
  if (v_temp_volume > v_app.audio.music / 1000) {
    v_temp_volume -= (v_app.audio.music / 1000);
    setTimeout(f_music_volume_down, 100, v_temp_volume);
  }
  else {
    v_temp_volume = 0;
  }

  // --- Down Volume
  f_music_volume_update(v_temp_volume);
}

function f_music_volume_update(p_volume){
  // --- Temp Variables
  let v_temp_music_length = document.getElementById("music").children.length;
  let v_temp_volume = p_volume != null ? p_volume : (v_app.audio.music / 100);

  // --- Update Music Volume
  for (var i = 0; i < v_temp_music_length; i++) {
    document.getElementById("music").children[i].volume = v_temp_volume;
  }
}

function f_music_transition(p_name, p_loop, p_time){
  // --- Stop and Remove All Music
  f_music_stop();

  // --- Update Variables
  v_player.map.music = p_name;

  // --- Add New Music
  setTimeout(f_music_add, 1000, p_name, p_loop, p_time);
}

function f_music_list(){
  return {
    title_screen: {
      loop: 0,
      duration: 72.4,
    },
    new_bark_town: {
      loop: 0,
      duration: 37.5,
    },
    elm_lab: {
      loop: 6.4,
      duration: 38.3,
    },
    road_29: {
      loop: 0,
      duration: 30.9,
    },
    road_30: {
      loop: 0,
      duration: 33.3,
    },
  };
}

function f_sound(){
  // --- Temp Variables
  let v_temp_sound;

  // --- Music
  v_temp_sound = document.createElement("div");
  v_temp_sound.id = "sound";
  document.getElementById("game").append(v_temp_sound);
}

function f_sound_add(p_name){
  // --- Temp Variables
  let v_temp_audio = document.createElement("audio");

  // --- Sound
  v_temp_audio.src = "rsc/sound/" + p_name + ".mp3";
  v_temp_audio.volume = (v_app.audio.sound / 100);
  v_temp_audio.onended = f_sound_remove;
  document.getElementById("sound").append(v_temp_audio);

  // --- Play Sound
  v_temp_audio.play();
}

function f_sound_remove(){
  this.remove();
}
