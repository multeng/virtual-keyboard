//Добавляем стили
function addCss() {
    const head = document.getElementsByTagName('head')[0];
    const tagLink = document.createElement('link');
    tagLink.rel = 'stylesheet';
    tagLink.type = 'text/css';
    tagLink.href = './style.css';
    head.appendChild(tagLink);
}
addCss();

// Добавляем форму
function addForm() {
    const body = document.getElementsByTagName('body')[0];
    const divForm = document.createElement('div');
    divForm.classList.add('form-container');
    const textArea = document.createElement('textarea');
    textArea.classList.add('form-container__textarea')
    divForm.appendChild(textArea);
    body.appendChild(divForm);
}
addForm();

// Добавляем контейнер для клавиатуры
function addKeyboard() {
    const body = document.getElementsByTagName('body')[0];
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    body.appendChild(keyboard);
}
addKeyboard();

// Добавляем описание
function addDescription() { 
    const body = document.getElementsByTagName('body')[0];
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description-container');
    const description = document.createElement('p');
    description.classList.add('description-container__text');
    description.innerHTML += 'Для смены языка нужно нажать левый Ctrl, как на виртуальной клавиатуре, так и на реальной.<br> Так же нужно сменить язык в операционной системе отдельно.'
    description.innerHTML += '<br> Клавиатура писалась на windows.'
    descriptionDiv.appendChild(description);
    body.appendChild(descriptionDiv);
}
addDescription()

