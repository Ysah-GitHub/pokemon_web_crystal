<?php

  // --- Verify if POST exist and not null
  switch (true) {
    case !isset($_POST["name"]) && !isset($_POST["password"]) || $_POST["name"] == null && $_POST["password"] == null:
      echo "Veuillez entrer un pseudonyme et un mot de passe"; return;
    case !isset($_POST["name"]) || $_POST["name"] == null:
      echo "Veuillez entrer un pseudonyme"; return;
    case !isset($_POST["password"]) || $_POST["password"] == null:
      echo "Veuillez entrer un mot de passe"; return;
  }

  // --- Variables
  $name = htmlspecialchars($_POST["name"]);
  $password = $_POST["password"];

  // --- Verify if $name or $password contain space
  switch (true) {
    case strpos($name, " ") != null && strpos($password, " ") != null:
      echo "Veuillez entrer un pseudonyme et un mot de passe sans espace"; return;
    case strpos($name, " ") != null:
      echo "Veuillez entrer un pseudonyme sans espace"; return;
    case strpos($password, " ") != null:
      echo "Veuillez entrer un mot de passe sans espace"; return;
  }

  // --- Verify $name and $password
  switch (true) {
    case $password == $name:
      echo "Le mot de passe ne peut pas être identique au pseudonyme"; return;
    case strlen($name) > 12:
      echo "Le pseudonyme doit être composé de 12 caractères maximum"; return;
    case strlen($password) < 7:
      echo "Le mot de passe doit être composé d'au moins 7 caractères"; return;
    case strlen($password) > 20:
      echo "Le mot de passe doit être composé de 20 caractères maximum"; return;
  }

  // --- Database Connection
  try { $bdd = new PDO('mysql:host=localhost;dbname=pokemon_web_crystal','root','root'); }
  catch (Exeption $e) { die('Erreur : ' . $e->getMessage()); }

  $req = $bdd->prepare("SELECT name, password FROM user WHERE name = :name");
  $req->execute(array('name' => $name));
  if ($req->rowCount() == 1) {
    $password_hashed = $req->fetch()["password"];
    if (password_verify($password, $password_hashed)) {
      $req = $bdd->prepare("DELETE FROM user WHERE name = :name");
      $req->execute(array('name' => $name));
      echo "Suppresion réussi"; return;
    }
    else {
      echo "Le mot de passe est incorrect"; return;
    }
  }
  else {
    echo "Le compte n'existe pas"; return;
  }
