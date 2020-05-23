//Задание №1
let hours = document.getElementById('hours');
hours.style.color= "blue";
let minutes = document.getElementById('minutes');
minutes.style.color= "silver";
let seconds = document.getElementById('seconds');
seconds.style.color= "red";
function displayClocks() {
    let dt = new Date();
    hours.innerText = dt.getHours().toString().padStart(2, "0");
    minutes.innerText = dt.getMinutes().toString().padStart(2, "0");
    seconds.innerText = dt.getSeconds().toString().padStart(2, "0");
}
displayClocks();
setInterval(displayClocks, 1000);

//Задание №2
let goods = [
    {id: 1, name: "Гайка", description: "Гайка для закрутки на болт", price: 1, val: "RUB", img: "./img/goods/01.jpg"},
    {id: 2, name: "Болт", description: "Болт, ну на который гайки накручивают", price: 1, val: "RUB", img: "./img/goods/02.jpg"},
    {id: 3, name: "Шайба", description: "Шайба, под шапку болта. ", price: 1, val: "RUB", img: "./img/goods/03.jpg"},
    {id: 4, name: "Ключ", description: "Ключ, которым все это скручивают", price: 1, val: "RUB", img: "./img/goods/04.jpg"},
]

function displayGoods(arr) {
    let div_goods = document.getElementById("goods");
    for(let i=0; i<arr.length; i++) {
        let item = arr[i];
        //Создаем контейнер товара
        let container = document.createElement("div");
        container.setAttribute("class", "item");
        container.dataset.id = i;
        //Создадим заголовок товара
        let header = document.createElement("h3");
        header.innerText = item["name"];
        container.appendChild(header);
        //Создадим картинку товара
        let img = document.createElement("img");
        img.setAttribute("src", item['img']);
        container.appendChild(img);
        //Создадим блок цены
        let price = document.createElement("p");
        price.setAttribute("class", "item-price");
        price.innerText = `Цена:  ${item['price']} ${item['val']} за шт.`;
        container.appendChild(price);
        //создадим блок описание
        let desc = document.createElement("p");
        desc.setAttribute("class", "item-description");
        desc.innerText = item["description"];
        container.appendChild(desc);
        //Выведем товар
        div_goods.appendChild(container);
    }
}

displayGoods(goods);

//Задание №3
let trafficligth = [["red"],["red","yellow"],["green"],["green","yellow"]];

function trafficLigths() {
    let i = 0;

    return function signChange() {
        //Если i больше или равна длине массива - обнуляем
        i = (i>=trafficligth.length) ? 0: i;
        //Убираем класс active у всех элементов
        let tl = document.getElementById("traffic-ligth").children;
        for(let k=0; k<tl.length; k++){
            let child = tl[k];
            child.classList.remove("active");
        }
        //ищем нужные элементы и втыкаем им класс active
        let id_arr = trafficligth[i];
        for(let j=0; j<id_arr.length; j++) {
            let sign = document.getElementById(id_arr[j]);
            sign.classList.toggle("active");
        } 
        return i++;
    }    
}

let signChanger = trafficLigths();
signChanger();
setInterval(signChanger, 2000);

//Задание №4
function getTimeToNewYear() {
    let titles_days = ['день', 'дня', 'дней'];
    let titles_hours = ['час', 'часа', 'часов'];
    let titles_minutes = ['минута','минуты','минут'];
    let dt = new Date();
    let year = dt.getFullYear();
    let NewYear = new Date(`01-01-${year+1}`);
    let delta = NewYear-dt;
    let days = Math.trunc(delta/(1000*3600*24));
    let hours = Math.trunc((delta-(days*(1000*3600*24)))/(1000*3600));
    let minutes = Math.trunc((delta-(days*(1000*3600*24))-(hours*(1000*3600)))/(1000*60));
    let seconds = (delta-(days*(1000*3600*24))-(hours*(1000*3600)))/(1000*60)-minutes;
    if(seconds!=0) {
        minutes +=1
    }
    let txt = document.getElementById("checker");
    txt.innerText = `До нового года осталось: ${days} ${dayDescription(days, titles_days)}, ${hours} ${dayDescription(hours, titles_hours)}, ${minutes} ${dayDescription(minutes, titles_minutes)}`;
    console.log(NewYear);
    console.log(days, hours, minutes);
}

function dayDescription(n, names) {
    let n_str = n.toString().slice(-1);
   
    if(n_str=="1") {
        return names[0];
    }
    if(n_str>="2" && n_str<="4" && !(n >=12 && n <= 14)) {
        return names[1];
    }
    else if(n_str>="5" || n_str=="0" || (n >=12 && n <= 14)) {
        return names[2];
    }
}

getTimeToNewYear();
setInterval(getTimeToNewYear, 60*1000);