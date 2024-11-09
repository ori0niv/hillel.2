let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name:'Jack', salary: 1300}]
    }
};

function calculateSalarySum(department) {
    if (Array.isArray(department)) {
        return department.reduce((sum, employee) => sum + employee.salary, 0);
    } else {
        let sum = 0;
        for (let subDep in department) {
            sum += calculateSalarySum(department[subDep]);
        }
        return sum;
    }
}

let totalSalary = calculateSalarySum(company);
console.log(totalSalary);
