// storing Signup data in local storage
function validateForm() {
    let data = localStorage.getItem("details")
      ? JSON.parse(localStorage.getItem("details"))
      : [];
    let formData = {
      name: document.getElementById("uName").value,
      email: document.getElementById("uEmail").value,
      PhoneNo: document.getElementById("uPhone").value,
      password: document.getElementById("uPassword").value,
      confirmpassword: document.getElementById("confirmPassword").value,
    };
    let existemail = JSON.parse(localStorage.getItem("details"));
    let getexistemail = existemail?.find((emailData) => emailData.email === formData.email)
    // password matching
    if(formData.password !== formData.confirmpassword){
        alert('Password Must be Matching');
    }
    // Email matching 
    else if(getexistemail?.email === formData.email){
        alert('email address already exist');
    
    }
    else{
        data.push(formData);
        if (localStorage) {
            localStorage.setItem("details", JSON.stringify(data));
            document.getElementById("uName").value = "",
            document.getElementById("uEmail").value = "",
            document.getElementById("uPhone").value = "",
            document.getElementById("uPassword").value = "",
            document.getElementById("confirmPassword").value = ""
        }
    }
  }

  // login 
  
  function login() {
    let loginData = {
      email: document.getElementById("uEmail").value,
      password: document.getElementById("uPassword").value,
    };
    let matchEmail = JSON.parse(localStorage.getItem("details"));
    console.log("data", matchEmail);
    let userData = matchEmail?.find((StoredData) => StoredData.email == loginData.email && loginData.password == StoredData.password);
    console.log("userData", userData);
    if (userData) {
      alert("you have successfully logged in")
    }else{
      alert("Please check your Mail or Password")
    }
  }
   
  

  


