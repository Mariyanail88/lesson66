// Получаем контейнер по его id
const container = document.getElementById('container');

// Используем цикл для добавления пяти div-тегов
for (let i = 1; i <= 5; i++) {
    // Создаем новый div элемент
    const newDiv = document.createElement('div');

    // Добавляем класс 'element'
    newDiv.className = 'element';

    // Устанавливаем текстовое содержимое
    newDiv.textContent = `Element ${i}`;

    // Добавляем новый div в контейнер
    container.appendChild(newDiv);
}