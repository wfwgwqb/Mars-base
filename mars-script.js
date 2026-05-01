// Функция переключения страниц
// pageId — id страницы которую показываем
function showPage(pageId) {

    // getElementsByClassName — найти все элементы по классу
    // эта команда работает везде
    let pages = document.getElementsByClassName('page');

    // Цикл — скрываем все страницы
    for (let i = 0; i < pages.length; i++) {
        // style.display — управление видимостью
        // 'none' — скрыть
        pages[i].style.display = 'none';
    }

    // getElementById — найти один элемент по id
    // style.display = 'block' — показать
    document.getElementById(pageId).style.display = 'block';
}

// Лёгкий уровень — победа
function easyWin() {
    // alert — показать окно с сообщением
    alert('✅ Успех! Насосы запущены. +50 кредитов.');
    showPage('home');
}

// Лёгкий уровень — провал
function easyFail() {
    alert('❌ Ошибка! Неверное действие.');
}

// Средний уровень — счётчик проводов
// let — переменная (можно менять)
let medCount = 0;

// const — переменная (НЕ меняется)
// [ ] — массив (список)
const rightOrder = ['red', 'green', 'yellow', 'blue'];

// Подключение провода
// color — цвет который нажали
function connectWire(color) {

    // Проверяем правильный ли цвет
    // === — равно
    // rightOrder[medCount] — нужный цвет по порядку
    if (color === rightOrder[medCount]) {

        // Увеличиваем счёт
        medCount = medCount + 1;

        // Меняем текст на экране
        // innerText — текст внутри элемента
        document.getElementById('med-progress').innerText = 'Осталось: ' + (4 - medCount);

        // Находим провод
        let wire = document.getElementById('wire-' + color);

        // Меняем кнопку на галочку
        // innerHTML — HTML внутри
        // replace — заменить текст
        wire.innerHTML = wire.innerHTML.replace('Выбрать', '✅');

        // Если все готовы
        if (medCount === 4) {
            document.getElementById('med-message').innerText = '✅ Проводка починена! +120 кредитов.';
        }
    } else {
        // Неправильный цвет
        document.getElementById('med-message').innerText = '❌ Замыкание! Не тот цвет.';
        resetMedium();
    }
}

// Сброс среднего уровня
function resetMedium() {
    medCount = 0;
    document.getElementById('med-progress').innerText = 'Осталось: 4';
    document.getElementById('med-message').innerText = '';

    // Возвращаем кнопки
    document.getElementById('wire-red').innerHTML = '<span>🔴 Красный</span><a href="#" class="btn small" onclick="connectWire(\'red\')">Выбрать</a>';
    document.getElementById('wire-green').innerHTML = '<span>🟢 Зелёный</span><a href="#" class="btn small" onclick="connectWire(\'green\')">Выбрать</a>';
    document.getElementById('wire-yellow').innerHTML = '<span>🟡 Жёлтый</span><a href="#" class="btn small" onclick="connectWire(\'yellow\')">Выбрать</a>';
    document.getElementById('wire-blue').innerHTML = '<span>🔵 Синий</span><a href="#" class="btn small" onclick="connectWire(\'blue\')">Выбрать</a>';
}

// Сложный уровень
// let — массив для цифр
let hardInput = [];

// Правильный код
const correctCode = [7, 3, 9];

// Нажатие цифры
function pressKey(num) {

    // push — добавить в массив
    hardInput.push(num);

    // Обновить экран
    updateHardDisplay();

    // Индекс последней цифры
    // length - 1 — последний элемент
    let currentStep = hardInput.length - 1;

    // !== — не равно
    if (hardInput[currentStep] !== correctCode[currentStep]) {
        document.getElementById('hard-message').innerText = '❌ Неверная цифра!';
        resetHard();
        // return — выйти
        return;
    }

    // Всё введено
    if (hardInput.length === 3) {
        document.getElementById('hard-message').innerText = '✅ Код верный! +300 кредитов.';
    }
}

// Обновить код на экране
function updateHardDisplay() {
    let display = '';

    for (let i = 0; i < 3; i++) {
        if (i < hardInput.length) {
            display = display + hardInput[i] + ' ';
        } else {
            display = display + '_ ';
        }
    }

    document.getElementById('hard-code').innerText = display;
}

// Сброс сложного
function resetHard() {
    // [ ] — пустой массив
    hardInput = [];
    document.getElementById('hard-code').innerText = '_ _ _';
    document.getElementById('hard-message').innerText = '';
}
