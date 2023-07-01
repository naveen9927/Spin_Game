function shuffle(array) {
    var currentIndex = array.length,
    randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function spin() {
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let selectedItem = "";


    let offer1 = shuffle([1890, 2250, 2610]);
    let TV = shuffle([1850, 2210, 2570]);
    let laptop = shuffle([1770, 2130, 2490]);
    let offer2 = shuffle([1810, 2170, 2530]);
    let iPhone = shuffle([1750, 2110, 2470]);
    let ps = shuffle([1630, 1990, 2350]);
    let offer3 = shuffle([1570, 1930, 2290]);
    let phone = shuffle([1450, 1870, 2130]);

    let result = shuffle([
        offer1[0],
        TV[0],
        laptop[0],
        offer2[0],
        iPhone[0],
        ps[0],
        offer3[0],
        phone[0],
    ]);

    if (offer1.includes(result[0])) selectedItem = "90% Off Nike";
    if (TV.includes(result[0])) selectedItem = "Smart TV 64 Inc";
    if (laptop.includes(result[0])) selectedItem = "Macbook Air";
    if (offer2.includes(result[0])) selectedItem = "70% Off Zomato";
    if (iPhone.includes(result[0])) selectedItem = "Apple iPhone 14 Pro";
    // if (ps.includes(result[0])) selectedItem = "Playstation 5";
    if (offer3.includes(result[0])) selectedItem = "100% Cash Back";
    if (phone.includes(result[0])) selectedItem = "Samsung S23 Ultra";
    
    
    
    
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + result[0] + "deg)";
   
   
    element.classList.remove("animate");
    
    
    setTimeout(function(){
        element.classList.add("animate");
    },5000);


    setTimeout(function(){
        applause.play();
        Swal.fire({
            title: 'WOW...',
            html: 'You Won' + " " + selectedItem + ' | ' +  '<a href="#" style="text-decoration: none;color:blue"> Claim Now </a>',
            imageUrl: './assets/w img.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })

    },5500);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}