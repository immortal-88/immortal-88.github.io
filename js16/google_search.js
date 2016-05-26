/**
 * Created by apple on 25.05.16.
 */

$(function () {
    $('.button').click(function () {

        // Очистка элементов
        $('img').remove();
        $('#box').html('');


        var QUERY = $('.search').val();
        var API_KEY = '2642645-cf42d869fc25a73a97a804db7';
        var URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + QUERY;

        //var GOOGLE_KEY = 'AIzaSyAXeZJx_DdnXpJkn1KnqKgi4sJfNL8tLRk';
        //var GOOGLE_URL = 'https://www.googleapis.com/customsearch/v1?key=' + GOOGLE_KEY + '&cx=017576662512468239146:omuauf_lfve&q=lectures';

        // Функция запроса на сервер
        $.getJSON(URL, function (data) {
            if (parseInt(data.totalHits) > 0)
                $.each(data.hits, function (i, hit) {
                    console.log(hit.webformatURL);
                    if (i < 6) {
                        $("<img/>").attr("src", hit.webformatURL).appendTo("#box");
                    }
                });
            else
                $('#box').html('Ничего не найдено');
                console.log('No hits');
        });

    });

    // Отправка запроса на Enter
    $('body').keypress(function (e) {
        if (e.which == 13) {
            $('.button').click();
        }
    });
});