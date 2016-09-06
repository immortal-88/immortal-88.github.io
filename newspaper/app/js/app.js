
angular.module('formApp', [])

    .controller('formCtrl', function ($scope, $http) {

        $scope.show = true;
        $scope.quantity = 1;
        $scope.price = 0;
        $scope.discount = 0;

        // Ф-я подсчета цены в зависимости от оформения
        $scope.price_count = function () {
            switch ($scope.decoration_label) {
                case 'Простое':
                    console.log('Простое')
                    $scope.price = 0;
                    break;
                case 'В рамке':
                    console.log('В рамке')
                    $scope.price = $scope.data.decoration[1].price;
                    break;
                case 'Выделенное':
                    console.log('Выделенное')
                    $scope.price = $scope.data.decoration[2].price;
                    break;
            }
        };

        // Ф-я подсчета слов
        $scope.count_words = function () {
            var $_count = $scope.textarea_value ? $scope.textarea_value : "";
            var replacer = " ";
            var test = $_count.replace(/\s[a-яА-ЯA-Za-z0-9]{1,3}/g, replacer);
            var test1 = test.replace(/\s+/g, " ");
            var $_out = test1.split(" ").length; // Подсчет слов 

            $scope.words_length = $_out;
        };

        // Ф-я подсветки выбраного элемента оформления
        $scope.style_selected = function () {
            if (!$scope.decoration) return;
            $scope.decorationLabel = $scope.decoration.label;
        };

        // Ф-я при выборе бесплатного объявления
        $scope.free = function () {
            $scope.is_payable = 'Бесплатное';
            $scope.total_price = 0;
            $scope.article_price = 0;
            $scope.clean_textarea_settings();
            $scope.common_method();
        };

        // Ф-я при выборе платного оббъявления
        $scope.payable = function () {
            $scope.is_payable = 'Платное';
            $scope.total_price = $scope.data.decoration[0].price;
            $scope.article_price = $scope.data.decoration[0].price;
            $scope.clean_textarea_settings();
            $scope.common_method();
        };

        // Ф-я подсчета скидки
        $scope.get_discount = function () {
            ($scope.quantity >= $scope.data.sale_count[0].count) ?
                $scope.discount = $scope.data.sale_count[0].percent : $scope.discount = 0;
            $scope.get_total_price();
        };

        // Ф-я подсчета итоговой суммы
        $scope.get_total_price = function () {
            if ($scope.is_payable == 'Бесплатное') {
                $scope.total_price = $scope.article_price;
            } else {
                $scope.total_price = ((($scope.article_price + $scope.price) * $scope.quantity) * $scope.article_quantity);
                if ($scope.quantity >= 5) {
                    $scope.total_price = $scope.total_price - (($scope.total_price / 100) * 10);
                }
            }
        };

        // Ф-я ограничения ввода слов
        $scope.restrict_words_func = function (length) {
            var restrict = $scope.is_payable == 'Бесплатное' ? 25 : 75;
            $scope.restrict_words = length >= restrict ? true : false;
            if ($scope.old_textarea && $scope.textarea_value && ($scope.old_textarea.length < $scope.textarea_value.length)) {
                $scope.textarea_value = $scope.old_textarea;
            }
            $scope.restrict_words ? $scope.old_textarea = $scope.textarea_value : "";
            console.log($scope.restrict_words)
        };

        // Ф-я отчистки старого значения текст ареа
        $scope.clean_textarea_settings = function () {
            $scope.old_textarea = "";
        };

        // Ф-я умножения в зависимости от введенных слов
        $scope.article_multiplier = function () {
            if ($scope.words_length < 26) {
                $scope.article_quantity = 1;
            } else if ($scope.words_length < 51) {
                $scope.article_quantity = 2;
            } else if ($scope.words_length < 76) {
                $scope.article_quantity = 3;
            } else {
                return;
            }
        };

        // Общая ф-я (выполнения нескольких ф-ий)
        $scope.common_method = function () {
            $scope.count_words();
            $scope.article_multiplier();
            $scope.restrict_words_func($scope.words_length);

            $scope.get_total_price();
        };

        // Ф-я сброса по умолчанию
        $scope.reset = function () {
            $scope.quantity = 1;
            $scope.price = 0;
            $scope.discount = 0;
            $scope.article_quantity = 0;
            $scope.decoration_label = "";
            $scope.textarea_value = "";
            $scope.words_length = 1;
            $scope.total_price = $scope.data.decoration[0].price;
        };

        // Ф-я отправки формы
        $scope.send = function () {
            if (!$scope.validate()) return;
            $http.post('some/path', {
                pizda: 'pizda'
            }).then(function success(res) {
                console.log('We send some data ', res);
            }, function error(error) {
                console.log(error.status); console.log(error.statusText);
            });
        };

        // Ф-я валидации текстарии
        $scope.validate = function () {
            var valid = true;
            if ($scope.restrict_words) {
                valid = false;
                $scope.error_msg = "Некорректные данные";
            }
            $scope.valid ? $scop.error_msg = "" : "";
            return valid;
        };

        document.getElementsByTagName('body')[0].classList.remove("hide");

        // Запрос JSON
        $http.get('js/data.json').then(function success(res) {
            $scope.data = res.data;
            $scope.payable();
            console.log('We get from data.json next response ', res);
        }, function error(error) {
            console.log(error.status); console.log(error.statusText);
        });

    });