const slider = document.getElementById('customRange2');
const pageViews = document.getElementById('pv__number');
const dollars = document.getElementById('dollars');
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
const checkSlider = () => {
    let priceSelection = Number(slider.value);
    pageViews.innerText = priceStructure[priceSelection].views;
    dollars.innerText = priceStructure[priceSelection].price;
};

checkSlider();

slider.addEventListener('input', () => {
    checkSlider();
});








