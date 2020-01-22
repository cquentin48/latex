const electron = require('electron');

const {app, shell, ipcMain} = electron;

let menuTemplate = function() {
  return [
    {
      label: 'Fichier',
      submenu: [
        {
          label: 'Nouveau...',
          accelerator: 'CmdOrCtrl+N',
          click: function () {
            //Create new document here
          }
        },
        {
          label: 'Sauvegarder',
          accelerator: 'CmdOrCtrl+S',
          click: function () {
            //Save here file progress
          }
        },
        {
          label: 'Sauvegarder sous...',
          accelerator: 'CmdOrCtrl+Maj+S',
          click: function () {
            //Save here file progress
          }
        },
        {
          label: 'Préférences...',
          accelerator: 'CmdOrCtrl+O',
          click: function () {
            //Edit preferences
          }
        },
        {
          label: 'Quitter', accelerator: 'CmdOrCtrl+Q',
          click: function () {
            app.quit()  // This is standart function to quit app.
          }
        }
      ]
    },
    {
      label: 'Edition',
      submenu: [
        {
          label: 'About App',
          click: function () {
            ipcMain.emit('show-about-window-event') // In such way we can trigger function in the main process
          }
        },
        {
          label: 'Reload', accelerator: 'CmdOrCtrl+R',
          click: function (item, focusedWindow) {
            focusedWindow.reload(); // reload the page
          }
        }
      ]
    },
    {
      label: 'Selection',
      submenu: [
        {
          label: 'Rechercher...',
          accelerator: 'CmdOrCtrl+F',
          click: function () {
            
          }
        },
        {
          label: 'Remplacer...',
          accelerator: 'CmdOrCtrl+R',
          click: function () {
            
          }
        },
        {
          label: 'Aller à...',
          accelerator: 'CmdOrCtrl+G',
          click: function () {
            
          }
        },
        { type: 'separator' },
        {
          label: 'Tout sélectionner',
          accelerator: 'CmdOrCtrl+A',
          click: function () {
            
          }
        }
      ]
    },
    {
      label: 'Vue'    
    },
    {
      label: 'Mise en page'
    },
    {
      label: 'Aide'
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'View Licence',
          click: function() {
            shell.openExternal('https://github.com/DmytroVasin/TimeTracker/blob/master/LICENSE');
          }
        },
        { type: 'separator' },
        { label: 'Version 1.0.0-alpha.6', enabled: 'FALSE' }
      ]
    }
  ]
}

module.exports = menuTemplate