//Массив с данными кнопок
buttons = [[
    { key: 'Backquote', type: 'letter', valueEn: '`', shiftValueEn: '~', valueRu: 'ё', shiftValueRu: 'Ё' },
    { key: 'Digit1', type: 'digit', valueEn: '1', shiftValueEn: '!', valueRu: '1', shiftValueRu: '!' },
    { key: 'Digit2', type: 'digit', valueEn: '2', shiftValueEn: '@', valueRu: '2', shiftValueRu: '"' },
    { key: 'Digit3', type: 'digit', valueEn: '3', shiftValueEn: '#', valueRu: '3', shiftValueRu: '№' },
    { key: 'Digit4', type: 'digit', valueEn: '4', shiftValueEn: '$', valueRu: '4', shiftValueRu: ';' },
    { key: 'Digit5', type: 'digit', valueEn: '5', shiftValueEn: '%', valueRu: '5', shiftValueRu: '%' },
    { key: 'Digit6', type: 'digit', valueEn: '6', shiftValueEn: '^', valueRu: '6', shiftValueRu: ':' },
    { key: 'Digit7', type: 'digit', valueEn: '7', shiftValueEn: '&', valueRu: '7', shiftValueRu: '?' },
    { key: 'Digit8', type: 'digit', valueEn: '8', shiftValueEn: '*', valueRu: '8', shiftValueRu: '*' },
    { key: 'Digit9', type: 'digit', valueEn: '9', shiftValueEn: '(', valueRu: '9', shiftValueRu: '(' },
    { key: 'Digit0', type: 'digit', valueEn: '0', shiftValueEn: ')', valueRu: '0', shiftValueRu: ')' },
    { key: 'Minus', type: 'letter', valueEn: '-', shiftValueEn: '_', valueRu: '-', shiftValueRu: '_' },
    { key: 'Equal', type: 'letter', valueEn: '=', shiftValueEn: '+', valueRu: '=', shiftValueRu: '+' },
    { key: 'Backspace', type: 'service', valueEn: 'Backspace', shiftValueEn: 'Backspace', valueRu: 'Backspace', shiftValueRu: 'Backspace' }
],
[
    { key: 'Tab', type: 'service', valueEn: 'Tab', shiftValueEn: 'Tab', valueRu: 'Tab', shiftValueRu: 'Tab' },
    { key: 'KeyQ', type: 'letter', valueEn: 'q', shiftValueEn: 'Q', valueRu: 'й', shiftValueRu: 'Й' },
    { key: 'KeyW', type: 'letter', valueEn: 'w', shiftValueEn: 'W', valueRu: 'ц', shiftValueRu: 'Ц' },
    { key: 'KeyE', type: 'letter', valueEn: 'e', shiftValueEn: 'E', valueRu: 'у', shiftValueRu: 'У' },
    { key: 'KeyR', type: 'letter', valueEn: 'r', shiftValueEn: 'R', valueRu: 'к', shiftValueRu: 'К' },
    { key: 'KeyT', type: 'letter', valueEn: 't', shiftValueEn: 'T', valueRu: 'е', shiftValueRu: 'Е' },
    { key: 'KeyY', type: 'letter', valueEn: 'y', shiftValueEn: 'Y', valueRu: 'н', shiftValueRu: 'Н' },
    { key: 'KeyU', type: 'letter', valueEn: 'u', shiftValueEn: 'U', valueRu: 'г', shiftValueRu: 'Г' },
    { key: 'KeyI', type: 'letter', valueEn: 'i', shiftValueEn: 'I', valueRu: 'ш', shiftValueRu: 'Ш' },
    { key: 'KeyO', type: 'letter', valueEn: 'o', shiftValueEn: 'O', valueRu: 'щ', shiftValueRu: 'Щ' },
    { key: 'KeyP', type: 'letter', valueEn: 'p', shiftValueEn: 'P', valueRu: 'з', shiftValueRu: 'З' },
    { key: 'BracketLeft', type: 'letter', valueEn: '[', shiftValueEn: '{', valueRu: 'х', shiftValueRu: 'Х' },
    { key: 'BracketRight', type: 'letter', valueEn: ']', shiftValueEn: '}', valueRu: 'ъ', shiftValueRu: 'Ъ' },
    { key: 'Backslash', type: 'letter', valueEn: '\\', shiftValueEn: '|', valueRu: '\\', shiftValueRu: '/' },
    { key: 'Delete', type: 'service', valueEn: 'Del', shiftValueEn: 'Del', valueRu: 'Del', shiftValueRu: 'Del' },
],
[
    { key: 'CapsLock', type: 'service', valueEn: 'CapsLock', shiftValueEn: 'CapsLock', valueRu: 'CapsLock', shiftValueRu: 'CapsLock' },
    { key: 'KeyA', type: 'letter', valueEn: 'a', shiftValueEn: 'A', valueRu: 'ф', shiftValueRu: 'Ф' },
    { key: 'KeyS', type: 'letter', valueEn: 's', shiftValueEn: 'S', valueRu: 'ы', shiftValueRu: 'Ы' },
    { key: 'KeyD', type: 'letter', valueEn: 'd', shiftValueEn: 'D', valueRu: 'в', shiftValueRu: 'В' },
    { key: 'KeyF', type: 'letter', valueEn: 'f', shiftValueEn: 'F', valueRu: 'а', shiftValueRu: 'А' },
    { key: 'KeyG', type: 'letter', valueEn: 'g', shiftValueEn: 'G', valueRu: 'п', shiftValueRu: 'П' },
    { key: 'KeyH', type: 'letter', valueEn: 'h', shiftValueEn: 'H', valueRu: 'р', shiftValueRu: 'Р' },
    { key: 'KeyJ', type: 'letter', valueEn: 'j', shiftValueEn: 'J', valueRu: 'о', shiftValueRu: 'O' },
    { key: 'KeyK', type: 'letter', valueEn: 'k', shiftValueEn: 'K', valueRu: 'л', shiftValueRu: 'Л' },
    { key: 'KeyL', type: 'letter', valueEn: 'l', shiftValueEn: 'L', valueRu: 'д', shiftValueRu: 'Д' },
    { key: 'Semicolon', type: 'letter', valueEn: ';', shiftValueEn: ':', valueRu: 'ж', shiftValueRu: 'Ж' },
    { key: 'Quote', type: 'letter', valueEn: '\'', shiftValueEn: '"', valueRu: 'э', shiftValueRu: 'Э' },
    { key: 'Enter', type: 'service', valueEn: 'Enter', shiftValueEn: 'Enter', valueRu: 'Enter', shiftValueRu: 'Enter' }
],
[
    { key: 'ShiftLeft', type: 'service', valueEn: 'Shift', shiftValueEn: 'Shift', valueRu: 'Shift', shiftValueRu: 'Shift' },
    { key: 'KeyZ', type: 'letter', valueEn: 'z', shiftValueEn: 'Z', valueRu: 'я', shiftValueRu: 'Я' },
    { key: 'KeyX', type: 'letter', valueEn: 'x', shiftValueEn: 'X', valueRu: 'ч', shiftValueRu: 'Ч' },
    { key: 'KeyC', type: 'letter', valueEn: 'c', shiftValueEn: 'C', valueRu: 'с', shiftValueRu: 'С' },
    { key: 'KeyV', type: 'letter', valueEn: 'v', shiftValueEn: 'V', valueRu: 'м', shiftValueRu: 'М' },
    { key: 'KeyB', type: 'letter', valueEn: 'b', shiftValueEn: 'B', valueRu: 'и', shiftValueRu: 'И' },
    { key: 'KeyN', type: 'letter', valueEn: 'n', shiftValueEn: 'N', valueRu: 'т', shiftValueRu: 'Т' },
    { key: 'KeyM', type: 'letter', valueEn: 'm', shiftValueEn: 'M', valueRu: 'ь', shiftValueRu: 'Ь' },
    { key: 'Comma', type: 'letter', valueEn: ',', shiftValueEn: '<', valueRu: 'б', shiftValueRu: 'Б' },
    { key: 'Period', type: 'letter', valueEn: '.', shiftValueEn: '>', valueRu: 'ю', shiftValueRu: 'Ю' },
    { key: 'Slash', type: 'letter', valueEn: '/', shiftValueEn: '?', valueRu: '.', shiftValueRu: ',' },
    { key: 'ArrowUp', type: 'letter', valueEn: 'Up', shiftValueEn: 'Up', valueRu: 'Up', shiftValueRu: 'Up' },
    { key: 'ShiftRight', type: 'service', valueEn: 'Shift', shiftValueEn: 'Shift', valueRu: 'Shift', shiftValueRu: 'Shift' }
],
[
    { key: 'ControlLeft', type: 'service', valueEn: 'Ctrl', shiftValueEn: 'Ctrl', valueRu: 'Ctrl', shiftValueRu: 'Ctrl' },
    { key: 'MetaLeft', type: 'service', valueEn: 'Win', shiftValueEn: 'Win', valueRu: 'Win', shiftValueRu: 'Win' },
    { key: 'AltLeft', type: 'service', valueEn: 'Alt', shiftValueEn: 'Alt', valueRu: 'Alt', shiftValueRu: 'Alt' },
    { key: 'Space', type: 'service', valueEn: 'Space', shiftValueEn: 'Space', valueRu: 'Space', shiftValueRu: 'Space' },
    { key: 'AltRight', type: 'service', valueEn: 'Alt', shiftValueEn: 'Alt', valueRu: 'Alt', shiftValueRu: 'Alt' },
    { key: 'ControlRight', type: 'service', valueEn: 'Ctrl', shiftValueEn: 'Ctrl', valueRu: 'Ctrl', shiftValueRu: 'Ctrl' },
    { key: 'ArrowLeft', type: 'service', valueEn: 'Left', shiftValueEn: 'Left', valueRu: 'Left', shiftValueRu: 'Left' },
    { key: 'ArrowDown', type: 'service', valueEn: 'Down', shiftValueEn: 'Down', valueRu: 'Down', shiftValueRu: 'Down' },
    { key: 'ArrowRight', type: 'service', valueEn: 'Right', shiftValueEn: 'Right', valueRu: 'Right', shiftValueRu: 'Right' },
]];

