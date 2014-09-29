function contact(){
var qname = $('#qname').val();
var qmail = $('#qmail').val();
if(qname=='שם'||qname=='undefined'||qname=='Name'){qname='';}
if(qmail=='דוא"ל'||qmail=='undefined'||qmail=='Email'){qmail='';}

window.location.href = "contact.html?qname="+qname+"&qmail="+qmail;
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return '';
} 

function checkEmail(email) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
		return (true);
	}
	return (false);
}

function sendMe(){
$('.rred').replaceWith('');
$('#fid').html('');
var name = $('#name').val();
var email = $('#email').val();
var tel = $('#tel').val();
var city = $('#city').val();
var details = $('#details').val();

if(email==''||name==''){
if(name==''){$('#name').after('<span class="rred">שדה חובה</span>');}
if(email==''){$('#email').after('<span class="rred">שדה חובה</span>');}
$('#name,#email').change(function(){$('.rred').replaceWith('');})
return;
}
if (checkEmail(email)){
	$.post('sendemil.php',{name:name,email:email,tel:tel,city:city,details:details},function(flag){
	if(flag!='0'){
	$('#fid').html('ההודעה נשלחה בהצלחה!').fadeIn();
	$('#inputs input,textarea').val('');
	} else {
	$('#fid').html('תקלה בשליחה').fadeIn();
	}
	});
} else {
$('#email').after('<span class="rred">נא להכניס אימייל תקין</span>');
return;
}
}




function sendMeEn(){
$('.rred').replaceWith('');
$('#fid').html('');
var name = $('#name').val();
var email = $('#email').val();
var tel = $('#tel').val();
var city = $('#city').val();
var details = $('#details').val();

if(email==''||name==''){
if(name==''){$('#name').after('<span class="rred">Required</span>');}
if(email==''){$('#email').after('<span class="rred">Required</span>');}
$('#name,#email').change(function(){$('.rred').replaceWith('');})
return;
}
if (checkEmail(email)){
	$.post('../sendemil.php',{name:name,email:email,tel:tel,city:city,details:details},function(flag){
	if(flag!='0'){
	$('#fid').html('Message successfuly sent!').fadeIn();
	$('#inputs input,textarea').val('');
	} else {
	$('#fid').html('Error sending.').fadeIn();
	}
	});
} else {
$('#email').after('<span class="rred">Please enter a valid Email</span>');
return;
}
}


function goFull(){
$('#basic').hide();
$('#full').fadeIn();
}

function goBasic(){
$('#full').hide();
$('#basic').fadeIn();
}







function contact_q(){
var name = $('#qname').val();
var email = $('#qmail').val();
var tel = $('#qphone').val();
var city = '';
var details = $('#qdetails').val();

if(email==''||name==''||email=='דוא"ל'||name=='שם'){
	if(name==''||name=='שם'){$('.noname').fadeIn();$('#qname').keypress(function(){$('.noname').hide();});}
	if(email==''||email=='דוא"ל'){$('.nomail').fadeIn();$('#qmail').keypress(function(){$('.nomail').hide();});}
	return;
}

if(!checkEmail(email)){$('.malmail').fadeIn();$('#qmail').keypress(function(){$('.malmail').hide();});return;}

//alert(name+' - '+email+' - '+tel+' - '+details)
	$.post('sendemil.php',{name:name,email:email,tel:tel,city:city,details:details},function(flag){
	if(flag!='0'){
	$('#qsend').replaceWith('<div id="qsent">ההודעה נשלחה בהצלחה!</div>');
	$('.sideContact input,textarea').val('').unbind('focus').unbind('blur');
	} else {
	//$('#fid').html('תקלה בשליחה').fadeIn();
	$('#qsend').replaceWith('<div id="qsent">תקלה בשליחה</div>');
	}
	});
	
}





function contact_qEn(){
var name = $('#qname').val();
var email = $('#qmail').val();
var tel = $('#qphone').val();
var city = '';
var details = $('#qdetails').val();

if(email==''||name==''||email=='Email'||name=='Name'){
	if(name==''||name=='Name'){$('.noname').fadeIn();$('#qname').keypress(function(){$('.noname').hide();});}
	if(email==''||email=='Email'){$('.nomail').fadeIn();$('#qmail').keypress(function(){$('.nomail').hide();});}
	return;
}

if(!checkEmail(email)){$('.malmail').fadeIn();$('#qmail').keypress(function(){$('.malmail').hide();});return;}

	$.post('../sendemil.php',{name:name,email:email,tel:tel,city:city,details:details},function(flag){
	if(flag!='0'){
		$('#qsend').replaceWith('<div id="qsent">Message successfuly sent!</div>');
		$('.sideContact input,textarea').val('').unbind('focus').unbind('blur');
	} else {
		$('#qsend').replaceWith('<div id="qsent">Error sending</div>');
	}
	});
}