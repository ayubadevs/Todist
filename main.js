const todoList = [];

function doSome() {
    let total = '';
    const display = document.querySelector('.content');
    const input = document.querySelector('.input');
    let value = input.value;
    todoList.push(value);

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<P>${todo}</P>`;
        total += html;
        
    }
    display.innerHTML = total;
    input.value = '';
    // console.log(todoList)
};

function overAll() {
    if (event.key === 'Enter') {
        doSome();
    }
};