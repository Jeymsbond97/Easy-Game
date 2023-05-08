//   start js coding

function myfunction(){
       let write = document.querySelector('p');
        // get picture one

    let randomnumber1 = Math.floor(Math.random()*6) + 1;
    let picture1 = 'Dice' + randomnumber1 + '.png';
    let images1 = 'images/' + picture1;
    let image1 = document.querySelectorAll('img')[0].setAttribute('src', images1);

    // get picture two

    let randomnumber2 = Math.floor(Math.random()*6) + 1;
    let picture2 = 'Dice' + randomnumber2 + '.png';
    let images2 = 'images/' + picture2;
    let image2 = document.querySelectorAll('img')[1].setAttribute('src', images2);

    // start if else statement

    if(randomnumber1>randomnumber2){
        write.innerHTML = 'Player 1 is winner';
        write.style.color="rgb(44, 43, 3)"
    }
    else if(randomnumber2>randomnumber1){
       write.innerHTML = "Player 2 is winner";
       write.style.color="rgb(53, 8, 8)"
    }else{
        write.innerHTML = 'Players are equal.!'
        write.style.color="rgb(1, 29, 29)"
    }

}