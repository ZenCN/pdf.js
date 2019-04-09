/*阻止事件冒泡及默认行为*/
function stopProp(){
    event.preventDefault();
    event.stopPropagation();
}

/*禁用鼠标*/
function iEsc() {
    stopProp();
    return false;
}

function iRec() {
    stopProp();
    return true;
}

/*禁用键盘*/
function DisableKeys() {
    window.event.returnValue = false;
    iEsc();
}

document.ondragstart = iEsc;
document.onkeydown = DisableKeys;
document.onkeyup = DisableKeys;
document.oncontextmenu = iEsc;
if (typeof document.onselectstart != "undefined")
    document.onselectstart = iEsc;
else {
    document.onmousedown = iEsc;
    document.onmouseup = iRec;
}