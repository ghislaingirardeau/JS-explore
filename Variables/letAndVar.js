//! il est préféreable d'utiliser let et const plutot que var
//! pour éviter les erreurs car le scope de var est trop grand

function varTest() {
  var x = 31;
  if (true) {
    var x = 71; // c'est la même variable !
    console.log(x); // 71
  }
  console.log(x); // 71
}

function letTest() {
  let x = 3;
  if (true) {
    let x = 7; // c'est une variable différente
    console.log(x); // 71
  }
  console.log(x); // 31
}

varTest();
letTest();
