$(document).ready(function(){

// link to chars //
    $("#chars").click(function(){
        window.location.href = 'Characters.html';
    });
// validate //
    $.validator.addMethod("atLeastOneNumber", function (value, element) {
        return this.optional(element) || /[0-9]+/.test(value);
    }, "Must have at least one number");
    
    $('#contactForm').validate({
		rules: {
			"userName": {
				required: true,
                minlength: 6,
                maxlength: 15,
            },
            "fullName": {
                required: true,
                minlength: 3,
                maxlength: 30,
            },
			"email": {
				required: true,
				email: false,
				emailRegex: true,
			},
			"pass": {
                required: true,
                minlength: 6,
                atLeastOneNumber: true,
			},
			"cpass": {
                required: true,
				equalTo: "#pass",
			}

		}
	})

	jQuery.validator.addMethod("emailRegex", function(value, element) {
		var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regEx.test(value);
	}, "Please, enter valid email address!");

	
	$("#contactForm").submit(function() {
        
        var val = $("#contactForm").valid();
        if ( val==false ) {
            
        alert("Please Fill the form Correctly");
        
        return true;
        } else {
        alert("Registration Successfull");
        window.location.href = 'homepage.html';
        

        return false;
        }
        });
      
        
        

    
    
});
