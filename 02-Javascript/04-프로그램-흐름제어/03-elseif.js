const point = 72;

//순차적으로 조건을 판별하면서 가장 처음 만나는 
//참인 조건의 블록을 수행하고 빠져나간다.
if(point > 90){
    console.log("A");
}else if(point > 80){
    console.log("B");
}else if(point > 70){
    console.log("C");
}else if(point > 60){
    console.log("D");
}else {
    console.log("F");
}