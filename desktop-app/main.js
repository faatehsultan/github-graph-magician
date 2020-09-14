const jQuery = require('jquery');
const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    useContentSize: true,
    height: 800,
    minWidth: 750,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: "app/assets/favicon.png",
    autoHideMenuBar: true,
    backgroundColor: "#bdc3c7",
  });

  // and load the index.html of the app.
  win.loadFile("app/index.html");
}

app.whenReady().then(createWindow);


