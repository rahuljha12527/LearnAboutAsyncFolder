const fs=require('fs');


fs.writeFile("./read.js","console.log('hello')",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('finised writing');
    }
})

// fs.readFile("./read.js","utf8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('data');
//     }
// })
//console.log('hi');

// let content=fs.readFileSync("./read.js",{encoding:"utf8"});

// console.log(content);


// fs.readFileSync("./read.js")



// try{
//     fs.unlinkSync('./toBeDeleted.txt')

// }catch(e){
//     console.log(e)
// }finally{
//     console.log('done sync delete')
// }




console.log('after');

