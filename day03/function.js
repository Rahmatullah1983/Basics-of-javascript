
const name = 'Rahmatullah Bugti'
function age (a, b){
    alert(a/b);
}
age( 45, 15);
function sum (c, d){

    alert(c * d);

}
sum(5, 15);
function arrow(a, b, c, d ){
    alert(a*b/25/100*10);
}
arrow(80, 30, 40,30);
function greet(){
    let name = prompt('what is you name?');
    console.log('wecome to our website '+ name)
}
greet();
function max(n1, n2){
    if(n1 > n2){
        return n1*10;
    }else{
        return n2/10;
    }
}
let y = max(10, 3);
console.log (y);