import {
    addBook, arrOfPrim, arrOfPrimit, bjInsObjType,
    changeAddress,
    changeBook,
    changeCcmpanyname, changeName, copyObjInsObj,
    createPhoneNumber,
    delBook, simpleObjectCopy, SimpleObjectType,
    UserPropsType,
    UserType
} from "./10";

test('change city', () => {
    let user: UserType = {
        name: 'Aled',
        age: 25,
        address: {
            city: 'Minsk',
            street: 'Kaz',
        },
        books: ['TS', 'JS', 'CSS'],
        companies: [
            {id: 1, title: 'CIT'},
            {id: 2, title: 'GPN'},
            {id: 3, title: 'OMA'},
        ],
    }

    const userCopy = changeAddress(user, 'Kiev')

    expect(userCopy.address.city).toBe('Kiev')
    expect(user.address.city).toBe('Minsk')
})
test('change book', () => {
    const user: UserType = {
        name: 'Aled',
        age: 25,
        address: {
            city: 'Minsk',
            street: 'Kaz',
        },
        books: ['TS', 'JS', 'CSS'],
        companies: [
            {id: 1, title: 'CIT'},
            {id: 2, title: 'GPN'},
            {id: 3, title: 'OMA'},
        ],
    }

    const copyUser: UserType = changeBook(user, 'JS', 'HTML5')

    expect(copyUser.books[1]).toBe('HTML5')
    expect(user.books[1]).toBe('JS')

})
test('add mook', () => {
    const user: UserType = {
        name: 'Aled',
        age: 25,
        address: {
            city: 'Minsk',
            street: 'Kaz',
        },
        books: ['TS', 'JS', 'CSS'],
        companies: [
            {id: 1, title: 'CIT'},
            {id: 2, title: 'GPN'},
            {id: 3, title: 'OMA'},
        ],
    };

    const copyUser = addBook(user, 'Algorithm');

   // expect(copyUser.books[0]).toBe('Algorithm')
   // expect(copyUser.books.length).toBe(4)
   // expect(user.books.length).toBe(3)
    expect(copyUser.companies).toBe(user.companies)
})
test('del book', () => {
    const user: UserType = {
        name: 'Aled',
        age: 25,
        address: {
            city: 'Minsk',
            street: 'Kaz',
        },
        books: ['TS', 'JS', 'Beeo', 'CSS'],
        companies: [
            {id: 1, title: 'CIT'},
            {id: 2, title: 'GPN'},
            {id: 3, title: 'OMA'},
        ],
    };

    const copyUser = delBook(user, 'Beeo')

    expect(copyUser.books.length).toBe(3)
})
test('change company name', () => {

    const user: UserType = {
        name: 'Aled',
        age: 25,
        address: {
            city: 'Minsk',
            street: 'Kaz',
        },
        books: ['TS', 'JS', 'Beeo', 'CSS'],
        companies: [
            {id: 1, title: 'CIT'},
            {id: 2, title: 'GPN'},
            {id: 3, title: 'OMA'},
        ],
    };

    const copyUser = changeCcmpanyname(user, 3, 'ZAO')

    expect(copyUser.companies[2].title).toBe('ZAO')

})
test('change number', () => {

    const result: string = createPhoneNumber([1, 1, 1, 2, 2, 2, 7, 8, 9, 5])

    expect(result).toBe('(111) 222-7895')

})
test('change company s', () => {
    const user: UserPropsType = {
        'Alex': [{id: 1, title: 'erav'}, {id: 2, title: 'ItIncubator'},],
        'Dima': [{id: 1, title: 'pon'}, {id: 2, title: 'hey'}],
    }

    const userCopy: UserPropsType = changeName(user, 'Alex',  1, 'EPAM' )

    expect(userCopy['Alex'][0].title).toBe('EPAM');
    expect(user['Alex']).not.toBe(userCopy['Alex']);
    expect(user['Dima']).toBe(userCopy['Dima'])
})
test('1 simple object', () => {
    // 1. Simple object
    let man: SimpleObjectType = {
        name: 'John',
        age: 28
    };

    let manFullCopy: SimpleObjectType = simpleObjectCopy(man)
    manFullCopy.name = 'Elle'

    expect(man).not.toBe(manFullCopy)
    expect(man.name).toBe('John')
})
test('2 Aray of primitives', () => {
    // 2. Array of primitives
    let numbers: arrOfPrim = [1, 2, 3];

    let numbersFullCopy = arrOfPrimit(numbers)

    expect(numbers).not.toBe(numbersFullCopy)
})
test('3 object inside object', () => {

// 3. Object inside an object
    let man1: bjInsObjType = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };

    let man1FullCopy = copyObjInsObj(man1)
    man1FullCopy.mother.age = 61

    expect(man1.mother).not.toBe(man1FullCopy.mother)
    expect(man1.mother.age).toBe(50)



})
