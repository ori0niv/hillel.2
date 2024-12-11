class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    displayInfo() {
        console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
    }
}

const coach1 = new Coach('John Art', 'CrossFit', 4.7);
const coach2 = new Coach('Alice Born', 'dance', 4.9);

coach1.displayInfo();
coach2.displayInfo();