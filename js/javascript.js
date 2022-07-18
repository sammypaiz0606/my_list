// const addList = document.querySelector('.add-list');
// const addBtn = document.querySelector('.uil-plus');
// const inputField = document.getElementById('input');

// addBtn.addEventListener('click', () => {
//     const createElement = document.createElement('div');
//     createElement.classList.add('create-div');
//     createElement.innerText = inputField.value;
//     addList.appendChild(createElement);
//     inputField.value = '';


//     createElement.addEventListener('click', () => {
//         createElement.style.textDecoration = 'line-through';
//     })

//     createElement.addEventListener('dblclick', () => {
//         addList.removeChild(createElement);  
//     })
// });

let addList = document.querySelector('.add-list');
let addBtn = document.querySelector('.uil-plus');
let inputField = document.querySelector('#input');
let fieldIn = document.querySelector('#fieldIn');

addBtn.addEventListener('click', () => {
    const createElement = document.createElement('div');
    createElement.classList.add('animate__animated', 'animate__slideInDown');
    createElement.classList.add('create-div');
    createElement.innerText = inputField.value;
    

    if(inputField.value == '') {
        fieldIn.style.display = 'block';
        return false;
    } else {
        fieldIn.style.display = 'none';
    }
    addList.appendChild(createElement);

    createElement.addEventListener('click', () => {
        createElement.style.textDecoration = 'line-through';
    
    });

    createElement.addEventListener('dblclick', () => {
        addList.removeChild(createElement);

       
    });
});
