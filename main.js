const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    icon: './key.ico',
    resizable:false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true, 
    }
  })

  win.loadFile('index.html')
  win.setMenu(null)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
