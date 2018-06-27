var totalValue = 0;

$(#easyClean).click(function(Event object){
  totalValue += object.value;
  console.log(totalValue);
});
