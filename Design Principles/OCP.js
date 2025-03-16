class Price {
    getPrice() {
        return 100;
    }
}

class DiscountedPrice extends Price {
    getDiscountedPrice() {
        return 80;
    }
}

const obj = new DiscountedPrice();
console.log(obj.getDiscountedPrice());