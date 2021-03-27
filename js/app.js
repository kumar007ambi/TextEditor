//Function UpdateText
function updateText() {
    let text = document.getElementById("text-input").value;
    document.getElementById("text-output").innerText = text;

}

//MakeBold Function
function makeBold(elem) {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
}

//MakeItalic Function
function makeItalic(elem) {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
}

//Make UnderLine Function
function makeUnderline(elem) {
    elem.classList.toggle('active');
    let formattedText = document.getElementById('text-output');
    if (formattedText.classList.contains('underline')) {
        formattedText.classList.remove('underline');
    } else {
        formattedText.classList.add('underline');
    }
    // document.getElementById('text-output').classList.toggle('underline');

}

//Alignment Function
function alignText(elem, alignType) {
    // CODE GOES HERE
    document.getElementById('text-output').style.textAlign = alignType;
    let buttonsList = document.getElementsByClassName('align');
    for (let i = 0; i < buttonsList.length; i++) {
        buttonsList[i].classList.remove('active');
    }
    elem.classList.toggle('active');

}