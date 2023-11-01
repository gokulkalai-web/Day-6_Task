const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send(); 
xhr.onload = function () {
      const val = JSON.parse(xhr.responseText)
      val.filter((arr) => {
          const {currencies={},name} = arr;
          //console.log(currencies)
          if(Object.keys(currencies).includes("USD") === true) console.log(`name of country ${name["common"]} and currency in USD`)    
})};
     