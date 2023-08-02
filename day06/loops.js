//while loop
let b =4;
while(b<=40){
    console.log(b);
    b+=4;
}
//do while loop runs any how ones
let c =10;
    do{
        console.log(c);
        b+=4;
    }
    while(c<=3);

//for loop
for(d=0; d<5; d++){
    console.log(d);
}
let week =[ 'Saturday', 'Sundy', 'Monday','tuesday', 'wednesday','thursday', 'Friday', ]
for (a = 0; a <=week.length; a++){
    console.log(week[a]);
    
    if(a===4){
       console.log('hey you hit the mark of wednesday');
       continue;
       
    }
}

    //forEach loop
    //spesfic for arrys
    let day=['Monday', 'Teusday','Wednsday','Thursday','Friday','Saturday'];

    day.forEach(function(item, index){
        console.log( 'day '+index+' is '+ item);
    });
    

    const names = [ 'Ali', 'Ahmed', 'Adnan', 'Babar']

names.forEach(function(name,index) {
    console.log(index, name);
})
    //for of loop

const names = [ 'Ali', 'Ahmed', 'Adnan', 'Babar']

for(let name of names){
    console.log(name);
    console.log(names.indexOf(name));
}
        
    
    
const subjects = [ 'Maths', 'English', 'Urdu', 'science', 'sindhi']
for(a=0; a<= subjects.length; a++){
    
    

}
const user ={
    name:'Rahmatullah',
    caste:'Bugti',
    age:40,

}
for(let x in user){
    console.log(x);
}
console.log(user['name']);
for(let x in user){
    console.log(user[x]);
}
let d =0;
while(a<=50){
    console.log(a);
    a+=5;
}
