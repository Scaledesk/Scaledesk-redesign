<?php
/* echo json_encode("no");*/

if(isset($_POST['email'])) 
{
  


$email=$_POST['email'];

$phone=$_POST['phone'];
$name=$_POST['name'];
$text=$_POST['text'];

/*echo  $email;echo $phone; echo$name;echo $text;
*/


$emailadmin="sanchit2411@gmail.com";

$subject = "Contact Us";
$Usersubject="Thank you for contact  us";
$message ='<html>
<body>
<div id="abcd" style="text-align:justify;font-size:18px;"> Name:-'.$name.'<br> Email:-'.$email.'<br>Phone:-'.$phone.
  'Message:-'.$text.'</div>


</body>
</html>';

   
           

            
$messageUsers=file_get_contents('template.html');
$headers = "MIME-Version: 1.0" . "\r\n";
$headers = "From:hi@scaledesk.com\r\n";
$headers = "Content-type: text/html;charset=iso-8859-1" . "\r\n";

      if(mail($emailadmin,$subject,$message,$headers))

 {
         
           if(mail($email,$Usersubject,$messageUsers,$headers)){

    
      
           header("location: thankyou.html");

             } 

          else{
      	
	    
           header("location: thankyou.html");

                 }
       

       
  }

       else{
      			
	     /* header("location: index.php?msg=Some  error Occurred");*/
        header("location: landingpage.html");

         }
      


}

else{
     /* echo json_encode("singh");*/
    header("location: landingpage.html");
	/*header("location: index.php");*/
}


?>
