
var userLogin = {
   'thisLogin':'tara',
    'thisPassword':'password'
};

var x=prompt("enter your username", " ")
var y=prompt("enter your password", " ")

if ((x===userLogin.thisLogin)&&(y===userLogin.thisPassword)) {
    alert("YAY!")
} else {
    alert("NAY!")
}

