//Завдання 2.1
enum Category {
    BusinessAnalyst = 'Business analyst',
    Developer = 'Developer',
    Designer = 'Designer',
    QA = 'QA',
    ScrumMaster = 'Scrum master'
}

interface Employee {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: string;
    markPrize: PrizeLogger;
}

function getAllWorkers(): Employee[] {
    return [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.BusinessAnalyst, markPrize: logPrize},
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Designer, markPrize: logPrize},
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.Developer, markPrize: logPrize },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.QA,markPrize: logPrize }
        // { name: 'Bib', surname: 'Bob', available: true, salary: Category.QA }
    ];
}

function getWorkerByID(id: number): Employee | undefined {
    const workers = getAllWorkers();
    return workers.find(worker => worker.id === id);
}

function printWorker(worker: Employee): void {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}

//Завдання 2.2

interface PrizeLogger {
    (prize: string): void;
}

const logPrize: PrizeLogger = prize => {
    console.log(prize);
};

console.log("Завдання 2.2\n")
logPrize('First Prize');

//Завдання 2.3
interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

const favoriteAuthor: Author = {
    name: 'Bob',
    email: 'bob@gmail.com',
    numBooksPublished: 1
};

// const favoriteLibrarian: Librarian = {
//     name: 'Bob',
//     email: 'bob@gmail.com',
//     department: 'Help',
//     assistCustomer: function(custName: string) {
//         console.log(custName);
//     }
// };

//Завдання 2.4

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    constructor(name: string, email: string, department: string) {
        this.name = name;
        this.email = email;
        this.department = department;
    }

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
console.log("Завдання 2.4\n")
let favoriteLibrarian = new UniversityLibrarian("","","");
favoriteLibrarian.name = "John";
favoriteLibrarian.assistCustomer("Bob");

//Завдання 2.5

// class ReferenceItem {
//     private _publisher: string = '';
//     // title: string = '';
//     // year: number = 0;

//     // constructor(newTitle: string , newYear: number) {
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     //     console.log('Creating a new ReferenceItem...');
//     // }

//     constructor(public title: string, private year: number) {
//         console.log('Creating a new ReferenceItem...');
//     }

//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }

//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}.`);
//         console.log(`Department: ${ReferenceItem.department}`);
//     }

//     static department: string = 'Metallurgy';
// }

// console.log("Завдання 2.5\n")
// const ref = new ReferenceItem('Steel', 2001);
// ref.printItem();

// Завдання 2.6
// class Encyclopedia extends ReferenceItem {
//     constructor(title: string, year: number, public edition: number) {
//         super(title, year);
//     }

//     printItem(): void {
//         super.printItem();
//         console.log(`Edition: ${this.edition} (${this.year})`);
//     }
// }

// console.log("Завдання 2.6\n")
// const refBook = new Encyclopedia('Biden', 2001, 11);
// refBook.printItem();

// Завдання 2.7

abstract class ReferenceItem {
    private _publisher: string = '';
    title: string = '';
    year: number = 0;

    constructor(newTitle: string, newYear: number) {
        this.title = newTitle;
        this.year = newYear;
        console.log('Creating a new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    static department: string = 'Psychology';

    abstract printCitation(): void;
}

class Encyclopedia2 extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

const test = new Encyclopedia2('Send Help', 2010, 4);
test.printCitation();