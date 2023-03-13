const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let win;

// Listen for app to be ready

app.on("ready", function () {
  // Create new window
  win = new BrowserWindow({});
  // Load HTML file into window
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      protocol: "file:",
      slashes: true,
    })
  );
});
