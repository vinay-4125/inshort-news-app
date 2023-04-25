const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
    title: "Inshort News App",
    icon: __dirname + "./images/favicon-32x32.png",
  });

  if (app.isPackaged) {
    mainWindow.loadFile("index.html"); // prod
  } else {
    mainWindow.loadURL("http://localhost:3000"); // dev
  }
};
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
