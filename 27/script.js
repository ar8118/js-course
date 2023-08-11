
switch (2, 3, 4, 5) {
  case 1:
    console.log(1);
    break
  case 2, 3, 4, 5:
    console.log(2, 3, 4, 5);
    break
  case 6:
  case 7:
  case 8:
  case 9:
    console.log(6, 7, 8, 9);
    break
  default:
    console.log(10);
    break
}


let userScore = 5

switch (true) {
  case (userScore >= 1 && userScore <= 5):
    console.log('between 1 to 5');
    break;
  default:
    console.log(":)");
    break;
}
