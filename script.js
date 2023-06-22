// variables
const slider = document.getElementById('customRange2');
const pageViews = document.getElementById('pv__number');
// const pageViews = document.querySelectorAll('pv__number');
const dollars = document.getElementById('dollars');
const toggle = document.getElementById('flexSwitchCheckDefault');
let discount = false;

// objects and functions 
class Price {
    constructor (views, price) {
        this.views = views;
        this.price = price;
    }
}
const priceStructure = [
    new Price(10000, 8), 
    new Price(50000, 12),
    new Price(100000, 16),
    new Price(500000, 24),
    new Price(1000000, 36)
]

const updateSlider = () => {
    let viewsNumber = priceStructure[slider.value].views;
    let priceNumber = priceStructure[slider.value].price;

    //price
    if (discount) {
        priceNumber = (priceNumber * 0.75);
    }
    dollars.innerText = `$${priceNumber}`;

    //views
    if ([...String(viewsNumber)].length === 5) {
        let viewsArray = [...String(viewsNumber)].slice(0,2);
        viewsArray.push('K');
        pageViews.innerText = viewsArray.join('');
    } else if ([...String(viewsNumber)].length === 6) {
        let viewsArray = [...String(viewsNumber)].slice(0,3);
        viewsArray.push('K');
        pageViews.innerText = viewsArray.join('');
    } else {
        let viewsArray = [...String(viewsNumber)].slice(0,1);
        viewsArray.push('M');
        pageViews.innerText = viewsArray.join('');
    }  
};

// execution

updateSlider();

toggle.addEventListener('click', function() {
    if (this.checked) {
      discount = true;
    } else if (!(this.checked)) {
      discount = false;
    }
    updateSlider();
  });

slider.addEventListener('input', () => {
    updateSlider();
});









