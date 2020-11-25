$(function() {

    $('#contact-form').submit(function(e){
        e.preventDefault();
        $('.comment-error').empty();
        var postData = $("#contact-form").serialize();

        $.ajax({
            type: 'POST',
            url: '../php/formContactHandler.php',
            data: postData,
            dataType: 'json',
            success: function(result){

                if(result.isSuccess){
                    $("#contact-form").append("<p class='thank-you'>Votre message a bien été envoyé. Merci de nous avoir contacté</p>");
                    $("#contact-form")[0].reset();
                } else {
                    $("#name + .comment-error").html(result.nameError);
                    $("#city + .comment-error").html(result.cityError);
                    $("#email + .comment-error").html(result.emailError);
                    $("#message + .comment-error").html(result.messageError);
                }
            }
        })
    });
})