//используем localStorage для запоминания языка клавиатуры
if (localStorage.getItem('lang') === 'en') {
    localStorage.setItem('lang', 'en');
} else {
    localStorage.setItem('lang', 'ru');
}
let lang = localStorage.getItem('lang');
let caps = false;
let shift = false;
//Рисуем клавиатуру
function makeKeyboard(array) {
    array.forEach((secondArray, index) => {
        makeDiv(index);
        secondArray.forEach(button => {
            let value;
            if (lang === 'ru') {
                value = button.valueRu;
            } else if (lang === 'en') {
                value = button.valueEn;
            }
            setButton(index, makeButton(button.key, button.type, value));
        });
    });
}
makeKeyboard(buttons);

//Функиця делает контейнер с рядом клавиш внутри контейнера keyboard
function makeDiv(rowNumber) {
    const keyboard = document.querySelector('.keyboard');
    const row = document.createElement('div');
    row.classList.add(`row-${rowNumber + 1}`);
    keyboard.appendChild(row);
}

//Функция создает кнопку с data-* полями
function makeButton(key, type, value) {
    const button = document.createElement('span');
    button.classList.add('button');
    button.setAttribute('data-key', key);
    button.setAttribute('data-type', type);
    button.innerText = value;
    return button;
};

//Функция устанавливает кнопку в ряд
function setButton(rowNumber, button) {
    const row = document.querySelector(`.row-${rowNumber + 1}`);
    row.appendChild(button);
}

