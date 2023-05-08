let btncheckbox = document.querySelector('input[type="checkbox"]');
let enternumber = document.querySelector('#number');



let btnrandom = document.querySelector('#random');


let answer = document.querySelector('#answer');
let types = document.querySelectorAll('input[name="type"]');

let answertext= document.querySelector('#answertext');




// кнопка для disabled и visible random
btncheckbox.addEventListener('click',function(){
    if(btncheckbox.checked){
        enternumber.setAttribute('disabled','true');
        btnrandom.style.visibility='visible';
        enternumber.value='';
    }
    else{
        enternumber.removeAttribute('disabled');
        enternumber.value='';
        btnrandom.style.visibility='hidden';
    }
});



// кнопка для получения числа
btnrandom.addEventListener('click',function(){
    let random = Math.round(Math.random() * 1000);
    enternumber.value = random;
});


// кнопка для полученния ответа и выбора типа факта

answer.addEventListener('click',function(){
    let type='';
    for(let item of types){
        if(item.checked){
            type=item.value;
        }
    }
    fetch(`http://numbersapi.com/${enternumber.value}/${type}?json`)
    .then(response => {
        return response.json();
    })
    .then(data =>{
        answertext.value=data.text;
    })
})






