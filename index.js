var result=document.getElementById("result");
function display(number){
    result.value += number;
}
function calculate(){
    var final_num= result.value;
    var final_res= eval(final_num);
    result.value = final_res;
}
function del(){
    result.value = result.value.slice(0,-1);
}
function clr(){
    result.value= "";
}
