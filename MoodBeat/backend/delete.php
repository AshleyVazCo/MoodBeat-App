<?php
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the ID sent from the frontend to identify the record to delete
    $id = $_POST["id"];

    // Database connection parameters
    $hostname = "127.0.0.1";
    $username = "zNJ0xGujle";
    $password = "RrVz8JeG2y";
    $databse = "dbzNJ0xGujle";

    // Create connection
    $conn = new mysqli($hostname, $username, $password, $database);
    echo "Connected successfully";
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind the SQL statement to delete the record
    $stmt = $conn->prepare("DELETE FROM users WHERE id=?");
    $stmt->bind_param("i", $id); // Assuming id is an integer

    // Execute the SQL statement
    if ($stmt->execute() === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
