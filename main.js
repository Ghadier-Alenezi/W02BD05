let todoList = [];
// aray.push new input value to add a new task 

$("#addBtn").click(()=>{
    const inputval = $("#input1").val();
    todoList.push(inputval);
});
