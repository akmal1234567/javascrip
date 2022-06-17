var ulang = true 

while ( ulang == true ){

var nilai1=prompt("Masukkan angka yang akan dikali,dibagi,ditambah,atau dikurang :");
var jadi =  prompt('mau dikali,dibagi,ditambah,atau dikurang')
var nilai2=prompt("angka "+nilai1+ " mau dikali,dibagi,ditambah,atau dikurang?");

var kali = nilai1*nilai2
//var input = 'bagi'
var bagi = nilai1/nilai2
var tambah = nilai1 + nilai2;
var kurang = nilai1-nilai2
//if(jadi == input){
//    alert("Hasil dari "+nilai1+"*"+nilai2+"="+kali);
//}

if(jadi == '*'){
    var result = kali
}else if(jadi == '/'){
    var result = bagi
}else if(jadi == '+'){
    var result = tambah
}else if(jadi == '-'){
    var result = kurang
}else {
    alert('mohon maaf sombol yang anda masukan salah')
}


alert("Hasil dari "+nilai1+jadi+nilai2+"="+result);
ulang = confirm('apakah anda mau menglang data nya')
}

alert ( 'terimakasih')
