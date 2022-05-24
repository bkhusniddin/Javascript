
// first
// for (let i=0; i<= 10; i++ ){
//     console.log(i)
// }

// second

// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i<=10)

// thirty 

// let i = 0
// while(i<10){
//     console.log(i);
//     i++
// }

let answer = []
let question = [
    'What is your name',
    'What is your phone',
    'How old are you'
]

// console.log(question);

for ( let i = 0 ; i < question.length; i++){
    answer[i] = prompt(question[i]);
}

console.log(answer);

 