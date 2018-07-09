var totalValue = 0;

$(document).on("click",".pickButton", function () {
  var thisValue = $(this).attr('value');
  var thisConvertedValue = parseInt(thisValue);

  $(this).children().toggleClass('transform-active');

  if ($(this).attr('clicked') == 'false')
  {
    $(this).attr('clicked', 'true');
    totalValue += thisConvertedValue;
    console.log(totalValue);
  }
  else
  {
    totalValue -= thisConvertedValue
    $(this).attr('clicked', 'false');
    console.log(totalValue);
  }
});
