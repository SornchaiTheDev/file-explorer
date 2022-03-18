const { ipcRenderer } = require('electron');

window.electron = {
  openFile: (file) => ipcRenderer.send('open:file', file),
};
