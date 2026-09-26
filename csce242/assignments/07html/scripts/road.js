/* anything with comments beside it was help from CHATGPT */
const road = document.getElementById("road");

const createCar = (left, top) => {
    const car = document.createElement("div");
    car.classList.add("car");

    car.style.left = `${left}px`;
    car.style.top = `${top}px`;

    road.append(car);
};

const loadCars = () => {
    const numberOfCars = 7;
    for (let i = 0; i < numberOfCars; i++) {
        const maxLeft = road.clientWidth - 100;
        const left = Math.floor(Math.random() * maxLeft); /* creates a random horizontal position */

        let top;

        /* randomly chooses a lane and a position in that lane */
        if (Math.random() < 0.5) {
            top = Math.floor(Math.random() * 55) + 25;
        } else {
            top = Math.floor(Math.random() * 55) + 160;
        }
        
        createCar(left, top);
    }
};

loadCars();