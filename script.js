const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validUser = false;
let validEmail = false;
let validPhone = false;

$('#failure').hide();
$('#success').hide();

// console.log(name + email + phone);
name.addEventListener('blur', ()=>{
    console.log('name is blurred');
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        if(name.classList.contains('is-invalid'))
            name.classList.remove('is-invalid');
        console.log('Your name is valid');
        validUser = true;
    }else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        // console.log(name);
        validUser = false;
        
    }
    
})

email.addEventListener('blur', ()=>{
    console.log('email is blurred');
    //validate email here

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        if(email.classList.contains('is-invalid'))
            email.classList.remove('is-invalid');
        console.log('Your email is valid');
        validEmail = true;
    }else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
        
    }
})

phone.addEventListener('blur', ()=>{
    console.log('phone is blurred');

    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        if(phone.classList.contains('is-invalid'))
            phone.classList.remove('is-invalid');
        console.log('Your phone is valid');
        validPhone = true;
    }else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');        
        validPhone = false;
    
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    console.log('Submitted');
    e.preventDefault();

    if(validUser && validEmail && validPhone){
        let failure = document.getElementById('failure');
        
        console.log("Everything is valid");
        let success = document.getElementById('success');
        success.classList.add("show");  
        // failure.classList.remove("show");
        // $('#failure').alert('close'); 
        $('#failure').hide();
        $('#success').show();
    }else{
        console.log('Details Not Valid. Please Try Again.');
        let failure = document.getElementById('failure');
        failure.classList.add("show");
        // success.classList.remove("show");
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }
});

/*
using querySelector not getElementById
let submit = document.querySelector('#submit');
submit.addEventListener('click', (e)=>{
    console.log('Submitted');e.preventDefault();

    if(validUser && validEmail && validPhone){
        let failure = document.querySelector('#failure');console.log("Everything is valid");
        let success = document.querySelector('#success');success.classList.add("show");  
        // failure.classList.remove("show");// $('#failure').alert('close'); 
        $('#failure').hide();$('#success').show();}
        else{
        console.log('Details Not Valid. Please Try Again.');let failure = document.querySelector('#failure');
        failure.classList.add("show");
        // success.classList.remove("show");// $('#success').alert('hide');
        $('#success').hide();$('#failure').show();}});

        let submit = document.querySelector('#submit');
        submit.addEventListener('click', (e)=>{console.log('Submitted');e.preventDefault();
        else{
        console.log('Details Not Valid. Please Try Again.');let failure = document.querySelector('#failure');
        failure.classList.add("show");
        // success.classList.remove("show");// $('#success').alert('hide');
        $('#success').hide();$('#failure').show();}});

        let submit = document.querySelector('#submit');
        submit.addEventListener('click', (e)=>{console.log('Submitted');e.preventDefault();
        else{
        console.log('Details Not Valid. Please Try Again.');let failure = document.querySelector('#failure');
        failure.classList.add("show");
        // success.classList.remove("show");// $('#success').alert('hide');
        $('#success').hide();$('#failure').show();}});

        let submit = document.querySelector('#submit');
        submit.addEventListener('click', (e)=>{console.log('Submitted');e.preventDefault();

    if(validUser && validEmail && validPhone){
        let failure = document.querySelector('#failure');
        
        console.log("Everything is valid");let success = document.querySelector('#success');
        success.classList.add("show");  // failure.classList.remove("show");
        // $('#failure').alert('close'); $('#failure').hide();$('#success').show();}
    else{
        console.log('Details Not Valid. Please Try Again.');let failure = document.querySelector('#failure');
        failure.classList.add("show");// success.classList.remove("show");
        // $('#success').alert('hide');$('#success').hide();$('#failure').show();}});

*/