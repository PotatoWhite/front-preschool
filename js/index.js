const count = document.getElementById('count');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

let number = 0;

increaseButton.addEventListener('click', () => {
    // validation
    if (number >= 10) {
        alert('10 이상은 증가할 수 없습니다.');
        return;
    }

    number++;
    count.innerText = number;
    }
);

decreaseButton.addEventListener('click', () => {
    // validation
    if (number <= 0) {
        alert('0 이하는 감소할 수 없습니다.');
        return;
    }
    number--;
    count.innerText = number;
    }
);