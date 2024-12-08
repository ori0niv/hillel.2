// Конструктор сутності "Студент"
class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = []; // Масив оцінок
        this.attendance = new Array(25).fill(null); // Масив відвідуваності
    }

    // Метод для отримання віку
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    // Метод для отримання середнього балу
    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return Math.round((sum / this.grades.length) * 10) / 10; // Округлення до 1 десяткового
    }

    // Метод для додавання оцінок
    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.log("Оцінка має бути в межах 0-100.");
        }
    }

    // Метод для відмітки відвідуваності (присутній)
    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Масив відвідуваності вже заповнений.");
        }
    }

    // Метод для відмітки відвідуваності (відсутній)
    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Масив відвідуваності вже заповнений.");
        }
    }

    // Метод для обчислення середнього відвідування
    getAttendanceRate() {
        const attendedClasses = this.attendance.filter(status => status === true).length;
        const totalClasses = this.attendance.filter(status => status !== null).length;
        if (totalClasses === 0) return 0;
        return Math.round((attendedClasses / totalClasses) * 10) / 10; // Округлення до 1 десяткового
    }

    // Метод для підсумку
    summary() {
        const avgGrade = this.getAverageGrade();
        const attendanceRate = this.getAttendanceRate();

        if (avgGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

// Створення екземплярів студентів
const student1 = new Student("Олександр", "Коваленко", 2000);
const student2 = new Student("Марія", "Петренко", 1998);
const student3 = new Student("Іван", "Іванов", 2001);

// Використання методів
student1.addGrade(95);
student1.addGrade(88);
student1.addGrade(92);
student1.present();
student1.present();
student1.absent();

student2.addGrade(70);
student2.addGrade(85);
student2.absent();
student2.present();
student2.absent();

student3.addGrade(60);
student3.addGrade(50);
student3.addGrade(40);
for (let i = 0; i < 25; i++) student3.absent();

// Вивід результатів
console.log(`${student1.firstName} ${student1.lastName}, Вік: ${student1.getAge()}`);
console.log("Середній бал:", student1.getAverageGrade());
console.log("Відвідуваність:", student1.getAttendanceRate());
console.log("Підсумок:", student1.summary());

console.log(`${student2.firstName} ${student2.lastName}, Вік: ${student2.getAge()}`);
console.log("Середній бал:", student2.getAverageGrade());
console.log("Відвідуваність:", student2.getAttendanceRate());
console.log("Підсумок:", student2.summary());

console.log(`${student3.firstName} ${student3.lastName}, Вік: ${student3.getAge()}`);
console.log("Середній бал:", student3.getAverageGrade());
console.log("Відвідуваність:", student3.getAttendanceRate());
console.log("Підсумок:", student3.summary());
