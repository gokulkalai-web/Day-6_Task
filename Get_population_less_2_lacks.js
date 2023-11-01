const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
      let val = JSON.parse(xhr.responseText)
      val.filter((cts) => {
           const {name, population} = cts;  
           if(population < 200000){
             console.log(name["common"])
           }
      })
};

