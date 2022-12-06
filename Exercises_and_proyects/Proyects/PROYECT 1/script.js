document.onCopy = event => {
    event.preventDefault();
    event.clipboardData.setData('text/plain','DONDE CREES QUE VAS PILLIN! \n');
}

const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}