document.querySelector('button').addEventListener('click', show);

const sleepTime = document.querySelector('#sleepH');
const workTime = document.querySelector('#workH');


function show() {
    
    const num1 = parseInt(sleepTime.value, 10);
    sleepTime.value = '';
    const num2 = parseInt(workTime.value, 10);
    workTime.value = '';

    const result = 24 - (num1+num2)

    if (0<=result && result<=4) {
        document.querySelector('#placeToHere').innerHTML = `${result}H for personal time. What a shame!`;
        document.querySelector('#image').src = "img/giphy.gif";
        document.querySelector('body').style.backgroundColor = 'rgb(154, 220, 255)'

    } else if (4<result&& result<=8) {
        document.querySelector('#placeToHere').innerHTML = `You da Boss: ${result}H for freee time`;
        document.querySelector('#image').src = "img/be.gif";
        document.querySelector('body').style.backgroundColor = 'rgb(1, 146, 103)'
    } else {
        document.querySelector('#placeToHere').innerHTML = `Full of Fun Huh? ${result}H?`;
        document.querySelector('#image').src = "img/e.gif";
        document.querySelector('body').style.backgroundColor = 'rgb(245, 169, 98)'
    }
    console.log(sleepTime.value) 
    
}
