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
    [key: string]: Array<{ id: number, title: string }>
}
export type ArrOfPrimit = {
    name: string
    age: number
    friends: Array<string>
}
export type ArrayOfObjects = Array<{ name: string, age: number }>
export type ArrOfObjectinsideObject = {
    name: string
    age: number
    friends: ArrayOfObjects
}
export type ObjectInsideObjectInsideObjectType = {
    name: string
    age: number
    mother: {
        name: string
        age: number
        work: {
            position: string
            experience: number
        }
    }
}
export type ArrayOfObjectsInsideObjectsType = {
    name: string
    age: number
    mother: {
        name: string
        age: number
        work: {
            position: string
            experience: number
        }
        parents: Array<{ name: string, age: number }>
    }
}
export type ObjectInsideObjectArrayObjectObjectType = {
    name: string
    age: number
    mother: {
        name: string
        age: number
        work: {
            position: string
            experience: number
        }
        parents: Array<{
            name: string
            age: number
            favoriteDish: {
                title: string
            }
        }>
    }
}
export type ArrayObjectObjectObjectArrayObjectType = {
    name: string
    age: number
    mother: {
        name: string
        age: number
        work: {
            position: string
            experience: number
        }
        parents: Array<{
            name: string
            age: number
            favoriteDish: {
                title: string
                ingredients: Array<{ title: string, amount: number }>
            }
        }>
    }
}

export function changeAddress(u: UserType, city: string) {
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

export function createPhoneNumber(numbers: Array<number>): string {

    let numb: string = numbers.map((l, index) => {
        if (index === 0) return `(${l}`;
        else if (index === 2) return `${l}) `;
        else if (index === 5) return `${l}-`;
        else return l;
    }).join('')

    return numb

}

export function changeName(u: UserPropsType, name: string, id: number, title: string): UserPropsType {
    return {
        ...u,
        [name]: u[name].map(c => c.id === id ? {...c, title} : c),
    }
}

// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

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

export function fullCopyArrayOfPrimitivInsadeObj(obj: ArrOfPrimit) {
    return {
        ...obj,
        friends: [...obj.friends]
    }
}

export function fullCopyArrayOfObjects(arr: ArrayOfObjects) {
    return arr.map(u => ({...u}))
}

export function fullCopyArrayOfObjectsInsideObject(obj: ArrOfObjectinsideObject): ArrOfObjectinsideObject {
    return {
        ...obj,
        friends: obj.friends.map(u => ({...u}))
    }
}

export function fullCopyObjectInsideObjectInsideObject(obj: ObjectInsideObjectInsideObjectType): ObjectInsideObjectInsideObjectType {
    return {
        ...obj,
        mother: {...obj.mother, work: {...obj.mother.work}}
    }
}

export function fullCopyArrayOfObjectsInsideObjects(obj: ArrayOfObjectsInsideObjectsType): ArrayOfObjectsInsideObjectsType {
    return {
        ...obj,
        mother: {
            ...obj.mother,
            work: {...obj.mother.work},
            parents: obj.mother.parents.map(u => ({...u}))
        }
    }
}

export function fullCopyObjectArrayObjectObject(obj: ObjectInsideObjectArrayObjectObjectType) {
    return {
        ...obj,
        mother: {
            ...obj.mother,
            parents: obj.mother.parents.map((u) => ({...u, favoriteDish: {...u.favoriteDish}}))
        }
    }
}

export function fullCopyArrayObjectObjectjbject(obj: ArrayObjectObjectObjectArrayObjectType): ArrayObjectObjectObjectArrayObjectType {
    return {
        ...obj,
        mother: {
            ...obj.mother,
            work: {...obj.mother.work},
            parents: obj.mother.parents.map(u => {
                return {
                    ...u,
                    favoriteDish: {
                        ...u.favoriteDish,
                        ingredients: u.favoriteDish.ingredients.map(i => ({...i}))
                    }
                }
            })
        }
    }
}

export function sortString(str: string) {
    if (str.length === 0) return ''
    let arr = str.split(' ')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        // @ts-ignore
        let number = Number(arr[i].split('').find(n => !isNaN(n))[0]) - 1
        newArr[number] = arr[i]
    }
    return newArr.join(' ')
}

export function filter_list(l: Array<any>): Array<any> {
    return l.filter(n => typeof n === 'number')
}

export function getSum(a: number, b: number): number {
    let sum: number = 0;
    let min: number = Math.min(a, b),
        max: number = Math.max(a, b);
    if (a === b) {
        return b
    }
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
}

export function iqTest(numbers: string): number {
    let newArr = numbers.split(" ").map(l => l % 2);
    let checkNumber = newArr.reduce((sum, current) => sum + current, 0);
    return (checkNumber === 1) ? newArr.findIndex(item => item === 1) + 1 : newArr.findIndex(item => item === 0) + 1
}

export function XO(str: string): boolean {
    let firstNUm = str.toLowerCase().split('').filter(l => l === 'x')
    let secnum = str.toLowerCase().split('').filter(l => l === 'o')
    return firstNUm.length === secnum.length
}

export function validatePinCode(pin: string): boolean {
    let arr = pin.split('').filter(n => !n.match(/\d/))
    if (arr.length > 0) return false;
    if ((pin.length === 4 || pin.length === 6) && Number.isInteger(+pin)) return true;

    return false;
}

export function isLeapYear(year: number): boolean {

    return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
}

export function overTheRoad(address: number, n: number): number {
    return n * 2 - address + 1
}

export function feast(beast: string, dish: string): boolean {

    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

export function vaporcode(str: string): string {
    if (str === 'Error') throw new Error()
    return str.toUpperCase().split(" ").join("").split("").join("  ")
}

export const prevMultOfThree = (n: number): number | null => {
    if (n === 0) return null;

    return (n % 3) ? prevMultOfThree(Math.trunc(n / 10)) : n;

}

export function loopArr(arr: Array<number>, direction: string, steps: number): Array<number> {
    if (direction === 'left') {
        const temp = arr.splice(0, steps)
        return arr.concat(temp)
    }
    if (direction === 'right') {
        const temp = arr.splice(-steps)
        return temp.concat(arr)
    }
}

export function descendingOrder(n: number): number {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}

export function duplicateCount(text: string): number {

    let arr = text.toLowerCase()
                    .split('')
                    .sort()
    let arrTemp = []

    for (let i = 0; i < arr.length; i++) {
       let temp = arr.filter((el, index) => el === arr[i])
        if(temp.length > 1) {
            arrTemp.push(temp[0])
            i = i + (temp.length -1)
        }

    }

    return arrTemp.length //...
}