function validateForm() {
   //get value
   var name=document.forms["signup"]["name"].value;
   var email=document.forms["signup"]["email"].value;
   var phone=document.forms["signup"]["phone"].value;
   var password=document.forms["signup"]["password"].value;

    //validate name
    if(name.length<3||/\d/.test(name)){
      alert("Enter valid name");
      return false;

    }
    //validate email
    if(!/\S+@\S+\.\S+/.test(email)){
      alert("Enter valid email");
      return false;
    }
    //validate phone
    if(phone.length<10||!/^\d+$/.test(phone)){
      alert("Enter valid phone");
      return false;
    }

    //validate password
    if(password.length<6){
      alert("Enter valid email");
      return false;
    }
    return true;
}      
  