//Обработчик событий
function handler() {
    const body = document.getElementsByTagName('body')[0];
    //Обрабатываем keydown
    body.addEventListener('keydown', event => {
        const button = document.querySelector(`span[data-key=${event.code}]`);
        button.classList.add('button__color');
        if (event.code == 'ControlLeft') {
            if (lang == 'ru') {
                lang = 'en';
                localStorage.setItem('lang', 'en')
            } else if (lang == 'en') {
                lang = 'ru';
                localStorage.setItem('lang', 'ru')
            }
            reMakeKeyboard(buttons);
        }
        if (event.code == 'CapsLock') {
            caps ? caps = false : caps = true;
            reMakeKeyboard(buttons);
        }
        if (event.code == 'ShiftLeft') {
            shift ? shift = false : shift = true;
            reMakeKeyboard(buttons);
        }
        if (event.code == 'ShiftRight') {
            shift ? shift = false : shift = true;
            reMakeKeyboard(buttons);
        }
    });
    //обрабатываем keyup
    body.addEventListener('keyup', event => {
        const button = document.querySelector(`span[data-key=${event.code}]`);
        button.classList.remove('button__color');
        if (event.code == 'ShiftLeft') {
            shift ? shift = false : shift = true;
            reMakeKeyboard(buttons);
        }
        if (event.code == 'ShiftRight') {
            shift ? shift = false : shift = true;
            reMakeKeyboard(buttons);
        }
    });

    //обработчик мыши
    body.addEventListener('mousedown', event => {
        const textArea = document.querySelector('.form-container__textarea');
        let textAreaContent = textArea.value;
        let pressedButton = event.target;
        let typeButton = pressedButton.getAttribute('data-type');
        let valueButton = pressedButton.innerText;
        if (typeButton === 'letter' || typeButton === 'digit' || typeButton === 'service') {
            pressedButton.classList.add('button__color');
        }
        if (typeButton === 'letter' || typeButton === 'digit') {
            textArea.value += valueButton;
        }
        if (typeButton === 'service') {
            let serviceTypeButton = pressedButton.getAttribute('data-key');
            if (serviceTypeButton === 'Tab') {
                textArea.value += '\t';
            } else if (serviceTypeButton === 'Enter') {
                textArea.value += '\n';
            } else if (serviceTypeButton === 'CapsLock') {
                caps ? caps = false : caps = true;
                reMakeKeyboard(buttons);
            } else if (serviceTypeButton === 'ControlLeft') {
                if (lang == 'ru') {
                    lang = 'en';
                    localStorage.setItem('lang', 'en')
                } else if (lang == 'en') {
                    lang = 'ru';
                    localStorage.setItem('lang', 'ru')
                }
                reMakeKeyboard(buttons);
            } else if (serviceTypeButton === 'Backspace') {
                textArea.value = textAreaContent.slice(0, textArea.selectionStart - 1) + textAreaContent.slice(textArea.selectionStart, textAreaContent.length);
            } else if (serviceTypeButton === 'Delete') {
                textArea.value = textAreaContent.slice(0, textArea.selectionStart) + textAreaContent.slice(textArea.selectionStart + 1, textAreaContent.length);
            } else if (serviceTypeButton === 'Space') {
                textArea.value += ' ';
            } else if (serviceTypeButton === 'ShiftLeft') {
                shift ? shift = false : shift = true;
                reMakeKeyboard(buttons);
            } else if (serviceTypeButton === 'ShiftRight') {
                shift ? shift = false : shift = true;
                reMakeKeyboard(buttons);
            }
        }
    });
    body.addEventListener('mouseup', event => {
        let pressedButton = event.target;
        let typeButton = pressedButton.getAttribute('data-type');
        if (typeButton === 'letter' || typeButton === 'digit' || typeButton === 'service') {
            pressedButton.classList.remove('button__color');
        }
    });
}
handler()


//перерисовываем клавиатуру в зависимости от языка и регистра
function reMakeKeyboard(array) {
    array.forEach(secondArray => {
        secondArray.forEach(element => {
            let button = document.querySelector(`span[data-key=${element.key}]`);
            let type = button.getAttribute('data-type');
            if (lang == 'ru' && !caps && !shift) {
                button.innerText = element.valueRu;
            } else if (lang == 'ru' && caps && !shift && type === 'letter') {
                button.innerText = element.shiftValueRu;
            } else if (lang == 'ru' && caps && shift) {
                if (type === 'letter') {
                    button.innerText = element.valueRu;
                } else if (type === 'digit') {
                    button.innerText = element.shiftValueRu;
                }
            } else if (lang == 'ru' && shift) {
                button.innerText = element.shiftValueRu;
            }
            if (lang == 'en' && !caps && !shift) {
                button.innerText = element.valueEn;
            } else if (lang == 'en' && caps && !shift && type === 'letter') {
                button.innerText = element.shiftValueEn;
            } else if (lang == 'en' && caps && shift) {
                if (type === 'letter') {
                    button.innerText = element.valueEn;
                } else if (type === 'digit') {
                    button.innerText = element.shiftValueEn;
                }
            } else if (lang == 'en' && shift) {
                button.innerText = element.shiftValueEn;
            }
        })
    })
}
