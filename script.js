(function () {
    var container = document.querySelector('.rating');
    var items = container.querySelectorAll('.rating-item');
    container.onclick = function (e) {
        if (!e.target.classList.contains('active')) {
            items.forEach(function (item) {
                item.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    };
})();