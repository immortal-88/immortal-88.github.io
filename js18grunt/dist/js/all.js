
$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Карусель 2.0
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:false, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		nav:false, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items: 1
			},
			600:{
				items: 2
			},
			1000:{
				items: 4
			}
		}

	});

	$('.next-button').click(function() {
		owl.trigger('next.owl.carousel');
	});
	// Go to the previous item
	$('.prev-button').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	//var owl = $('.carousel');
	//owl.owlCarousel({
	//	items: 1
	//});

	//owl.on("mousewheel", ".owl-wrapper", function (e) {
	//	if (e.deltaY > 0) {
	//		owl.trigger("owl.prev");
	//	} else {
	//		owl.trigger("owl.next");
	//	}
	//	e.preventDefault();
	//});
	//$(".next-button").click(function(){
	//	owl.trigger("owl.next");
	//});
	//$(".prev-button").click(function(){
	//	owl.trigger("owl.prev");
	//});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});

/**
 * Created by apple on 20.03.16.
 */

function initMap() {
    var mapDiv = document.getElementById('google-map-container');
    var myLatLng = {lat: 55.7803398, lng: 37.5563369};
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
        zoom: 16
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
