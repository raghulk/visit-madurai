<?php
	$safeName = '/^[A-Za-z ]+$/';
	$safeComment = '/^[A-Za-z\d \'",.!?()#]+$/';

	function test_input($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  $data = filter_var($data, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	  return $data;
	}
	
	$name  = test_input($_POST['name']);

       if (preg_match($safeName, $visitor) && !empty($name)){
//          echo "<p>GOOD</p>";
       }
       else {
//          echo "<p>Bad data</p>";
          $name = "Empty";
       }

   if (!empty($_POST['group'])) {
       $group = test_input($_POST['group']);
   }
   else{
       $group = 0;
   }

    if (!empty($_POST['dateVisited'])) {
        $dateVisited = test_input($_POST['dateVisited']);
    }
    else
        $dateVisited = "Date Was not selected on the form";

   if (!empty($_POST['fav_visited'])){
     $fav_visited = test_input($_POST['fav_visited']);
   }
   else {
     $fav_visited = "EMPTY please select place";
    }

	$rating   = test_input($_POST['rating']);
   
	$destination_email = "raghul.sathya@gmail.com";

	$email_subject = "Madurai - visitor";
        $email_body = "Visitor name  $name\n";
        $email_body .= "Group Size $group\n";
        $email_body .= "Date Visited=$dateVisited\n";
        $email_body .= "Favorite Place $fav_visited\n";
        $email_body .= "Rating -> $rating\n";
    mail($destination_email, $email_subject, $email_body);
	

//echo "Data Sent";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
    <link href="assets/css/styles.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>
        Survey &bull; Madurai 
    </title>
    <meta charset="utf-8" />
</head>
	<body>
    <script type="text/javascript" src="assets/js/script.js"></script>
        <header>
        <div class="topnav" id="myTopnav">
            <a href="survey.html" class="active">Survey</a>
            <a href="shopping.html">Shopping</a>
            <a href="food.html">Food</a>
            <a href="cultural_fests.html">Cultural Fests</a>
            <a href="places.html">Places</a>
            <a href="history.html">History</a>
            <a href="index.html">Home</a>
            <a href="index.html" class="logo-link"><img src="assets/images/Madurai_logo_small.jpg" class="logo" alt="madurai_logo" title="Madurai_logo"></a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        </header>
        <div class="main">
            <h1>Response Recorded</h1>
            <p>Thank you so much for taking the time out of your day to complete our short survey. We appreciate it so much, as your feedback will directly help us to keep track of why visitors come to our beautiful city of Madurai.
            </p>
            <p>If u want to learn more about the history of Madurai,<a href="history.html">Click Here.</a></p>
            <p>If you want to know more about the festivals of Madurai,<a href="cultural_fests.html">Click Here.</a></p>
        </div>
        <footer>
            <div class="footer-container">
                <div class="links">
                    <a href="contact.html">Contact</a>
                    <a href="reference.html">Reference</a>
                    <a href="rubric.html">Rubric</a>   
                </div>
                <div class="footer-info">
                    Raghul Krishnan Copyright &copy; 2019, Madurai
                </div>
            </div>
        </footer>
</body>
<html>

