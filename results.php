<?php
function results($query, string $x){
    include 'conn.php';
    $izlaz='';

    $result = $conn->query($query);

    $hint = '';
    if ($result->num_rows > 0) {
        // output data of each row
        $hint = '<ul id="search-ul">';
        while($row = $result->fetch_assoc()) {
            $hint = $hint . '<li class="search-li px-3 py-1">' .$row[$x]. "</li>";
        }
        $izlaz = $hint . '</ul>';
        //$izlaz = 'ima rezultata';
    }
    else{
        $izlaz = 'nema rezultata';
    }
    echo $izlaz;
    $conn->close();
}
?>