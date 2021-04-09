// url links for access to CRUD functionality to the API
const url = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

// select the element being used
const listElement = document.querySelector(".listContainer");

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            listElement.innerHTML = beanVarieties.map((beanVarietyObject) => {
                const list = () => {
                    if (beanVarietyObject.notes !== null) {
                        return beanVarietyObject.notes
                    } else {
                        return `N/A`
                    }
                }
                return `
                <div>
                    <br />
                    <div>Name: ${beanVarietyObject.name}</div>
                    <div>Region: ${beanVarietyObject.region}</div>
                    <div>Notes: ${list()}</div>
                </div>
                `;
            })
                .join("");
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const coffeeButton = document.querySelector("#run-coffee-button");
coffeeButton.addEventListener("click", () => {
    getAllCoffee().then(coffee => {
        console.log(coffee);
        listElement.innerHTML = coffee.map((c) => {
            return `
                <div>
                    <br />
                    <div>Coffee: ${c.title}</div>
                    <div>Variety Name: ${c.beanVariety.name}</div>
                    
                </div>
                `;
        })
            .join("");
    })
});

function getAllCoffee() {
    return fetch(coffeeUrl).then(resp => resp.json());
}