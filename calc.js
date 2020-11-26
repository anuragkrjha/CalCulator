function insert(num){
    document.form.textview.value = document.form.textview.value+num

}
function equal(){
    document.form.textview.value = eval(document.form.textview.value)
}
function saaf(){
    document.form.textview.value = "";
}
function peche(){
    var exp = document.form.textview.value
    document.form.textview.value = exp.substring(0, exp.length-1)


}
