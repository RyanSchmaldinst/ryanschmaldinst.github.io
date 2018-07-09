var totalValue = 0;

$(document).on("click",".pickButton", function (clicked) {

  clicked.toggleClass('transform-active');

  if ($(this).attr('clicked') == 'false')
  {
    $(this).attr('clicked', 'true')
    var thisValue = $(this).attr('value');
    var thisConvertedValue = parseInt(thisValue);
    totalValue += thisConvertedValue;
    console.log(totalValue);
  }
  else
  {
    console.log($(this) + ' ' + $(this).attr('clicked'));
  }
});
