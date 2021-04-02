$('.slider').slick({
    appendArrows: $('.button-slider'),
    prevArrow: '<img src="images/left.svg" alt="left-button" class="left-btn">',
    nextArrow: '<img src="images/right.svg" alt="right-button" class="right-btn">'
});

var radioboxIsChecked = false;

$('.radioboxs input').click(function(){
	var valueRadioBox = $(this).attr('value');
    $(this).attr('checked', 'checked');
    if (valueRadioBox == 'green') {
        alert('Нет в наличии!');
        radioboxIsChecked = false;
        $('.button-noActiv').removeClass('no-choise');
    } else {
        radioboxIsChecked = true;
        $('.slider img').each(function(){
            var pathImage = $(this).attr('src');
            var regex = /\/(\w+)(-\d+.jpg)/;
            var replacePath = pathImage.replace(regex,'/' + valueRadioBox + '$2');
            $(this).attr('src', replacePath);
        });
        
        if (optionIsSelected)
           $('.button-noActiv').addClass('no-choise'); 
    }
});

var optionIsSelected = false;

$('.button-noActiv').click(function(){
    return false;
});

$('select').change(function(){
	if ($('select :selected').val() != 'choise'){
       optionIsSelected = true;
       if (radioboxIsChecked) 
           $('.button-noActiv').addClass('no-choise'); 
    }
    else {
        optionIsSelected = false;
        $('.button-noActiv').removeClass('no-choise'); 
    }
      
});

var heightDescription = $('.description').css('height');

//Высота в 4 строки
$('.description').addClass('description-height');

$('.more').click(function(e){
  e.preventDefault();
  $('.description').toggleClass('description-height');
});