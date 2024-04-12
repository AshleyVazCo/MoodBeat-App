<?php

// MySQL connection configuration
$hostname = "127.0.0.1";
$username = "zNJ0xGujle";
$password = "RrVz8JeG2y";
$database = "dbzNJ0xGujle";


// Create connection
$conn = new mysqli($hostname, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
echo $_GET['q'];

// Check if the search text is provided in the query parameters
if(isset($_GET['q'])) {
  $searchText = $_GET['q'];

// Define search terms and corresponding page URLs
$searchTermsToPages = array(
  'motivation' => '/motivation-page',
  'relaxation' => '/relaxation-page'
  // Add more search terms and corresponding page URLs as needed
);

// Check if the search text matches any predefined terms
if (array_key_exists($searchText, $searchTermsToPages)) {
  // Get the corresponding page URL
  $redirectUrl = $searchTermsToPages[$searchText];
  
  // Perform the redirect
  header("Location: $redirectUrl");
  exit; // Stop further execution
}else{
  // Perform SQL query to search for text
  $sql = "SELECT * FROM users WHERE username LIKE '%$searchText%'";

  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
      echo "ID: " . $row["ID"]. " - Title: " . $row["post_title"]. " " . $row["post_content"]. "<br>";
    }
  } else {
    echo "0 results";
  }
} 
}  
// Close connection
$conn->close();

?>
