
function hello(){
    console.log("Hello there!");
};



function init(){
    console.log("Hello im the init");
    hello();
};



window.onload = init; // it waits until the css and the html resolve to run the logic