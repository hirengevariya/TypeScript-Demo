function varDeclaration() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('Var Finally outside the block ' + i);
}

varDeclaration();

function letDeclaration() {
  for (let a = 0; a < 5; a++) {
    console.log(a);
  }
  console.log('Let Finally outside the block ' + a);
}

letDeclaration();