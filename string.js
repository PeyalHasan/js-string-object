// const subject = "chemistry";
// const book = "ChemIstry";

// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log("Mama ei semester e kop dimo")
// }
// else{
//     console.log("Nodir o pare chariya nishas porer semester e koribo valo eita amar bissas")
// }

// const drink = '    water    '
// const liquid = 'water '
// if(drink.trim() === liquid.trim()){
//     console.log('Safe water')
// }
// else{
//     console.log('Drink it')
// }

// const sentence =  'I am a good and hardworking person.';
// console.log(sentence.split(' '))
// const friendsStr = 'Rahim,Karim,Jobbar,Kahim,Lahim,Fahim';
// const friends = friendsStr.split(',');
// console.log(friends);

const sentence = 'I am learning Web Dev';
let reverse = '';
for(const letter of sentence){
	reverse = letter + reverse ;
}
console.log(reverse);
