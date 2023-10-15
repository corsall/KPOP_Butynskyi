// Завдання 1.2

enum Category {
    BusinessAnalyst = 'Business analyst',
    Developer = 'Developer',
    Designer = 'Designer',
    QA = 'QA',
    ScrumMaster = 'Scrum master'
}

// Завдання 1.1

interface Employee {
    id: number
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
}

function getAllWorkers(): Employee[] {
    let workers: Employee[] = [
        {id : 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst},
        {id : 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer},
        {id : 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer},
        {id : 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Designer}
    ];
    return workers;
}

function logFirstAvailable(workers: Employee[] = getAllWorkers()): void {
    let count: number = workers.length;
    console.log(`Кількість робітників у масиві: ${count}`);

    for (let worker of workers) {
        if (worker.available) {
            console.log(`Перший доступний робітник: ${worker.name} ${worker.surname}`);
            break;
        }
    }
}

console.log("Завдання 1.1 \n")
logFirstAvailable(getAllWorkers())


// Завдання 1.2
function getWorkersNamesByCategory(category: Category = Category.Designer): Array<string> {
    const workers = getAllWorkers();
    return workers
        .filter(worker => worker.category === category)
        .map(worker => worker.surname);
}

function logWorkersNames(names: string[]): void {
    console.log(names.join(', '));
}

console.log("\nЗавдання 1.2 \n")
let devs = getWorkersNamesByCategory(Category.Developer);
logWorkersNames(devs);


// Завдання 1.3
console.log("\nЗавдання 1.3 \n")

console.log("Робітники категорії Developer:");
getAllWorkers().forEach(worker => {
    if (worker.category === Category.Developer) console.log(`${worker.name} ${worker.surname}`)
});

function getWorkerByID(id: number): {name: string, surname: string, salary: number} | undefined{
    return getAllWorkers().find(worker => worker.id === id);
}

const employeeTest = getWorkerByID(3);

if(employeeTest){
    console.log(`\nРобітник з ID 3: ${employeeTest.name} ${employeeTest.surname}, зарплата: ${employeeTest.salary}`);
}

// Завдання 1.4

function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

console.log("\nЗавдання 1.4 \n")
let myID: string = createCustomerID('Ann', 10);
console.log(myID);

let IdGenerator = (name:string, id:number) : string => {
    return `${name}${id}`;
};

IdGenerator = createCustomerID;
console.log(IdGenerator('Ann', 5)); 

// Завдання 1.5

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Замовник: ${name}`);
    if (age) console.log(`Вік: ${age}`);
    if (city) console.log(`Місто: ${city}`);
}

console.log("\nЗавдання 1.5 \n")
createCustomer('Ivan');
createCustomer('Petro', 25);
createCustomer('Olga', 30, 'Kyiv\n');


console.log(getWorkersNamesByCategory()[0]);

console.log("\nВиклик по дефолту:\n")
logFirstAvailable();


console.log("\ncheckoutWorkers:\n")
function checkoutWorkers(customer: string, ...workerIDs: number[]): string[] {
    console.log(`Замовник: ${customer}`);
    const availableWorkers = workerIDs.map(id => {
        const worker = getAllWorkers().find(w => w.id === id && w.available);
        return worker ? `${worker.name} ${worker.surname}` : '';
    }).filter(name => name !== '');

    return availableWorkers;
}

const myWorkers = checkoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(worker => console.log(worker));