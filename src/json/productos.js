const productos = [
    {
        "id" : 1,
        "title": "Cargo",
        "image": "https://acdn.mitiendanube.com/stores/118/810/products/1000057491-1da329d0fdbf713e4d17150148820555-240-0.webp",
        "description":"",
        "price": 800,
        "categoria":"pantalon"
    },
    {
        "id" : 2,
        "title": "Remera life´s",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iKIcy7Tpw-3cunCrZ68kQEbwiKTvg2h3lQ&s",
        "description":"",
        "price": 400,
        "categoria":"remera"
    },
    {
        "id" : 3,
        "title": "Remera Moon",
        "image": "https://d22fxaf9t8d39k.cloudfront.net/8f3c22db599baa63d1d8c9729666d289cb6d7f86825fff28035fd204f749d1f07239.jpg",
        "description":"",
        "price": 450,
        "categoria":"remera"
    },
    {
        "id" : 4,
        "title": "Remera Vision",
        "image": "https://acdn.mitiendanube.com/stores/001/165/868/products/15122022-img_35821671504769580-31-4e445befec69078c6e16928364889915-1024-1024.jpg",
        "description":"",
        "price": 520,
        "categoria":"remera"
    },
    {
        "id" : 5,
        "title": "Remera Stay Cool",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwEl7Ua1Bxys_fIEWN0tmfSatF-HUooMZiQ&s",
        "description":"",
        "price": 450,
        "categoria":"remera"
    },
    {
        "id" : 6,
        "title": "Remera Hug",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMs7QGG9a_77s-ygWyjOYH9Bu_67hygUxV0Q&s",
        "description":"",
        "price": 400,
        "categoria":"remera"
    },
    {
        "id" : 7,
        "title": "Remera Happy",
        "image": "https://d22fxaf9t8d39k.cloudfront.net/2c4a1453fa1f0375c6c3579379bc41304433be39dfcf0b4bc53514afee7618137239.jpg",
        "description":"",
        "price": 400,
        "categoria":"remera"
    },
    {
        "id" : 8,
        "title": "Remera I Know",
        "image": "https://d22fxaf9t8d39k.cloudfront.net/bbefb9a8b6073d981f5d4a5a5f376aa4003e5c4d0ae5134e9f54f8ff324d602972670.jpg",
        "description":"",
        "price": 450,
        "categoria":"remera"
    },
    {
        "id" : 9,
        "title": "Buzo oversize MARS",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxU50OCOPEH-UHyzIt4nZzlh2btKjWwE0q9A&s",
        "description":"",
        "price": 950,
        "categoria":"buzo"
    },
    {
        "id" : 10,
        "title": "buzo GTA",
        "image": "https://dcdn.mitiendanube.com/stores/004/585/387/products/picsart_24-04-13_14-46-01-351-41d29a7290eed55af717140931409794-1024-1024.jpg",
        "description":"",
        "price": 1000,
        "categoria":"buzo"
    }
]

export function fetchData(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}