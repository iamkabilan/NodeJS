const fs=require('fs');
var flink=fs.promises;

//Sync
const first=fs.readFileSync('first.txt');
const second=fs.readFileSync('second.txt');

fs.writeFileSync("second.txt","Hello World "+first,{flag: 'a'});
console.log(first);


//Async
fs.readFile("first.txt",'utf8',(err,result)=> {
    if(err) {
        console.log(err);
        return;
    }
    console.log(result);
})

