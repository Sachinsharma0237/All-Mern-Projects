const { app, BrowserWindow } = require('electron');     //object destructuring

const ejse = require('ejs-electron');

app.whenReady().then(createWindow);

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        webContents: true
      }
    })
  
    win.loadFile('index.ejs').then(function(){
        win.maximize();
        win.webContents.openDevTools();
    });
  }