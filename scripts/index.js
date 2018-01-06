$(function()
{
  $('#ticker_1').cryptoticker({
    startIndex:0,
    getTopCoins:20,
    nameColor:'yellow',
    separatorColor:'#ddd',
    separatorWidth:10,
    priceColor:'orange'
  });

  $('#ticker_2').cryptoticker({
    startIndex:19,
    getTopCoins:20,
    nameColor:'#44aaff',
    separatorColor:'red',
    separatorWidth:10,
    priceColor:'orange'
  });

})
