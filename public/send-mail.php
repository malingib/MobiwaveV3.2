<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get the JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$required_fields = ['firstName', 'lastName', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Field '$field' is required"]);
        exit();
    }
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Email configuration
$smtp_host = 'smtp.mobiwave.co.ke';
$smtp_port = 587;
$smtp_user = 'jawabune@mobiwave.co.ke';
$smtp_password = 'vW9nX6YN8MZFexM29muU';
$from_email = 'jawabune@mobiwave.co.ke';
$to_email = 'jawabune@mobiwave.co.ke';

// Prepare email content
$subject = 'New Contact Form: ' . $data['subject'];
$name = $data['firstName'] . ' ' . $data['lastName'];
$phone = isset($data['phone']) ? $data['phone'] : 'Not provided';
$inquiry = isset($data['inquiry']) ? $data['inquiry'] : 'general';

// Create HTML email content
$html_content = "
<h3>New Inquiry from {$name}</h3>
<table style='width: 100%; border-collapse: collapse;'>
    <tr>
        <th style='text-align: left; padding: 8px; border-bottom: 1px solid #ddd;'>Field</th>
        <th style='text-align: left; padding: 8px; border-bottom: 1px solid #ddd;'>Details</th>
    </tr>
    <tr>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Name:</strong></td>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'>{$name}</td>
    </tr>
    <tr>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Email:</strong></td>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'>{$data['email']}</td>
    </tr>
    <tr>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Phone:</strong></td>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'>{$phone}</td>
    </tr>
    <tr>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Inquiry Type:</strong></td>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'>{$inquiry}</td>
    </tr>
    <tr>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Subject:</strong></td>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'>{$data['subject']}</td>
    </tr>
    <tr>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'><strong>Message:</strong></td>
        <td style='padding: 8px; border-bottom: 1px solid #ddd;'>" . nl2br(htmlspecialchars($data['message'])) . "</td>
    </tr>
</table>
";

// Create plain text version
$text_content = "New Inquiry from {$name}\n\n";
$text_content .= "Name: {$name}\n";
$text_content .= "Email: {$data['email']}\n";
$text_content .= "Phone: {$phone}\n";
$text_content .= "Inquiry Type: {$inquiry}\n";
$text_content .= "Subject: {$data['subject']}\n";
$text_content .= "Message: {$data['message']}\n";

// Try to send email using PHP's mail function first
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: {$from_email}\r\n";
$headers .= "Reply-To: {$data['email']}\r\n";
$headers .= "X-Priority: 1\r\n";

if (mail($to_email, $subject, $html_content, $headers)) {
    echo json_encode([
        'success' => true, 
        'message' => 'Email sent successfully!',
        'details' => [
            'recipient' => $to_email,
            'method' => 'PHP mail()'
        ]
    ]);
} else {
    // If mail() fails, try using SMTP (requires additional setup)
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send email. Please try again later or contact support.',
        'error' => 'SMTP configuration may be required'
    ]);
}
?>