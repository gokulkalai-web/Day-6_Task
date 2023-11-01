//Print the following details name, capital, flag, using forEach function
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
      const val = JSON.parse(xhr.responseText)
      val.forEach((val) => {
        const {name,capital,flag} = val;
        console.log(`country name is ${name["common"]} captial is ${capital} flag is ${flag}`)
      }
      )
};
