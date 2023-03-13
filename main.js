const { app, BrowserWindow, Menu } = require("electron");
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
  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

// Create menu Template
const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add Item",
      },
      {
        label: "Clear Item",
      },
      {
        label: "Quit",
        click() {
          app.quit();
        },
      },
    ],
  },
];
