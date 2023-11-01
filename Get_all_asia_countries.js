const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
      let val = JSON.parse(xhr.responseText)
      val.filter((cts) => {
           const { name, continents} = cts;  
           if((continents == "Asia") == true){
              console.log(name["common"])
           }
      })
};
