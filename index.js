const user = {
    name: "Maksym",
    surname: "Iliev",
    age: 18,
    country: "Turkey",
    city: "Antalya",

    getUserInfo: function () {
        return `Name: ${this.name}\nAge: ${this.age}\nCountry: ${this.country}\nCity: ${this.city}`;
    }
}
console.log(user.getUserInfo());
