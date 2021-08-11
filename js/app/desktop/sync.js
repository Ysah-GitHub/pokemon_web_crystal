function f_sync(){
  // --- Temp Variables
  let v_temp_element_1;
  let v_temp_element_2;
  let v_temp_element_3;

  // --- Sync
  v_temp_element_1 = document.createElement("div");
  v_temp_element_1.id = "sync";

  v_temp_element_2 = document.createElement("div");
  v_temp_element_2.id = "sync_window";

  v_temp_element_3 = document.createElement("img");
  v_temp_element_3.src = "rsc/icon/close.png";
  v_temp_element_3.onclick = f_sync_close;
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_3 = document.createElement("span");
  v_temp_element_3.id = "sync_message";
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_3 = document.createElement("input");
  v_temp_element_3.id = "sync_username";
  v_temp_element_3.type = "text";
  v_temp_element_3.placeholder = "UserName";
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_3 = document.createElement("input");
  v_temp_element_3.id = "sync_password";
  v_temp_element_3.type = "text";
  v_temp_element_3.placeholder = "Password";
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_3 = document.createElement("input");
  v_temp_element_3.id = "sync_validation";
  v_temp_element_3.type = "button";
  v_temp_element_2.append(v_temp_element_3);

  v_temp_element_1.append(v_temp_element_2);

  document.body.prepend(v_temp_element_1);
}

function f_sync_close(){
  document.getElementById("sync").remove();
}

function f_sync_close_load(){
  document.getElementById("title_menu").children[1].removeAttribute("style");
  document.getElementById("title_menu").children[1].onclick = f_game_load;
  f_title_select(1);
  v_app.input["up"][2].push(f_title_select_up);
  v_app.input["down"][2].push(f_title_select_down);
  f_sync_close();
}

function f_sync_save(){
  f_sync();
  document.getElementById("sync_validation").value = "SYNC";
  document.getElementById("sync_validation").onclick = f_sync_save_ajax;
}

function f_sync_delete(){
  f_sync();
  document.getElementById("sync_validation").value = "DELETE";
  document.getElementById("sync_validation").onclick = f_sync_delete_ajax;
}

function f_sync_load(){
  v_app.input["up"][2] = [];
  v_app.input["down"][2] = [];
  v_app.input["a"][2] = [];
  f_sync();
  document.getElementById("sync_validation").value = "Load";
  document.getElementById("sync_validation").onclick = f_sync_load_ajax;
  document.getElementById("sync_window").children[0].onclick = f_sync_close_load;
}

function f_sync_save_ajax(){
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "../../../PHP/save.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("sync_message").textContent = "";
      setTimeout(function(){
        document.getElementById("sync_message").textContent = xhr.responseText;
      }, 200);
    }
  }
  xhr.send(
    "name=" + document.getElementById("sync_username").value +
    "&" +
    "password=" + document.getElementById("sync_password").value +
    "&" +
    "save=" + f_player_sync()
  );
}

function f_sync_delete_ajax(){
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "../../../PHP/delete.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("sync_message").textContent = "";
      setTimeout(function(){
        document.getElementById("sync_message").textContent = xhr.responseText;
      }, 200);
    }
  }
  xhr.send(
    "name=" + document.getElementById("sync_username").value +
    "&" +
    "password=" + document.getElementById("sync_password").value
  );
}

function f_sync_load_ajax(){
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "../../../PHP/load.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
      let v_temp_data = xhr.responseText.split("&");
      document.getElementById("sync_message").textContent = "";
      if (v_temp_data[1] != null) {
        let v_temp_player;

        v_temp_player = JSON.parse(v_temp_data[1]);
        v_player.name = v_temp_player.name;
        v_player.map = v_temp_player.map;
        v_player.team = v_temp_player.team;
      }
      setTimeout(function(){
        document.getElementById("sync_message").textContent = v_temp_data[0];
      }, 200);
    }
  }
  xhr.send(
    "name=" + document.getElementById("sync_username").value +
    "&" +
    "password=" + document.getElementById("sync_password").value
  );
}
