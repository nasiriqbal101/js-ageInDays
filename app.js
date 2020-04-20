
ageInDays = () => {
let birthYear = prompt('what is your birth year?');
let yourAgeInDays = (2020 - birthYear) * 365;
let h1 = document.createElement('h1');
let textAnswer = document.createTextNode('You are ' + yourAgeInDays + ' days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-result').appendChild(h1);
console.log(yourAgeInDays);
}

reset = () => {
    document.getElementById('ageInDays').remove();
}