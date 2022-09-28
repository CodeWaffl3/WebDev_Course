document.onCopy = event => {
    event.preventDefault();
    event.clipboardData.setData('text/plain','DONDE CREES QUE VAS PILLIN! \n');
}