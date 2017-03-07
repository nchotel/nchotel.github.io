$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 4
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Name is required",
                minlength: "At least 2 characters"
            },
            email: {
                required: "Email is required"
            },
            subject: {
                required: "Subject is required",
                minlength: "At least 4 characters"
            },
            message: {
                required: "Message is required",
                minlength: "At least 5 characters"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"contact_form.php",
                success: function() {
                    $('#contact .alert-success').fadeIn();
                },
                error: function() {
                    $('#contact .alert-danger').fadeIn(); 
                }
            });
        }
    });
});