<!DOCTYPE html>
<html>
<head>
    <title>Multiplication Table</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $size = $_POST["size"];

        if (is_numeric($size)) {
            $size = intval($size);

            if ($size > 0) {
                echo "<h3>Multiplication Table (of $size)</h3>";
                echo "<table border='1'>";

                echo "<tr><th>&times;</th>";
                for ($col = 1; $col <= $size; $col++) {
                    echo "<th>$col</th>";
                }
                echo "</tr>";

                for ($row = 1; $row <= $size; $row++) {
                    echo "<tr><th>$row</th>";
                    for ($col = 1; $col <= $size; $col++) {
                        echo "<td>" . ($row * $col) . "</td>";
                    }
                    echo "</tr>";
                }

                echo "</table>";
            } else {
                echo "<p>Please enter a positive number.</p>";
            }
        } else {
            echo "<p>Please enter a valid number.</p>";
        }
    }
    ?>

    <br>
</body>
</html>