<?php
require 'results.php';

if($_REQUEST["odabir"] == 'true' and !empty($_REQUEST["title"])){
   $t = $_REQUEST["title"];
    if(!empty($_REQUEST["artist"])){
        $q = $_REQUEST["artist"];
        $sql = "SELECT DISTINCT title FROM pjesme WHERE lower(artist) LIKE lower('".$q."%') and lower(title) LIKE lower('".$t."%');";
    }else{
        $q = $_REQUEST["title"];
        $sql = "SELECT DISTINCT title FROM pjesme WHERE lower(title) LIKE lower('".$q."%');";
    }
    results($sql,'title');
}

if($_REQUEST["odabir"] == 'false' and !empty($_REQUEST["artist"])){
   $a = $_REQUEST["artist"];
    if(!empty($_REQUEST["title"])){
        $q = $_REQUEST["title"];
        $sql = "SELECT DISTINCT artist FROM pjesme WHERE lower(title) LIKE lower('".$q."%') and lower(artist) LIKE lower('".$a."%');";       
    }else{
        $q = $_REQUEST["artist"];
        $sql = "SELECT DISTINCT artist FROM pjesme WHERE lower(artist) LIKE lower('".$q."%');"; 
    }
    results($sql,'artist');
}
?> 
