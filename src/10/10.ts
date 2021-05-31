
export type UserType = {
    name: string
    age: number
    address: {
        city: string
        street: string
    }
    books: Array<string>
    companies: Array<{
        id: number
        title: string
    }>
}
export type SimpleObjectType = {
    name: string
    age: number
}
export type arrOfPrim = Array<number>
export type bjInsObjType = {
    name: string
    age: number
    mother: {
        name: string
        age: number
    }
}
export type UserPropsType = {
    [key: string]: Array<{id: number, title: string}>
}

export function changeAddress(u: UserType, city: string ) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}
export function changeBook(u: UserType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}
export function addBook(u: UserType, newBook: string) {
    return {
        ...u
    }
}
export function delBook(u: UserType, delBook: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== delBook)
    }
}
export function changeCcmpanyname(u: UserType, id: number, title: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: title} : c)
    }
}
export function createPhoneNumber(numbers: Array<number>): string{

    let numb:string = numbers.map((l, index) => {
        if(index === 0) return `(${l}`;
        else if(index === 2) return `${l}) `;
        else if(index === 5) return `${l}-`;
        else return l;
    }).join('')

    return numb

}
export function changeName(u: UserPropsType, name: string, id: number, title: string): UserPropsType{
    return {
        ...u,
        [name]: u[name].map(c => c.id === id ? {...c, title} : c),
    }
}

// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

let man2FullCopy  // your code

// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];

let peopleFullCopy  // your code

// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

let man3FullCopy //  your code

// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy //  your code

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};

let man5FullCopy //  your code

// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy  //  your code

//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy  //  your code

export function simpleObjectCopy(u: SimpleObjectType): SimpleObjectType {
    return {
        ...u
    }
}
export function arrOfPrimit(arr: arrOfPrim): arrOfPrim {
    return [...arr]
}
export function copyObjInsObj(obj: bjInsObjType) {
    return {
        ...obj,
        mother: {...obj.mother}
    }
}
