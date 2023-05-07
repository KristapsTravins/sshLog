const { exec } = require("child_process");
const fs = require('fs');
setInterval(()=>{
    exec("who -a", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        const pattern = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g;
        let match;
        fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
        
        
            obj = JSON.parse(data); //now it an object
            while ((match = pattern.exec(stdout)) !== null) {
                obj.table.push(match[0]); //add some data
            }
            let dupes = [... new Set(obj.table)];
            obj.table = dupes;
            obj.updated = new Date().toLocaleString();
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('data.json', json, 'utf8',()=>{}); // write it back

        
        }
        });
    });
}, 9000);
















/* 
const subject = "system boot  1970-01-01 03:00 pi       + tty7         2023-05-06 02:21  old          447 (:0) LOGIN      ttyAMA0      2023-05-06 02:21               402 id=AMA0 pi       - tty1         2023-05-06 02:21  old          466 run-level 5  2023-05-06 02:22 pi       + pts/0        2023-05-07 12:28   .          9088 (212.3.196.37) pi       + pts/1        2023-05-07 12:29   .          9387 (192.168.88.219)";
 
const pattern = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g;
 
console.log("Available IP Addresses in the Given String Are:");
 

let match;
while ((match = pattern.exec(subject)) !== null) {
  console.log(match[0]);
} */