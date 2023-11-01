const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send(); 
xhr.onload = function () {
      const val = JSON.parse(xhr.responseText)
      let total_population = 0
      val.reduce((prev,curr,currIndex) => {
          const {population} = prev
          total_population+= population
          //console.log(`index ${currIndex} with total_population ${total_population}`)
          if(val.length - 1 === currIndex){
             const {population} = curr
             total_population+=population
             //console.log(`index ${currIndex} with total_population ${total_population}`)
          }
          return curr
     })
     console.log(total_population)
};