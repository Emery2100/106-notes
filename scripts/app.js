function saveTask(){

    //get the values 
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, desc, color, date, status, budget);
    // build an object
    let data = new Task(title, desc, color, date, status, budget);
    console.log(data);

    // dispay the info
    displayTask(data);

    // save to server 


    console.log("Hello im the saveButton")
};

function displayTask(task){
    let render = `<div class = "task" style="border-color:${task.color}">
    <div class="info">
    <h4> ${task.title}</h4>
    <p> ${task.desc}<p>
    </div>
    <label class="status">${task.status} </label>
    <div class="date-budget">
    <label> ${task.date}</label>
    <label> ${task.budget}  </label>
    </div>
    </div>`


    // use the content of the object to render the list section - challenge
    $(".list").append(render);
}


function init(){
    console.log("Hello im the init");
    $("#btnSave").click(saveTask);
};



window.onload = init; // it waits until the css and the html resolve to run the logic

