// var clickButtons = document.querySelectorAll('.click');

// // Добавляем обработчик события для каждой кнопки
// clickButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//         // Добавляем/удаляем класс 'activate' для родительского контейнера
//         var container = button.closest('.container.menu');
//         var bt = button.closest('.menu_bt')
        
//         if (container) {
//             container.classList.toggle('active');
//         }
//         console.log(container.closest('.menu_bt'))
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с классом 'click'
    var clickElements = document.querySelectorAll('.click');

    // Добавляем обработчик события для каждого элемента
    clickElements.forEach(function(element) {
        element.addEventListener('click', function() {

            clickElements.forEach(function(el) {
                el.classList.remove('active');
                var button = el.querySelector('.menu_bt');
                if (button) {
                    button.classList.remove('active');
                }
            });

            // Окрашиваем div в нужный цвет
            element.classList.toggle('active')

            // Окрашиваем кнопку в нужный цвет
            var button = element.querySelector('.menu_bt');
            if (button) {
                button.classList.toggle('active')
            }
        });
    });
});
