//  let box=document.querySelector('.box');

// document.addEventListener('click',()=>{
    //     if(bool==0)
    //     {
        //         document.querySelector('#box1').style.backgroundColor='red';
        //         bool=1;
        //     }
        //     else
        //     {document.querySelector('#box2').style.backgroundColor='green';
        //     bool=0;}
        // })
        let arr1 = [];
let arr2 = [];
let bool = 0;

document.querySelector('.game').addEventListener('click', (ev) => {
    if (ev.target.tagName === 'BUTTON') {
        let x = ev.target.id;
        x=x[3];
        // checkWinner(arr1, "Player 1");
        // checkWinner(arr2, "Player 2");
        if (bool === 0 && !arr1.includes(x) && !arr2.includes(x)) {
            var ele=document.getElementById(`box${x}`);
            ele.innerHTML='<strong>X</strong>';
            document.querySelector(`#box${x}`).style.backgroundColor = 'red';
            // checkWinner(arr1, "Player 1");
            // checkWinner(arr2, "Player 2");
            arr1.push(x);
            bool = (bool + 1) % 2;
        } else if (bool !== 0 && !arr1.includes(x) && !arr2.includes(x)) {
            document.querySelector(`#box${x}`).style.backgroundColor = 'green';
            var ele=document.getElementById(`box${x}`);
            ele.innerHTML='<strong>O</strong>';
            // checkWinner(arr1, "Player 1");
            // checkWinner(arr2, "Player 2");
            arr2.push(x);
            bool = (bool + 1) % 2;
        }
        checkWinner(arr1, "Player 1");
        checkWinner(arr2, "Player 2");

    }
});

function checkWinner(playerArray, playerName) {
    console.log("func invoked");
    if (
        (playerArray.includes('0') && playerArray.includes('1') && playerArray.includes('2')) ||
        (playerArray.includes('3') && playerArray.includes('4') && playerArray.includes('5')) ||
        (playerArray.includes('6') && playerArray.includes('7') && playerArray.includes('8')) ||
        (playerArray.includes('0') && playerArray.includes('4') && playerArray.includes('6')) ||
        (playerArray.includes('1') && playerArray.includes('7') && playerArray.includes('5')) ||
        (playerArray.includes('2') && playerArray.includes('5') && playerArray.includes('8')) ||
        (playerArray.includes('0') && playerArray.includes('4') && playerArray.includes('8')) ||
        (playerArray.includes('2') && playerArray.includes('4') && playerArray.includes('7'))
    ) {
        alert(`${playerName} won the game`);
        location.reload();
    }
   
}
document.getElementById('resetButton').addEventListener('click', function() {

    alert("Reseting game");
    location.reload();
    // resetGame();
});

// function resetGame() {
//     // Clear X and O from the buttons
//     for (let i = 0; i < 9; i++) {
//         document.getElementById('box' + i).innerHTML = '';
//     }

//     // Enable buttons
//     enableButtons();

//     // You may need to reset any other game state variables or logic
// }

// function enableButtons() {
//     // Enable all buttons for a new game
//     for (let i = 0; i < 9; i++) {
//         document.getElementById('box' + i).disabled = false;
//     }
// }





console.log(arr1);
console.log(arr2);