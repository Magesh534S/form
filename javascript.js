document.getElementById('myform').addEventListener("submit",(helo))
    helo.preventDefault();
    var form={
        firstname:document.getElementById(firstname).value,
        lastname:document.getElementById(lastname).value,
        email:document.getElementById(email).value,
        number:document.getElementById(number).value,


    };
    console.log(form);