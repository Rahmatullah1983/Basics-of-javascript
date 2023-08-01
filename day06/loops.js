//forloops
let week =[ 'Saturday', 'Sundy', 'Monday','tuesday', 'wednesday','thursday', 'Friday', ]
for (a = 0; a <=week.length; a++){
    console.log(week[a]);
    
    if(a===4){
       console.log('hey you hit the mark of wednesday');
       continue;
       
    }
}
const names = [ 'Ali', 'Ahmed', 'Adnan', 'Babar']

for(let name of names){
    console.log(name);
    console.log(names.indexOf(name));
}
        
    
    //spesfic for arrys

names.forEach(function(name,index) {
    console.log(index, name);
})
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
