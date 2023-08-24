<?php
function PalabraMasLarga($cadena){
    $palabra = explode('', $cadena);
    $palabraMasLArga = '';

    foreach ( $palabras as $palabra){
        if (strlen($palabra) > strlen($palabraMasLArga)){
            $palabraMasLArga = $palabra;
        }
    }

    return $palabraMasLArga;
}
?>

