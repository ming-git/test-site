// document.querySelector('html').onclick = function () {
//     alert('别戳我，我怕疼。');
// }

let myImage = document.querySelector("img")
myImage.onclick = function () {
    let imageSource = myImage.getAttribute('src');
    if (imageSource === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox-icon2.png')
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function(){
    setUserName();
}

function setUserName() {
    let userName = prompt('请输入你的姓名：');
    if (!userName) {
        setUserName();
    } else {
        localStorage.setItem('userName', userName);
        myHeading.textContent = "Mozilla Welcome you, " + userName;
    }
}

if (!localStorage.getItem('userName')) {
    setUserName();
} else {
    let storedName=localStorage.getItem('userName');
    myHeading.textContent = "Mozilla Welcome you, " + storedName;
}
