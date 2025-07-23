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
    console.log("Hello im the saveButton");
    $.ajax({
        type: "post",
        url: "https://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(response)
        {console.log(response);},
        error: function(error)
        {console.log(error);}
    })
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

// get the content of the https://fsdiapi.azurewebsites.net/api/tasks
// console.log the response from the server
function loadTask(){
$.ajax(
    {
        type: "get",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",
        success: function(response){
            let dataJSON = JSON.parse(response);
            for(let i=0;i<dataJSON.length;i++){
                let currentValue = dataJson[i];
                if(currentValue.name == "David59")
                {
                    displayTask(currentValue);
                }
            }
            console.log(response);
            console.log(dataJSON);
    },
    error: function (error){
        console.log(error);
    }
}
)
}

// render on the list section, only those messages created by you



function testRequest(){
    $.ajax({
        type: "get", 
        url: "https://fsdiapi.azurewebsites.net",
        success: function(response)
        {
            console.log(response);
        },
        error: function(error)
        {
            console.log(error);
        }
    });
}


function init(){
    console.log("Hello im the init");
    $("#btnSave").click(saveTask);
    loadTask();
};



window.onload = init; // it waits until the css and the html resolve to run the logic

