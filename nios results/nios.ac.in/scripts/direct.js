function giveWarning(messageAreaID,messageStr)
{
    warningBoxNode = document.getElementById(messageAreaID);
    document.getElementById(messageAreaID).style.visibility = "visible";
    warningBoxNode.textContent = messageStr;
    warningBoxNode.innerHTML = messageStr;
    return;
}

function setVisibility(id,visibility,text)
{
    document.getElementById(id).style.display = visibility;
    //giveWarning(id,text);
}


function chktreasurer1(field,id,messageAreaID,messageStr){
if(!chkbadchar2(field) || !chkchar2(field)){
document.getElementById(id).className='errorfields';
document.getElementById(id).setAttribute("aria-invalid", "true");
document.getElementById(messageAreaID).style.visibility = "visible";
document.getElementById(messageAreaID).innerHTML = messageStr;
document.getElementById(messageAreaID).className='red';
}else{
document.getElementById(id).className='';
document.getElementById(id).setAttribute("aria-invalid", "false");
document.getElementById(messageAreaID).className='';
document.getElementById(messageAreaID).innerHTML = '';
}
}

function chktreasurer2(field,id,messageAreaID,messageStr){
if(!chkbadchar2(field) || !chkint(field)){
document.getElementById(id).className='errorfields';
document.getElementById(id).setAttribute("aria-invalid", "true");
document.getElementById(messageAreaID).style.visibility = "visible";
document.getElementById(messageAreaID).innerHTML = messageStr;
document.getElementById(messageAreaID).className='red';
}else{
document.getElementById(id).className='';
document.getElementById(id).setAttribute("aria-invalid", "false");
document.getElementById(messageAreaID).className='';
document.getElementById(messageAreaID).innerHTML = '';
}
}

function chktreasurer7(field, id, messageAreaID, messageStr) {
    if (!chkaddress(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'red';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}

function chktreasurer3(field,id,messageAreaID,messageStr){
if (!chksuggestion(field)) {
document.getElementById(id).className='errorfields';
document.getElementById(id).setAttribute("aria-invalid", "true");
document.getElementById(messageAreaID).style.visibility = "visible";
document.getElementById(messageAreaID).innerHTML = messageStr;
document.getElementById(messageAreaID).className='red';
}else{
document.getElementById(id).className='';
document.getElementById(id).setAttribute("aria-invalid", "false");
document.getElementById(messageAreaID).className='';
document.getElementById(messageAreaID).innerHTML = '';
}
}

function chktreasurer4(field,id,messageAreaID,messageStr) {
    if (!chkmail(field)) {
document.getElementById(id).className = 'errorfields';
document.getElementById(id).setAttribute("aria-invalid", "true");
document.getElementById(messageAreaID).style.visibility = "visible";
document.getElementById(messageAreaID).innerHTML = messageStr;
document.getElementById(messageAreaID).className = 'errormessage';
} else {
document.getElementById(id).className = '';
document.getElementById(id).setAttribute("aria-invalid", "false");
document.getElementById(messageAreaID).className = '';
document.getElementById(messageAreaID).innerHTML = '';
}
}

function chktreasurer5(field, id, messageAreaID, messageStr) {
    if (!chkquery(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'red';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}

function chktreasurer6(field, id, messageAreaID, messageStr) {
    if (!chkenrol(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'red';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer8(field, id, messageAreaID, messageStr) {
    if (!chkint(field) || !chkrollno(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer9(field, id, messageAreaID, messageStr) {
    if (!chkint(field) || !chkaicode(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer10(field, id, messageAreaID, messageStr) {
    if (!chkint(field) || !chkcentrecode(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer11(field, id, messageAreaID, messageStr) {
    if (!chkenrol(field) || !chkcentrecode(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer12(field, id, messageAreaID, messageStr) {
    if (!chkint(field) || !chkstudycentreai(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer13(field, id, messageAreaID, messageStr) {
    if (!chkenrol(field) || !chkaa(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer14(field, id, messageAreaID, messageStr) {
    if (!chkint(field) || !chkoderno(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'ariaerror';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer15(field, id, messageAreaID, messageStr) {
    if (!chkint(field) || !chkstudycentreavi(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer16(field, id, messageAreaID, messageStr) {
    if (!chkint(field) || !chkresultrno(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer29(field, id, messageAreaID, messageStr) {
    if (!chkintp(field) || !chkaino(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer28(field, id, messageAreaID, messageStr) {
    if (!chkenrol(field) || !chkaino(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer30(field, id, messageAreaID, messageStr) {
    if (!chkenrol(field) || !chkexcode(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer17(field, id, messageAreaID, messageStr) {
    if (!chkchar2(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}

function chktreasurer18(field, id, messageAreaID, messageStr) {
    if (!chkchar3(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
function chktreasurer19(field, id, messageAreaID, messageStr) {
    if (!chkchar3(field) || !chkpin(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}

function chk88(field, id, messageAreaID, messageStr) {
    if (!chkint(field) || !chknlma(field)) {
        document.getElementById(id).className = 'errorfields';
        document.getElementById(id).setAttribute("aria-invalid", "true");
        document.getElementById(messageAreaID).style.visibility = "visible";
        document.getElementById(messageAreaID).innerHTML = messageStr;
        document.getElementById(messageAreaID).className = 'errormessage';
    } else {
        document.getElementById(id).className = '';
        document.getElementById(id).setAttribute("aria-invalid", "false");
        document.getElementById(messageAreaID).className = '';
        document.getElementById(messageAreaID).innerHTML = '';
    }
}
