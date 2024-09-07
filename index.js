//储存待办事项
const todos = [
    { text:'吃饭', done:false },
    { text:'睡觉', done:false },
    { text:'打豆12', done:true },
];

function loadTodos(){
const todolistUl = document.querySelector('.todo-list');
const arr = [];

todos.forEach(function(todo , index) {  
    arr.push(
        
        '<div class="todo-unt" >'+
        '     <input class="toggle" type="checkbox" '+ (todo.done ? 'checked':'')+'>' +
        '     <lable class='+ (todo.done ? 'completed':'')+'> '+todo.text +'</lable>' +
        '     <input type="button" data-index=" '+ index+' " class="distory" value="删除" ></button>' +
        '</div>' 
    );
});
todolistUl.innerHTML = arr.join('');
}
loadTodos()
//将表单内容输出至todos
function addToList() {
    const inputField = document.getElementById("todo");
    const inputValue = inputField.value;
    if (inputValue) {
        todos.unshift({
            text: inputField.value,
            done: false 
        });
        inputField.value = '';
        loadTodos()
    };
};
//删除所选表单
const todolistUl = document.querySelector('.todo-list');
todolistUl.onclick = function(e){
    if (e.target.matches('.distory')) {
        const index = e.target.dataset.index;
        todos.splice(index,1);
        loadTodos();
    };
};
//完成划线

