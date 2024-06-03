// SENAC - TAGUATINGA 
// PROGRAMAÇÃO WEB COM JS 
// CONHCENDO VARIAVEIS EM JS 
let minhaIdade = 19; // number
let meuNome= "Gabriel" //string
let souEstudante = true // boolean 
let valorNulo = null // null
let valorIndefinido; // não vamos atribuir nenhum valor por enquanto 
let minhaDataDeNascimento = new Date (2005,3,23);// objdeto

// estrutura de controle 
let idade2 = 18; 
if (idade >= 18 ) {
    console.log("Voce pode votar")
} else if(idade == 17 ) {
    console.log("Voce pode votar no proximo ano")
}

let idade = 15; 
if ( idade > 18) {
    console.log("Pode votar!")
} else if (idade == 17 ) {
    console.log("Pode votar no proximo não")
} else {
    console.log("Voce ainda não pode votar!")
}

let dia = 2; 
switch(dia){
    case 1:
        console.log("segunda - feira");
        break; 
        case 2: 
        console.log("Terça-Feira"); 
        break; 
        default:
        console.log("Ola Invalido"); 
}
// estrutura de controle: loop

for(let d = 0;d < 5; d++){
    console.log(d); 
}

let j = 1; 
while (j<5){
    console.log(j);
    i++; 
}

let i = 0; 
do{
    console.log(i);
    i++
} while (i<5);

// CONVERSÃO DE TIPO DE DADOS

let num = 10;
let str = '20';
console.log(num + str); // Resultara em 1020
str = Number (str); 
console.log(num + str ); // resultara em 30 (soma)

// Operadores 
let a = 15; 
let b = 5;
let c; 

c = a+b; 
console.log(c); // Resultara em 20

c = a-b; 
console.log(c); // Resultara em 10

c = a*b; 
console.log(c); // Resultara em 75

c = a/b; 
console.log(c); // Resultara em 3

// Funções em JS

function nomeDaFuncao(param1, param2, param3) {

}
function saudacao (nome) {
    console.log("Ola, " + nome + "!");
    
}
 
let cor = "Vermelho" // Variavel Global
function mostrarCor(){
    console.log(cor)
} 
function mostrarCarro() {
    let carro = "Ferrari"; // Variavel Global 
    console.log(carro)
}
mostrarCarro() // Imprime Ferrari
console.log(carro); // Erro carro is not difine

const numero = [1,2,3,4,5]; 
const quadrados = numero.map(function(n){
    return n*n; 
}); 
console.log(quadrados); // Imprime [1,4,9,16,25]

function cumprimentar(calback){
    console.log('Ola'); 
    calback(); 
    function dizerNome() {
        console.log('Joao'); 
    }
} 
cumprimentar(dizerNome); 