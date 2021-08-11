function f_pokemon_model(){
  return [
    { // #001
      name: f_pokemon_name()[0],
      number: 0,
      type: ["grass", "poison"],
      evolution: [16, 1],
      gender: [85, 15],
      catch_rate: 45,
      base_exp: 65,
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        sp_attack: 65,
        sp_defense: 65,
        speed: 45,
      },
      moves_level: {
        1: ["tackle"],
        4: ["growl"],
        7: ["leech_seed"],
        10: ["vine_whip"],
      },
      moves_learn: {

      },
    },
    { // #002
      name: f_pokemon_name()[1],
      number: 1,
      type: ["grass", "poison"],
      evolution: [32, 2],
      gender: [85, 15],
      catch_rate: 45,
      base_exp: 142,
      stats: {
        hp: 60,
        attack: 62,
        defense: 63,
        sp_attack: 80,
        sp_defense: 80,
        speed: 60,
      },
      moves_level: {

      },
      moves_learn: {

      },
    },
    { // #003
      name: f_pokemon_name()[2],
      number: 2,
      type: ["grass", "poison"],
      evolution: null,
      gender: [85, 15],
      catch_rate: 45,
      base_exp: 236,
      stats: {
        hp: 80,
        attack: 82,
        defense: 83,
        sp_attack: 100,
        sp_defense: 100,
        speed: 80,
      },
      moves_level: {

      },
      moves_learn: {

      },
    },
    { // #004
      name: f_pokemon_name()[3],
      number: 3,
      type: ["fire"],
      evolution: [16, 4],
      gender: [85, 15],
      catch_rate: 45,
      base_exp: 62,
      stats: {
        hp: 39,
        attack: 52,
        defense: 43,
        sp_attack: 60,
        sp_defense: 50,
        speed: 65,
      },
      moves_level: {
        1: ["growl", "scratch"],
        7: ["ember"],
      },
      moves_learn: {

      },
    },
    { // #005
      name: f_pokemon_name()[4],
      number: 4,
      type: ["fire"],
      evolution: [36, 4],
      gender: [85, 15],
      catch_rate: 45,
      base_exp: 142,
      stats: {
        hp: 58,
        attack: 64,
        defense: 58,
        sp_attack: 80,
        sp_defense: 65,
        speed: 80,
      },
      moves_level: {

      },
      moves_learn: {

      },
    },
    { // #006
      name: f_pokemon_name()[5],
      number: 5,
      type: ["fire", "flying"],
      evolution: null,
      gender: [85, 15],
      catch_rate: 45,
      base_exp: 240,
      stats: {
        hp: 78,
        attack: 84,
        defense: 78,
        sp_attack: 109,
        sp_defense: 85,
        speed: 100,
      },
      moves_level: {

      },
      moves_learn: {

      },
    },
    { // #007
      name: f_pokemon_name()[6],
      number: 6,
      type: ["water"],
      evolution: [16, 7],
      gender: [85, 15],
      catch_rate: 45,
      base_exp: 63,
      stats: {
        hp: 44,
        attack: 48,
        defense: 65,
        sp_attack: 50,
        sp_defense: 64,
        speed: 43,
      },
      moves_level: {
        1: ["tackle"],
        4: ["tail_whip"],
        7: ["bubble"],
      },
      moves_learn: {

      },
    },
    { // #008
      name: f_pokemon_name()[7],
      number: 7,
      type: ["water"],
      evolution: [36, 8],
      gender: [85, 15],
      catch_rate: 45,
      base_exp: 142,
      stats: {
        hp: 59,
        attack: 63,
        defense: 80,
        sp_attack: 65,
        sp_defense: 80,
        speed: 58,
      },
      moves_level: {

      },
      moves_learn: {

      },
    },
    { // #009
      name: f_pokemon_name()[8],
      number: 8,
      type: ["water"],
      evolution: null,
      gender: [85, 15],
      catch_rate: 45,
      base_exp: 239,
      stats: {
        hp: 79,
        attack: 83,
        defense: 100,
        sp_attack: 85,
        sp_defense: 105,
        speed: 78,
      },
      moves_level: {

      },
      moves_learn: {

      },
    },
  ];
}
