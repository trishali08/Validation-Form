/*for show password*/

function f2(){
  var res = document.getElementById('pbtn');
  res.style.visibility='hidden';
}

function f1() {
  var res = document.getElementById('pbtn');
  res.style.visibility='visible';
  const pbtn = document.querySelector("#pbtn");
  pbtn.addEventListener("click", function() {
    const pinput = document.getElementById("password");
    const type = pinput.getAttribute("type");
    if(type == "password") {
      pinput.setAttribute("type", "text");
      //pbtn.innerHTML = "Hide";
    }
    else{
      pinput.setAttribute("type","password");
      //pbtn.innerHTML = "Show";
    }
  });
}

function validate(myform)
{
  /*for first name*/
  var a = myform.fname.value;
  if(a == "" || a == " ") {
    alert("Enter first name.");
    return false;
  }

   /*for email address */
   var e = myform.mail.value;
   var f = e.indexOf('@');
   var g = e.lastIndexOf('.');
   if(e == "" || e == " " || f<1 || g<f+2 || g+2>=e.length) {
     alert("Enter valid email address");
     return false;
   }

   /* for password*/
  var h = myform.pwd1.value;
   if(h.length<8) {
     alert("Enter password, Minimum length: 8");
     return false;
   }

   /* for password confirmation*/
   var i = myform.pwd1.value;
   var j = myform.pwd2.value;
   if(i==j) {
     return true;
   }
   else{
     alert("Password must be same");
     return false;
   }

   /* for phone number*/
   var c = myform.num.value;
   var d = c.slice(0,1);
   if(c.length!=10) {
     alert("Enter valid phone number.");
     return false;
   }
   if(d==6 || d==7 || d==8 || d==9){
     return true;
   }
   else {
       alert("Enter valid phone number.");
       return false;
     }
}
