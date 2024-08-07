<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $subscribe = isset($_POST['subscribe']) ? 'Yes' : 'No';
    $gender = isset($_POST['gender']) ? htmlspecialchars($_POST['gender']) : 'Not specified';
    $country = htmlspecialchars($_POST['country']);
    $message = htmlspecialchars($_POST['message']);

    // Handle file upload
    if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
        $fileName = htmlspecialchars(basename($_FILES["file"]["name"]));
        $fileTmpName = $_FILES["file"]["tmp_name"];
        $uploadDir = "uploads/";
        $uploadFile = $uploadDir . $fileName;

        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        if (move_uploaded_file($fileTmpName, $uploadFile)) {
            $fileUploadStatus = "File uploaded successfully: " . $fileName;
        } else {
            $fileUploadStatus = "Error uploading file.";
        }
    } else {
        $fileUploadStatus = "No file uploaded.";
    }

    // Display submitted data
    echo "<h2>Form Submitted Successfully!</h2>";
    echo "<p>Username: $username</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Password: $password</p>";
    echo "<p>Subscribe: $subscribe</p>";
    echo "<p>Gender: $gender</p>";
    echo "<p>Country: $country</p>";
    echo "<p>Message: $message</p>";
    echo "<p>$fileUploadStatus</p>";
} else {
    echo "<h2>Invalid Request</h2>";
}
?>
