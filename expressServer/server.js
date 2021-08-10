const express = require('express');
const os = require('os');
const cp = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res) {
  res.sendFile('index.html');
});

app.get('/api/arch', (req, res) => {
  res.end(`Architecture: ${os.arch}`);
});

app.get('/api/os', (req, res) => {
  res.end(`Operating System: ${os.type}`);
});

app.get('/api/cpus', (req, res) => {
  res.end(`Cpus: ${os.cpus[0].model} ${os.cpus.length} cores`);
});

app.get('/api/ram', (req, res) => {
    let free = os.freemem() / 1024 / 1024 / 1024;
    let total = os.totalmem() / 1024 / 1024 /1024;
    res.end(`Free memory: ${Math.floor(free * 100) /100} GB </br>
              Total memory: ${Math.floor(total * 100) /100} GB`);
});

app.get('/api/diskspace', (req, res) => {
  const cp = require('child_process');
  if (process.platform === 'win32') { // Run wmic for Windows.
      cp.exec('wmic logicaldisk get size,freespace,caption', (error, stdout)=>{
          if(error){
              console.error(error); return
          } 
          res.end(`${stdout}`);
      });
      
  } else if(process.platform === 'linux' || process.platform === 'darwin'){ // Run df for Linux/Mac.
      cp.exec('df -h', (error, stdout)=>{
          if(error){
              console.error(error); return
          } 
          res.end(`${stdout}`);
      });
  }
});

app.get('/api/hostname', (req, res) => {
    res.end(`Hostname: ${os.hostname}`);
})

app.listen(port, () => console.log('Listening to port: ', port));