

const key = "5ba73084bb854417aa2d9bb59c02c990"


const putData = (dados) => {

   document.querySelector(".city").innerHTML =  `Tempo em ${dados.name}`
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)+ '°C';
   document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
   document.querySelector(".umidade").innerHTML = dados.main.humidity + '%';
   document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function seekcity(cidade){


  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json() );
  putData(dados)
}


const clicked = () => {

    const cidade = document.querySelector(".input-city").value  
    seekcity(cidade);
}

