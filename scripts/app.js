function saveTask(){
    console.log("Hello im the saveButton")
};

function init(){
    console.log("Hello im the init");
    $("#btnSave").click(saveTask);
};



window.onload = init; // it waits until the css and the html resolve to run the logic

