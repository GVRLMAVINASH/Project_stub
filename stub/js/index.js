function signin() {
    document.getElementById('simodal').style.display='block';
}
    
function signup() {
    document.getElementById('sumodal').style.display='block';
}

function closec() {
    document.getElementById('simodal').style.display='none';
    document.getElementById('sumodal').style.display='none';
    document.getElementById('createnew').style.display='none';
}

function openSignUpButton(){
    document.getElementById('sumodal').style.display='block';
}
function createpost()
{
    document.getElementById('createnew').style.display='block';
}
function Allposts(){
    window.location.href= "./html/bloglist.html";
}
