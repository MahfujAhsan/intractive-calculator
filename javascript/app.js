const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const oparationEl = document.querySelectorAll('.oparation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOparation = '';
let haveDot = false;

numbersEl.forEach( number => {
    number.addEventListener('click', (e)=> {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if(e.target.innerText === '.' & haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
});

oparationEl.forEach( oparation => {
    oparation.addEventListener('click', (e)=> {
        if(!dis2Num) result;
        haveDot= false;
        const oparationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOparation) {
            mathOparation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(oparationName);
        lastOparation = oparationName;
        console.log(result); 
    })
});

function clearVar(name = '') {
    dis1Num += dis2Num+ ' ' + name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
    tempResultEl.innerText = result;
}

function mathOparation() {
    if(lastOparation === 'X') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if(lastOparation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if(lastOparation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if(lastOparation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if(lastOparation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

equalEl.addEventListener('click', (e)=> {
    if( !dis1Num || !dis2Num) return;
    haveDot = false;
    mathOparation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

clearEl.addEventListener('click', (e) => {
    display1El.innerText = '0';
    display2El.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultEl.innerText = '0';
});

clearLastEl.addEventListener('click', (e) => {
    display2El.innerText = '';
    dis2Num = '';
})

window.addEventListener('keydown', (e) => {
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        clickButtonEl(e.key);
    } else if(
        e.key === '/' ||
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%'
    ) {
        clickOparation(e.key);
    } else if (e.key === '*') {
        clickOparation('X');
    } else if (e.key == 'Enter' || e.key == '=' ) {
        clickEqual();
    }
});

function clickButtonEl(key) {
    numbersEl.forEach( button => {
        if(button.innerText === key) {
            button.click();
        }
    })
}

function clickOparation(key) {
    oparationEl.forEach(button => {
        if(button.innerText === key) {
            button.click();
        }
    })
};

function clickEqual() {
    equalEl.click();
}