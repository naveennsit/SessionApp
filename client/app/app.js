var UserModule = (function () {
    function registrationHandler() {
        var email = $('#user_email').val();
        var password = $('#user_password').val();
        var confirmPassword = $('#user_reenter_password').val();

        if (password != '' && confirmPassword != ''
            && password === confirmPassword
            && email != '') {

            var data = {
                email: email,
                password: password
            };
            $.ajax({
                url: 'http://localhost:5000/users/register',
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json',
                withCredentials: true,
                data: JSON.stringify(data),
                success: function (data, textStatus, jQxhr) {
                    console.log('success')
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log('error')
                }
            });
        } else {
            console.log('Enter correct fields');
        }
    }

    // login handler
    function loginButtonHandler() {
        $('.reg_form').hide();
        $('.login_form').show();

    }

    //registration handler

    function registrationButtonHandler() {
        $('.reg_form').show();
        $('.login_form').hide();

    }

    function logoutButtonHandler() {
        console.log('logoutButtonHandler');
    }

    function loginSubmitButtonHandler() {
        var email = $('#login_email').val();
        var password = $('#login_password').val();

        if (password != ''
            && email != '') {

            var data = {
                email: email,
                password: password
            };
            $.ajax({
                url: 'http://localhost:5000/users/login',
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (data, textStatus, jQxhr) {
                    console.log('success')
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log('error')
                }
            });
        } else {
            console.log('Enter correct fields');
        }
    }

    function bindAction() {
        //registration button
        $('#reg_submit').on('click', registrationHandler);
        //
        $('#login_submit').on('click', loginSubmitButtonHandler);

        $('.logout').on('click', logoutButtonHandler);

        $('.login').on('click', loginButtonHandler);

        $('.registration').on('click', registrationButtonHandler);


    }

    function init() {
        bindAction();
    }

    return {
        init: init
    }
})();


$(function () {
    UserModule.init();
})