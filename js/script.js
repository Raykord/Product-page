//Увеличение изображений
$(document).ready(function() {
    $('.little-img').mouseover(function(){
        $('.preview-img').attr('src', $(this).attr('src'));
        $(this).css('border', '1px solid #333');
    });

    $('.little-img').mouseout(function(){
        $('.preview-img').attr('src', 'images/preview/1.png');
        $(this).css('border', 'none');
    });
});

//Счётчик товара
var val = 1;

$(document).ready(function() {
	$('body').on('click', '.number-minus, .number-plus', function(){
		var $row = $(this).closest('.number');
		var $input = $row.find('.number-text');
		var step = $row.data('step');
		val = parseFloat($input.val());
		if ($(this).hasClass('number-minus')) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});

    $('body').on('change', '.number-text', function(){
		var $input = $(this);
		var $row = $input.closest('.number');
		var step = $row.data('step');
		var min = parseInt($row.data('min'));
		var max = parseInt($row.data('max'));
		val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if (min && val < min) {
			val = min;
		} else if (max && val > max) {
			val = max;
		}
		$input.val(val);
	});
});

//Отображение добавленного товара при нажатии на кнопку "Купить"
$(document).ready(function(){
    $('.custom-btn--blue').click(function(){
        $('.alert').addClass("show");
        $('.alert').removeClass("hide");
        $('.msg').text('Добавленно товаров: ' + val);
        $('.alert').addClass("showAlert");
        setTimeout(function(){
        $('.alert').removeClass("show");
        $('.alert').addClass("hide");
        },5000);
    });
    $('.close-btn').click(function(){
        $('.alert').removeClass("show");
        $('.alert').addClass("hide");
  });
});