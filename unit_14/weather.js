fetch('http://api.openweathermap.org/data/2.5/weather?id=491687&appid=8b6eacad96fc1f991c759ee5297435ca')
.then(function(resp) {return resp.json()})
.then(function(data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg';;
    document.querySelector('.disclaimer').textContent = data.weather[0].description;
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    
})
.catch(function(){
})
