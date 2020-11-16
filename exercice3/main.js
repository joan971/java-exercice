age = parseInt(prompt("Qu'elle est votre âge svp?  "));
while (age <= 0 || age > 90) {
  alert("votre âge est incorrect! ");
  age = parseInt(prompt("Qu'elle est votre âge svp?  "));
}
alert("votre âge est de  " + age + " ans");