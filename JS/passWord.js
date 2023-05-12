$(document).ready(function() {
    const signInBtn = $('#Btn-Input');
    
    const usernameInput = $('#username');
    const passwordInput = $('#password');
  


  
    // SignIn
    signInBtn.click(function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get username and password
      const username = usernameInput.val();
      const password = passwordInput.val();
  
      // test 
      if (username === 'nadine' && password === 'nadine' ||username === 'samar' && password === 'samar') {
        // Save 
        localStorage.setItem('username', username ,'password',password);
  
        //go to home page
        window.location.href = 'file:///C:/Users/nadin/OneDrive/Bureau/New%20folder/Dashbord-project/componenets/landingPage.html';
    } else {
      // Error
      alert('Invalid username or password.');
    }
    });
  
    
      // Clear username and password inputs
      usernameInput.val('');
      passwordInput.val('');
    });
  
  