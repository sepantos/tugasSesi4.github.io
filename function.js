function shoutOut(){
	var genjeih = 'hello function'; 
  return genjeih;
}
console.log(shoutOut())
// tugass 2
function calculateMultiply(){
  return num1 * num2
}

var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);

console.log(hasilPerkalian)
// tugas 3
function processSentence(){
  return " nama saya " + name + " umur saya " + age + "Tahun," + "alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
