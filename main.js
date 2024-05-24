let fontType = document.getElementById('fontFamily');
let fontColor = document.getElementById('fontColor');
let fontSize = document.getElementById('fontSize');
let text = document.querySelector('.text');

onStart();

fontType.addEventListener('change', () => {
    localStorage.fType = fontType.value;
    applyChanges();
});

fontColor.addEventListener('change', () => {
    localStorage.fColor = fontColor.value;
    applyChanges();
});

fontSize.addEventListener('change', () => {
    localStorage.fSize = fontSize.value;
    applyChanges();
});

function onStart() {
    if (!localStorage.fType) {
        localStorage.fType = 'Arial';
    }
    
    if (!localStorage.fColor) {
        localStorage.fColor = 'black';
    }
    
    if (!localStorage.fSize) {
        localStorage.fSize = '16';
    }
    
    fontType.value = localStorage.fType;
    fontColor.value = localStorage.fColor;
    fontSize.value = localStorage.fSize;
    applyChanges();
}

function applyChanges() {
    text.style.fontFamily = localStorage.fType;
    text.style.color = localStorage.fColor;
    text.style.fontSize = `${localStorage.fSize}px`;
}

// localStorage.clear()
