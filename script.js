let $ = document; 

let search = $.getElementById('search');
let searchBar = $.querySelector('.search-bar');


let weather = {
    tehran : {city : 'tehran', tamp : 37, des : 'very sunny', windSpeed : 11, humidity : 11},
    tabriz : {city : 'tabriz', tamp : 34, des : 'sunny', windSpeed : 14, humidity : 18},
    shiraz : {city : 'shiraz', tamp : 39, des : 'little sunny', windSpeed : 18, humidity : 12},
    mashhad : {city : 'mashhad', tamp : 34, des : 'sunny-cloudy', windSpeed : 18, humidity : 34},
    yazd : {city : 'yazd', tamp : 42, des : 'so suny', windSpeed : 8, humidity : 11},
}

let someBackground = [
    'sunset-silhouettes-trees-mountains-generative-ai_169016-29371.avif',
    'example-of-desktop-background-on-a-mac-created-with-midjourney.avif',
    '1600w-8nWaXKWjlBo.webp',
    'desktop-lsjkr6wg7ctq97qv.jpg',
    'ai-generated-majestic-mountain-peak-reflects-tranquil-sunset-over-water-generated-by-ai-photo.jpg',
    'cool-desktop-1920-x-1080-background-gon5l80bucyhk5dd.jpg'
]

let randoming = Math.floor(Math.random() * someBackground.length);
document.body.style.backgroundImage = 'url(' + someBackground[randoming] + ')';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundSize = 'cover';



let someBackgroundForSearch = [
    'gangster-3k6omrqz107r2o9k.jpg',
    'wp2696583.jpg',
    'stranger-things-eleven-and-the-gang-aoex0mdsevuqe1xa.jpg',
    'HD-wallpaper-stranger-things-poster-2019-movie-stranger-things-season-3-2019-stranger-things.jpg',
    'aKxCDcSZgsKpNDT2AvVuG6.jpg',
]
let randomingSearch = Math.floor(Math.random() * someBackgroundForSearch.length);


search.addEventListener('click', function () {
    
    let save_the_value_of_search = searchBar.value;
    let Finding = weather[save_the_value_of_search];

    // console.log(Finding);
    ///////////////////////////////////////////////////////////////////////////////////////
    
    if (Finding) {
        $.body.style.backgroundImage = 'url(' + someBackgroundForSearch[randomingSearch] + ')'; 
        
        $.querySelector('.weather').classList.remove('loading');
        $.querySelector('.city').innerHTML = 'Weather in ' + Finding.city;
        $.querySelector('.temp').innerHTML = Finding.tamp + '°C';
        $.querySelector('.description').innerHTML = Finding.des;
        $.querySelector('.humidity').innerHTML = 'Humidity: ' + Finding.humidity + '%';
        $.querySelector('.wind').innerHTML = 'Wind speed: ' +  Finding.windSpeed + ' km/h';
    } else {
        alert('این شهر در لیست شهر ها وجود ندارد');
    }
}) 