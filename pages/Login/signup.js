const form= document.getElementById('send'); //buttton send
const email= document.getElementById('email'); //the email
const pass = document.getElementById('password'); //the password
const out_pass=document.getElementById('out_pass'); //error_password
const out=document.getElementById('out'); //error email
const userName=document.getElementById('userN');//user name
const out_user=document.getElementById('out_user')//error user
const out_conf=document.getElementById('out_conf'); //err_confirm password
const confirmpass =document.getElementById('confirmpass') // just confirm the password


//hamburger navigation
const hamburgerButton = document.querySelector('.hambourger');
const hamburgerView = document.querySelector('.hamburger_view');


hamburgerButton.addEventListener('click', function() {
  hamburgerView.style.display = 'flex';
  hamburgerView.style.visibility = 'visible';
  hamburgerView.style.position = 'fixed';
});
const hamburgerButton_close = document.querySelector('.Flexer_2');

hamburgerButton_close.addEventListener('click', function() {
  hamburgerView.style.display = 'none';
  hamburgerView.style.visibility = 'none';
  hamburgerView.style.position = 'none';
});
// Getting elements from the local Storage
users = JSON.parse(localStorage.getItem('users')) || [];
//not working verify if the email is already present
let targetUser= users.find(user => user.email == email.value);





//action to be done after validation (signup)
function submit(){
   
  console.log(" localstorage")
  let user = {
    name : userName.value,
    email : email.value,
    password :pass.value
  };

  users.push(user);
  const stringUsers = JSON.stringify(users);
  localStorage.setItem('users', stringUsers);
}

//  valitation form
form.addEventListener("click", function(event) {
    console.log("clicked")
  event.preventDefault();
  let isValid = true;

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value === "" ) {
          isValid=false;
          out.innerHTML="Whoops, your email is missing";
        }
  else if(!emailRegex.test(email.value)) {
          isValid = false;
          out.innerHTML="Invalid Email ";
        }
       
        else if(email.value === targetUser){
          isValid= false;
          out.innerHTML="An account of the same email is already in";

        }
        else {
          out.innerHTML="";
        }



  if (pass.value === "") {
        isValid = false;
        out_pass.innerHTML="Whoops, your Password is missing";
      } else {
        out_pass.innerHTML="";
      }



  if (userName.value === "") {
        isValid = false;
        out_user.innerHTML="Whoops, your Username is missing";
      } else {
        out_user.innerHTML="";
      }



  if (confirmpass.value === "" ){
        isValid = false;
        out_conf.innerHTML="Confirm the password";
      }else if(confirmpass.value !== pass.value){
        isValid = false;
        out_conf.innerHTML="Passwords Don't Match !!";
      }else{
        out_conf.innerHTML="";
      }

  

  if (isValid) {
    submit();
  }
})

