let mas=['nastya', 'vadim', 'alina'];
let [girl, boy]=mas;
console.log(girl);
console.log(boy);
let names=[];
if(mas.length-2<2){
    names[0]=mas[2]
    names[1]= "alex"
    console.log(names)
}else { 
    for(i=2; i<mas.length; i++){
    names=mas[i];
    console.log(names);
}
}
