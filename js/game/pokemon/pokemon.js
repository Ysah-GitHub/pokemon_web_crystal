function f_pokemon_new(p_pokemon_number, p_level){
  // --- Temp Variables
  let v_temp_pokemon_model = f_pokemon_model()[p_pokemon_number];
  let v_temp_pokemon = {
    name: f_pokemon_name()[p_pokemon_number],
    nickname: null,
    type: v_temp_pokemon_model.type,
    number: p_pokemon_number,
    gender: f_pokemon_gender_new(p_pokemon_number),
    level: p_level,
    base_stats: v_temp_pokemon_model.stats,
    iv: f_pokemon_iv_new(),
    ev: f_pokemon_ev_new(),
    stats: null,
    hp: null,
  };

  // --- Pokemon Stats
  v_temp_pokemon.stats = f_pokemon_stats(v_temp_pokemon);
  v_temp_pokemon.hp = v_temp_pokemon.stats.hp;

  // ---
  return v_temp_pokemon;
}

function f_pokemon_stats(p_pokemon){
  return {
    hp: f_pokemon_stats_equation_hp(p_pokemon),
    attack: f_pokemon_stats_equation(p_pokemon, "attack"),
    defense: f_pokemon_stats_equation(p_pokemon, "defense"),
    sp_attack: f_pokemon_stats_equation(p_pokemon, "sp_attack"),
    sp_defense: f_pokemon_stats_equation(p_pokemon, "sp_defense"),
    speed: f_pokemon_stats_equation(p_pokemon, "speed"),
  };
}

function f_pokemon_stats_equation(p_pokemon, p_stats_name){
  return Math.floor(((((p_pokemon.base_stats[p_stats_name] + p_pokemon.iv[p_stats_name]) * 2 + (Math.sqrt(p_pokemon.ev[p_stats_name]) / 4)) * p_pokemon.level) / 100) + 5);
}

function f_pokemon_stats_equation_hp(p_pokemon){
  return Math.floor(((((p_pokemon.base_stats.hp + p_pokemon.iv.hp) * 2 + (Math.sqrt(p_pokemon.ev.hp) / 4)) * p_pokemon.level) / 100) + p_pokemon.level + 10);
}

function f_pokemon_gender_new(p_pokemon_number){
  // --- Temp Variables
  let v_temp_pokemon_gender_model = f_pokemon_model()[p_pokemon_number].gender;
  let v_temp_pokemon_gender_random_array = [];

  // --- Male
  for (let i = 0; i < v_temp_pokemon_gender_model[0]; i++) {
    v_temp_pokemon_gender_random_array.push("♂");
  }
  // --- Female
  for (let i = 0; i < v_temp_pokemon_gender_model[1]; i++) {
    v_temp_pokemon_gender_random_array.push("♀");
  }

  // --- Random Gender
  return v_temp_pokemon_gender_random_array[f_number_random(0, 99)];
}

function f_pokemon_iv_new(){
  return {
    hp: f_number_random(0, 15),
    attack: f_number_random(0, 15),
    defense: f_number_random(0, 15),
    sp_attack: f_number_random(0, 15),
    sp_defense: f_number_random(0, 15),
    speed: f_number_random(0, 15),
  };
}

function f_pokemon_ev_new(){
  return {
    hp: 0,
    attack: 0,
    defense: 0,
    sp_attack: 0,
    sp_defense: 0,
    speed: 0,
  };
}
