// Логика переключения темы
document.getElementById('toggle-theme').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
    // Меняем текст кнопки
    this.innerHTML = isDark ? '🌙 Тёмная тема' : '🌞 Светлая тема';
  });
  
  // Устанавливаем текст кнопки при загрузке
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('toggle-theme').innerHTML = '🌙 Тёмная тема';
  } else {
    document.getElementById('toggle-theme').innerHTML = '🌞 Светлая тема';
  }
  
document.getElementById('roll-button').addEventListener('click', function () {
    const diceType = parseInt(document.getElementById('dice-type').value); // Тип кости
    const diceCount = parseInt(document.getElementById('dice-count').value); // Количество бросков
    const modifier = parseInt(document.getElementById('modifier').value); // Модификатор
  
    if (isNaN(diceCount) || diceCount < 1) {
      // Проверяем, что количество бросков введено корректно
      document.getElementById('output').innerText = 'Введите корректное количество бросков!';
      return;
    }
  
    // Генерируем результаты бросков
    let results = [];
for (let i = 0; i < diceCount; i++) {
  const roll = Math.floor(Math.random() * diceType) + 1 + modifier;
  results.push(roll);

  // Проверяем критический успех или провал
  if (roll === 1) {
    showToast('🎲 Критический провал!');
  } else if (roll === diceType + modifier) {
    showToast('🎉 Критический успех!');
  }
}
  
    // Показываем результаты на экране
    document.getElementById('output').innerText = `Результаты: ${results.join(', ')}`;
    

    // Добавляем класс "show" для плавного появления
output.classList.remove('show'); // Сбрасываем класс, чтобы анимация срабатывала каждый раз
setTimeout(() => output.classList.add('show'), 10); // Задержка для активации анимации
  
    // Добавляем результат в историю
    const historyList = document.getElementById('history-list'); // Находим элемент для истории
    const listItem = document.createElement('li'); // Создаём новый элемент списка
    listItem.innerText = `D${diceType}, ${diceCount} бросков (модификатор: ${modifier}): ${results.join(', ')}`; // Текст нового элемента
    historyList.appendChild(listItem); // Добавляем элемент в список

    // Добавляем класс "show" для плавного появления
setTimeout(() => listItem.classList.add('show'), 10);
    // Обработчик для кнопки "Очистить историю"
document.getElementById('clear-history').addEventListener('click', function () {
    const historyList = document.getElementById('history-list'); // Находим список истории
    historyList.innerHTML = ''; // Очищаем содержимое списка
    localStorage.removeItem('diceHistory'); // Удаляем сохранённую историю из браузера
  });  
  });
  
  