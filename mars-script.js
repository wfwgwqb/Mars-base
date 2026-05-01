// Показать нужную страницу, скрыть остальные
function showPage(pageId) {
    // function - создать функцию, блок команд который можно вызывать по имени

    let pages = document.querySelectorAll('.page');
    // let - создать переменную (её можно менять)
    // document - вся веб-страница
    // querySelectorAll - найти все элементы с классом page и сложить в кучу

    for (let i = 0; i < pages.length; i++) {
        // for - цикл, повторять пока условие верно
        // let i = 0 - начать с нуля
        // i < pages.length - повторять пока i меньше количества страниц
        // i++ - увеличить i на 1 после каждого круга

        pages[i].style.display = 'none';
        // pages[i] - страница под номером i
        // style - доступ к стилям элемента
        // display = 'none' - скрыть элемент
    }

    document.getElementById(pageId).style.display = 'block';
    // getElementById - найти ОДИН элемент по его id
    // style.display = 'block' - показать элемент
}

// Лёгкий уровень - правильный выбор
function easyWin() {
    // function - создать функцию (блок кода)

    alert('✅ Успех! Насосы запущены. +50 кредитов.');
    // alert - показать всплывающее окно с сообщением

    showPage('home');
    // showPage - вызвать нашу функцию (переключает страницы)
}

// Лёгкий уровень - неправильный выбор
function easyFail() {
    alert('❌ Ошибка! Неверное действие.');
    // alert - показать окно
}

// Средний уровень - счётчик соединённых проводов
let medCount = 0;
// let - создать переменную
// medCount - имя переменной, хранит число
// = 0 - присвоить начальное значение 0

// Правильный порядок цветов (массив)
const rightOrder = ['red', 'green', 'yellow', 'blue'];
// const - создать переменную которую НЕЛЬЗЯ менять
// [...] - массив (список элементов)
// 'red', 'green' - строки (текст) в кавычках

// Функция соединения провода
function connectWire(color) {
    // color - параметр функции (данные которые приходят при вызове)

    if (color === rightOrder[medCount]) {
        // if - ЕСЛИ условие верно, то делаем что внутри скобок
        // === - строгое сравнение (равно ли?)
        // rightOrder[medCount] - элемент массива под номером medCount

        medCount = medCount + 1;
        // увеличить счётчик на 1

        document.getElementById('med-progress').innerText = 'Осталось: ' + (4 - medCount);
        // innerText - заменить текст внутри элемента
        // 'Осталось: ' + ... - склеить текст и число

        let wire = document.getElementById('wire-' + color);
        // создать переменную wire
        // найти элемент по id (например wire-red)

        wire.innerHTML = wire.innerHTML.replace('Выбрать', '✅');
        // innerHTML - HTML код внутри элемента
        // replace - заменить одно слово на другое

        if (medCount === 4) {
            // если все 4 провода соединены
            document.getElementById('med-message').innerText = '✅ Проводка починена! +120 кредитов.';
        }
    } else {
        // else - ИНАЧЕ (если условие в if не верно)

        document.getElementById('med-message').innerText = '❌ Замыкание! Не тот цвет.';
        resetMedium();
        // resetMedium - вызвать функцию сброса
    }
}

// Сброс среднего уровня
function resetMedium() {
    medCount = 0;
    // сбросить счётчик в 0

    document.getElementById('med-progress').innerText = 'Осталось: 4';
    document.getElementById('med-message').innerText = '';
    // '' - пустая строка (очистить текст)

    // Вернуть кнопки обратно
    document.getElementById('wire-red').innerHTML = '<span>🔴 Красный</span><a href="#" class="btn small" onclick="connectWire(\'red\')">Выбрать</a>';
    document.getElementById('wire-green').innerHTML = '<span>🟢 Зелёный</span><a href="#" class="btn small" onclick="connectWire(\'green\')">Выбрать</a>';
    document.getElementById('wire-yellow').innerHTML = '<span>🟡 Жёлтый</span><a href="#" class="btn small" onclick="connectWire(\'yellow\')">Выбрать</a>';
    document.getElementById('wire-blue').innerHTML = '<span>🔵 Синий</span><a href="#" class="btn small" onclick="connectWire(\'blue\')">Выбрать</a>';
    // innerHTML - заменить содержимое элемента на новый HTML код
    // onclick - что делать при клике
    // \' - экранированная кавычка (чтобы не сломать строку)
}

// Сложный уровень - введённые цифры
let hardInput = [];
// let - переменная
// [] - пустой массив (список)

// Правильный код
const correctCode = [7, 3, 9];
// const - неизменяемая переменная
// [7, 3, 9] - массив из трёх чисел

// Нажатие кнопки с цифрой
function pressKey(num) {
    hardInput.push(num);
    // push - добавить элемент в конец массива

    updateHardDisplay();
    // вызвать функцию обновления экрана

    let currentStep = hardInput.length - 1;
    // length - количество элементов в массиве
    // -1 потому что счёт начинается с 0

    if (hardInput[currentStep] !== correctCode[currentStep]) {
        // !== - НЕ равно
        // если цифра не совпадает с правильной

        document.getElementById('hard-message').innerText = '❌ Неверная цифра!';
        resetHard();
        // сбросить уровень

        return;
        // return - выйти из функции (дальше код не выполняется)
    }

    if (hardInput.length === 3) {
        // если ввели уже 3 цифры
        document.getElementById('hard-message').innerText = '✅ Код верный! Реактор разблокирован. +300 кредитов.';
    }
}

// Обновить отображение кода на экране
function updateHardDisplay() {
    let display = '';
    // пустая строка

    for (let i = 0; i < 3; i++) {
        // цикл от 0 до 2
        if (i < hardInput.length) {
            // если цифра уже введена
            display = display + hardInput[i] + ' ';
            // добавить цифру и пробел
        } else {
            display = display + '_ ';
            // иначе добавить прочерк
        }
    }

    document.getElementById('hard-code').innerText = display;
    // показать что получилось
}

// Сброс сложного уровня
function resetHard() {
    hardInput = [];
    // очистить массив (пустой список)

    document.getElementById('hard-code').innerText = '_ _ _';
    // сбросить отображение кода
      }
