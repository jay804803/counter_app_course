const countValue = document.querySelector('#counter');

const incriment = ()=> {
    let value = parseInt(countValue.innerText);
    value = value +1;

    countValue.innerText = value;       
}

const decriment = ()=> {
    let value = parseInt(countValue.innerText);
    value = value - 1;

    countValue.innerText = value;       
}