var username = document.getElementById("username");
var password = document.getElementById("password");
var re_password = document.getElementById("re-password");
var form = document.getElementById("registration");
var btn = document.querySelector("#submit-btn");



function isValid_Input(isValid, checkInputRule) {
    if(isValid) {
        checkInputRule.classList.remove('invalid');
        checkInputRule.classList.add('valid');
        
    } else {
        checkInputRule.classList.add('invalid');
        checkInputRule.classList.remove('valid');        
    }
};



username.addEventListener('keyup', (event) => {
    event.preventDefault();
    
    var username_rule_1 = document.querySelector('label[for="username"] li:nth-child(1)');
    var username_rule_2 = document.querySelector('label[for="username"] li:nth-child(2)');

    if(username.value.length < 5)
    {
        isValid_Input(false, username_rule_1);

    } else {   
        isValid_Input(true, username_rule_1);
    }

    if( username.value.match(/[^a-zA-Z0-9]/g) || username.value.length == 0 ) {

        isValid_Input(false, username_rule_2);
    }
    else {
        isValid_Input(true, username_rule_2);
    }

});

password.addEventListener("keyup", function(event) {
    event.preventDefault();
    
    var password_rule_1 = document.querySelector('label[for="password"] li:nth-child(1)'); // length
    var password_rule_2 = document.querySelector('label[for="password"] li:nth-child(2)'); // numbers
    var password_rule_3 = document.querySelector('label[for="password"] li:nth-child(3)'); // Uppercase
    var password_rule_4 = document.querySelector('label[for="password"] li:nth-child(4)'); // lowercase
    var password_rule_5 = document.querySelector('label[for="password"] li:nth-child(5)'); // Special char
    

    if(password.value.length < 8)
    {
        isValid_Input(false, password_rule_1);
    } else {   
        isValid_Input(true, password_rule_1);
    }

    if( !password.value.match(/[0-9]/g) || password.value.length == 0) {

        isValid_Input(false, password_rule_2);
    }
    else {
        isValid_Input(true, password_rule_2);
    }
    
    
    if( !password.value.match(/[a-z]/g) || password.value.length == 0 ) {

        isValid_Input(false, password_rule_3);
    }
    else {
        isValid_Input(true, password_rule_3);
    }

    if( !password.value.match(/[A-Z]/g) || password.value.length == 0 ) {

        isValid_Input(false, password_rule_4);
    }
    else {
        isValid_Input(true, password_rule_4);
    }

    if( !password.value.match(/[\!\@\#\$\%\^\&\*]/g) || password.value.length == 0) {

        isValid_Input(false, password_rule_5);
    }
    else {
        isValid_Input(true, password_rule_5);
        
    }
    

});

re_password.addEventListener("keyup", function(event) {
    
    var re_password_rule_1 = document.querySelector('label[for="re-password"] li:nth-child(1)'); // length
    
    if( re_password.value !== password.value || re_password.value.length === 0) {
        isValid_Input(false, re_password_rule_1);
    } else {
        isValid_Input(true, re_password_rule_1);
    }
});



form.addEventListener("submit", function(event) {
    
    if(  username.value.length < 5
        || username.value.match(/[^a-zA-Z0-9]/g) 
        || !username.value.match(/[a-zA-Z0-9]/g) 
        || !password.value.match(/[a-z]/g)
        || !password.value.match(/[A-Z]/g)
        || !password.value.match(/[0-9]/g)
        || !password.value.match(/[\!\@\#\$\%\^\&\*]/g)
        || re_password.value !== password.value ) {    
        event.preventDefault();
    }
    
});

