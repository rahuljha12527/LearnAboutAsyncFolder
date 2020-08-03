const fs=require('fs');

for(let i=0;i<5;i++){
    fs.writeFileSync("movies.txt",
       "Movie" +i + "\n",{
           encoding:"utf8",
           flag:"a+",
           mode: 0o666 
       });
}

console.log("File written successfully 5 times\n");
console.log("The writeen file has the following contests");
console.log(fs.readFileSync("movies.txt","utf8"));