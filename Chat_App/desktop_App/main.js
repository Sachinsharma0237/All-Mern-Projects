const { app, BrowserWindow } = require('electron')

function createWindow () {
const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // node enable
      enableRemoteModule:true
    }
  });
  win.removeMenu();
  win.loadFile('index.html').then(function(){
  win.maximize();
      //win.webContents.openDevTools();
  })
}

app.whenReady().then(createWindow)