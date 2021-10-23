// aray.push new input value to add a new task
let toDos = [
  { name: "code", isComplete: false}
];

//functions
const triggerCompleted = (i) => {
  //if true make it false
  toDos[i].isComplete = !toDos[i].isComplete;
  renderList();
};

//deleteItem func
const deleteItem = (i) => {
  toDos.splice(i, 1);
  renderList();
};

//editName
const editName = (i) => {
  $("#list-" + i).html(`<input id='inputNew-${i}' type="text/>`);
  $("#inputNew-" + i).val(toDos[i].name); // to give the input previuse value before editing
  $("#inputNew-" + i).change(() => {
    toDos[i].name = $("#inputNew-" + i).val();
    renderList();
  });
};

// main function renderList()
const renderList = () => {
  $("#myList").html(""); //delete everything and start over
  let countUn = 0;
  toDos.forEach((item, i) => {
    $("#myList").append(`<li id='list-${i}'>
        <span id= "listText -${i}"> ${item.name} </span>
        <button id="editBtn" onclick="editName(${i})">EDIT</button>
        <button id="deleteBtn-${i}">REMOVE</button>
         </li>`); //end of append

    if (item.isComplete === false) {
      countUn++;
    } else {
      $("#listText-" + i).addClass("completed");
    }

    // add event for rtigger, delet and update
    $("#listText-" + i).click(() => {
      triggerCompleted(i);
    });
    $("#deleteBtn-" + i).click(() => {
      deleteItem(i);
    });
  });
  //end of forEach
  $("#completedTask").text(`You have ${countUn} todo left.`);
};
renderList();

const addToList = () => {
  const inputVal = $("#inputAdd").val();
  // { name: "wake up", isComplete: false }
  let newObj = { name: inputVal, isComplete: false };
  toDos.push(newObj);
  $("#inputAdd").val("");
  renderList();
};

$("#addBtn").click(addToList);

/////

$("clearAllBtn").click(() => {
  toDos = [];
  renderList();
});
/////
$("#clearCompleteBtn").click(() => {
  toDos = toDos.filter((item) => {
    return !item.isComplete;
  });
  renderList();
});
