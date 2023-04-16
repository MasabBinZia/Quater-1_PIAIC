function myCallBack1(text:string){
    console.log(`Purchased  ${text}`);
}
function myCallBack2(text:string){
    console.log(`Purchased  ${text}`);
}

function myCallBack3(text:string){
    console.log(`Purchased  ${text}`);
}


function callingFunction1(intialText:string,callback:(text:string)=>void){
    console.log("Searching");
    console.log("Searching");
    console.log("Searching");
    callback(intialText)
    callingFunction1("Pizza",myCallBack2);
}

function callingFunction2(intialText:string,callback:(text:string)=>void){
    console.log("Searching");
    console.log("Searching");
    console.log("Searching");
    callback(intialText);
    callingFunction1("Pizza",myCallBack3);
}


function callingFunction3(intialText:string,callback:(text:string)=>void){
    console.log("Searching");
    console.log("Searching");
    console.log("Searching");
    callback(intialText);
}



