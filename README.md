# jQuery Cryptocurrency Ticker Widget
Customizable jQuery widget that lets you retrieve live prices, market caps, and % changes of cryptocurrencies from the CoinMarketCap API

# Installation
Clone this repository.

Include the **latest version of jQuery** in your project:
```html
 <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
```

Include the **jquery.cryptoticker.js** file. Make sure you include it **after** jQuery:

```html
<script src="jquery.cryptoticker.js"></script>
```

Include the **cryptoticker.css** file in your `<head>` tag:

```html
<link rel="stylesheet" href="cryptoticker.css">
```

## Initialize widget
To initialize the widget just insert `$({selector}).cryptoticker();` in your `$(document).ready();` section:

```javascript
$(document).ready(function(){
    $('#tickerDiv').cryptoticker(options);
});
```
**You may pass a configuration object here:** `$('#tickerDiv').cryptoticker({options});`

## Options

| Option       | Default  | Details   |
|----------------|----------|-----------|
| **id**       | null  | Search for a crypto by id - (**id:"bitcoin"** for example) - can only return one coin at a time  |
| **getTopCoins**      | 10 | return **n** number of coins - overrides **'top5'** and **'top10'** but not **id** |
| **startIndex** | 0 | What index to start at. Index 0 is most likely 'bitcoin' |
| **top5**  | false | Return top 5 results |
| **top10**   | false | Return top 10 results |
| **speed**       | 30000     | Time in ms until slide animation ends - default 30 seconds |
| **fadeInOutSpeed**    | 2500      | Time in milliseconds it takes to fade out after slide animation ends - default 2.5 seconds, |
| **resetSpeed**       | 1000    | Time in milliseconds it takes for the ticker to reset position after fading out - default 1 second |
| **separatorColor**       | '#999999'     | Default separator color |
| **separatorWidth**       | 5 | Default separator width in px (**Takes in a number, NOT px**)  |
| **nameColor**       | 30000     | Default coin name color |
| **priceColor**       | 30000     | Default price color |
| **capColor**       | 30000     | Default market cap color |
