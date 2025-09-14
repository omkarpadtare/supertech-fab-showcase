<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $company = htmlspecialchars($_POST['company']);
    $enquiryType = htmlspecialchars($_POST['enquiryType']);
    $productInterest = htmlspecialchars($_POST['productInterest']);
    $projectDetails = htmlspecialchars($_POST['projectDetails']);
    $message = htmlspecialchars($_POST['message']);

    // Replace with your Hostinger email
    $to = "support@supertechfabrication.com";  

    $subject = "New Contact Enquiry - $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Enquiry Type:</strong> $enquiryType</p>
        <p><strong>Product Interest:</strong> $productInterest</p>
        <p><strong>Project Details:</strong> $projectDetails</p>
        <p><strong>Message:</strong> $message</p>
    ";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send message"]);
    }
}
?>
