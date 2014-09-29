<?php
function scramble($data) {
	$data = stripslashes($data); 
	$data = ereg_replace('"','&quot;', $data);
	$data = ereg_replace("'","׳™", $data);
	return $data;
} 


$Name = $_POST['name'];
$Email = $_POST['email'];
$Phone = $_POST['tel'];
$City = $_POST['city'];
$Remarks = $_POST['details'];

$msg=<<<EOT
<html dir="rtl">
<head>
<title>Contact by site: homeandaway.co.il</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
<table border="0" cellspacing="0" cellpadding="8" dir="rtl">
  <tr align="center">
    <td colspan="2">הודעה מהאתר homeandaway</td>
  </tr>
  <tr>
    <td> <b>שם :</b> </td>
    <td>$Name&nbsp;</td>
  </tr>
    <tr>
    <td> <b>אימייל :</b> </td>
    <td>$Email&nbsp;</td>
  </tr>
  <tr>
    <td> <b>טלפון :</b> </td>
    <td>$Phone&nbsp;</td>
  </tr>
    <tr>
    <td> <b>עיר :</b> </td>
    <td>$City&nbsp;</td>
  </tr>
  <tr>
    <td> <b>פרטים :</b> </td>
    <td>$Remarks&nbsp;</td>
  </tr>
</table>
</body>
</html>
EOT;

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: contact@homeandaway.co.il\r\n";



if(mail('neta.bachrach@gmail.com','New Message from site - homeandaway.co.il', $msg, $headers)){		
echo '1';
} else {
echo '0';
}

?>

