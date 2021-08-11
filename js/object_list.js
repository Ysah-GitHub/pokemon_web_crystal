var v_app = {
  version: "a.1.0",
  language: null,
  device: null,
  orientation: null,
  scale: [[null], [null]],
  position: [
    {top: null, left: null},
    {top: null, left: null},
  ],
  input: { // [[default], [custom], [function_keydown], [function_keyup]]
    a: [[], [], [], []],
    b: [[], [], [], []],
    up: [[], [], [], []],
    down: [[], [], [], []],
    left: [[], [], [], []],
    right: [[], [], [], []],
    start: [[], [], [], []],
    select: [[], [], [], []],
  },
  audio: { // Default values
    music: 25,
    sound: 20,
  },
  menu: {
    extend: false,
    active: null,
  },
};

var v_player = {
  name: null,
  map: {
    name: null,
    y: 0,
    x: 0,
    orientation: null,
    music: null,
  },
  animation: {
    timeout: null,
    switch: false,
  },
  control: {
    timeout: null,
    next: null,
  },
  team: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  },
};

var v_map = {
  name: null,
  y: null,
  x: null,
  length: 0,
  script_map: null,
  script_text: null,
  block: null,
  block_temp: null,
  flower: null,
  water: null,
}

var v_textbox = {
  script: [],
  speed: 50,
  speed_default: 50,
  speed_custom: 10,
  control_timeout: null,
  key: null,
};

var v_response_box = {
  select: null,
  function: null,
};

var v_animation = {
  flower: {
    interval: null,
    number: 0,
  },
  water: {
    interval: null,
    number: 0,
  },
};

var v_audio = {
  music: {
    loop_timeout: null,
    loop_interval: null,
  },
  sound: {},
};
