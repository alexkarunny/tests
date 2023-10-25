import internal from 'stream';

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
    let newArr = numbers.split(' ').map(l => l % 2);
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
    return str.toUpperCase().split(' ').join('').split('').join('  ')
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
        if (temp.length > 1) {
            arrTemp.push(temp[0])
            i = i + (temp.length - 1)
        }

    }

    return arrTemp.length //...
}

export function isSquare(n: number): boolean {
    return Number.isInteger(Math.sqrt(n)); // fix me
}

export function persistence(num: number): number {

    /* if (num < 10) return 0;

     let tempNumber = num.toString().split('').reduce((acc, item) => acc * +item, 1)

     return 1 + persistence(tempNumber) //code me*/
    return (num < 10) ? 0 : 1 + persistence(num.toString().split('').reduce((acc, item) => acc * +item, 1))
}

export function uniqueInOrder(iterable: string | any[]): string[] {
    return (typeof iterable === 'string')
        ? iterable.split('').filter((it, ind, arr) => it !== arr[ind - 1])
        : iterable.filter((it, ind, arr) => it !== arr[ind - 1])//your code here - remember iterable can be a string or an array
}

export function tickets(peopleInLine: number[]): 'YES' | 'NO' {
    if (peopleInLine[0] > 25 || peopleInLine.length === 0) return 'NO'
    const banknote = []

    for (let i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] === 25) banknote.push(25)
        else if (peopleInLine[i] === 50) {
            let index = banknote.findIndex(item => item === 25)
            if (index >= 0) {
                banknote.splice(index, 1, 50)
            } else return 'NO'
        } else if (peopleInLine[i] === 100) {
            let temp = banknote.reduce((acc, item) => acc + item)
            if (temp < 75) return 'NO'
            else if (temp >= 75) {
                let indexFifty = banknote.findIndex(item => item === 50)
                let indexTwenty = banknote.findIndex(item => item === 25)

                if (indexFifty >= 0 && indexTwenty >= 0) {
                    banknote.splice(indexFifty, 1)
                    banknote.splice(banknote.findIndex(item => item === 25), 1)
                } else {
                    if (banknote.findIndex(item => item === 25) >= 0) {
                        banknote.splice(banknote.findIndex(item => item === 25), 1)
                    } else return 'NO'
                    if (banknote.findIndex(item => item === 25) >= 0) {
                        banknote.splice(banknote.findIndex(item => item === 25), 1)
                    } else return 'NO'
                    if (banknote.findIndex(item => item === 25) >= 0) {
                        banknote.splice(banknote.findIndex(item => item === 25), 1)
                    } else return 'NO'

                }
            }
        }
    }


    return 'YES'
}

export function isTriangle(a: number, b: number, c: number): boolean {
    return (a + b) > c && (a + c) > b && (b + c) > a;
}

export function sumTwoSmallestNumbers(numbers: number[]): number {
    numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
}

export function longest(s1: string, s2: string): string {
    return s1.split('').concat(s2.split('')).sort().filter((s, ind, arr) => s !== arr[ind - 1]).join('')
}

export function rowSumOddNumbers(n: number): number {
    if (n === 1) return 1
    let num = 1
    let tempNum = 0

    for (let i = 1; i < n; i++) {
        tempNum += i
    }

    for (let i = 1; i < tempNum; i++) {
        num += 2
    }
    let sum: number = 0

    for (let i = 0; i < n; i++) {
        num += 2
        sum += num
    }

    return sum// TODO
}

export function divisors(integer: number): number[] | string {

    let arr = []
    for (let i = 2; i < integer; i++) {
        if (!(integer % i)) {
            arr.push(i)
        }
    }
    return (arr.length > 0) ? arr : `${integer} is prime`
};

export function lastChair(N: number): number {
    return
}

export function getNumberPassengers(busStops: number[][]): number {
    return busStops.reduce((acc, item) => acc + item[0] - item[1], 0)
}

export function reverseWords(str: string) {
    return str.split(' ')
        .map(item => item.split('').reverse().join(''))
        .join(' ')
}

export function isPalindrome(x: string): boolean {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}

export function arrayDiff(a: number[], b: number[]) {
    if (a.length === 0 || b.length === 0) return a;

    let arr = a.filter(item => {
        let temp = 0
        for (let i = 0; i < b.length; i++) {
            if (item === b[i]) {
                temp += 1
            }
        }
        if (temp === 0) return item
    })
    return arr
}

export function solution(a: string, b: string): string {
    return (a.length > b.length) ? b + a + b : a + b + a
}

export function reverseWord(str: string) {
    return str.split(' ').reverse().join(' ')
}

export function lastSurvivor(letters: string, coords: number[]): string {
    if (coords.length === 0) return letters;
    let tempNum = coords.length
    let arr = letters.split('')

    for (let i = 0; i < tempNum; i++) {
        arr.splice(coords[0], 1)
        coords.splice(0, 1)
    }

    return arr.join('')
}

export function lastSurvivors(str: string): string {

    let arr = str.split('').sort()

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i + 1]) {

            let letter = (arr[i].codePointAt(0) === 122) ? 'a' : String.fromCharCode(arr[i].codePointAt(0) + 1)

            arr.splice(i, 2, letter)
            arr.sort()
            i = -1
        }

    }
    return arr.join('')
}

export function infected(s: string): number {

    const arr = s.split('X')
    const newArr = [0, 0]

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].indexOf('1')
        if (temp > -1) {
            newArr[0] += arr[i].length
            newArr[1] += arr[i].length
        } else {
            newArr[1] += arr[i].length
        }
    }

    return (newArr[1] === 0) ? 0 : (100 * newArr[0]) / newArr[1];
}

export function newMember(membersList: number[][]): string[] {
    return membersList.map(item => (item[0] >= 55 && item[1] > 7) ? 'Senior' : 'Open')
}

export function xMasTree(n: number): string[] {
    let height = '#'
    const arr = []
    for (let i = 1; i < n; i++) {
        height += '##'
    }

    let num = Math.floor(height.length / 2)

    for (let i = 0; i < n; i++) {
        arr.push(height.split('')
            .map((item, ind) => {
                if (ind >= (num - i) && ind <= (num + i)) return '#'
                else return '_'
            }).join(''))
    }
    let trunk = arr[0]
    arr.push(trunk)
    arr.push(trunk)
    return arr

}

export function findNextSquare(sq: number): number {
    return Number.isInteger(Math.sqrt(sq))
        ? Math.pow(Math.sqrt(sq) + 1, 2)
        : -1
}

export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    if (enteredCode !== correctCode) return false

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let currentMonth = months.findIndex(item => item === currentDate.split(' ')[0])
    let currentDay = Number(currentDate.split(' ')[1].match(/\d+/g))
    let currentYear = Number(currentDate.split(' ')[2])

    let expMonth = months.findIndex(item => item === expirationDate.split(' ')[0])
    let expDay = Number(expirationDate.split(' ')[1].match(/\d+/g))
    let expYear = Number(expirationDate.split(' ')[2])

    let currDate = new Date(currentYear, currentMonth, currentDay)
    let expDate = new Date(expYear, expMonth, expDay)

    return ((expDate - currDate) >= 0) ? true : false
}

export function billboard(name: string, price = 30): number {
    let sum = 0
    for (let i = 0; i < name.length; i++) {
        sum += price
    }
    return sum
}

export function friend(friends: string[]): string[] {
    return friends.filter(item => item.length === 4)
}

export function SeriesSum(n: number): string {
    //if(n === 0) return '0.00'
    let temp = 1
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += 1 / temp
        temp += 3
    }
    return sum.toFixed(2)
}

export function removeSmallest(numbers: number[]): number[] {
    if (numbers.length === 0) return numbers
    const arr = [...numbers]
    let inde = numbers.indexOf(arr.sort((a, b) => a - b)[0])
    return numbers.filter((item, ind) => ind !== inde)
}

export function isIsogram(str: string): boolean {
    if (str.length === 0) return true;
    let newStr = str.toLowerCase().split('').sort().filter((item, index, a) => item !== a[index + 1]).join('')
    return newStr.length === str.length
}

export function hello(name: any) {
    if (typeof name === 'undefined' || name.length === 0) return 'Hello, World!'
    const str = name[0].toUpperCase() + name.toLowerCase().substr(1)
    return `Hello, ${str}!`;
}

export function calculateAge(yearOfBirth: number, year: number): string {
    if (yearOfBirth === year) return 'You were born this very year!';
    else if (yearOfBirth - year === 1) return 'You will be born in 1 year.';
    else if (year - yearOfBirth === 1) return 'You are 1 year old.'

    return ((yearOfBirth - year) > 0)
        ? `You will be born in ${yearOfBirth - year} years.`
        : `You are ${year - yearOfBirth} years old.`
}

export function missingNo(nums: number[]): number {
    let sum = 0
    for (let i = 0; i <= 100; i++) {
        sum += i
    }
    return sum - nums.reduce((acc, item) => acc + item)

}

export function simpleMultiplication(number: number): number {
    return (number % 2) ? number * 9 : number * 8
}

export function sumCubes(n: number): number {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i * i * i
    }
    return sum
}

export function howManyYears(date1: string, date2: string): number {
    return Math.abs(+date1.split('/')[0] - +date2.split('/')[0]);
}

export function solve(nums: number[], div: number): number[] {
    return nums.map(item => item + (item % div))
}

export function connotation(str: string): boolean {
    let temp = [0, 0]
    const arr = str.split(' ')
        .filter(item => item !== '')
        .map(item => item.trim().toLowerCase())
    for (let i = 0; i < arr.length; i++) {
        let t = arr[i][0].charCodeAt(0)
        if (t >= 97 && t <= 109) temp[0] += 1
        else temp[1] += 1
    }
    return (temp[0] >= temp[1]) ? true : false
}

export function divide(weight: number): boolean {
    return (weight < 4 || (weight % 2)) ? false : true
}

export function findOutlier(integers: number[]): number {
    let arr = [0, 0]
    for (let i = 0; i < integers.length; i++) {
        (integers[i] % 2) ? arr[0] += 1 : arr[1] += 1
    }
    return (arr[0] > arr[1]) ? integers.filter(i => (i % 2) === 0)[0] : integers.filter(i => (i % 2) !== 0)[0]
}

export function flattenAndSort(arr: number[][]): number[] {
    let ara: number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) ara = ara.concat(arr[i]);
    }
    return ara.sort((a, b) => a - b);
}

export function oddOrEven(arr: number[]): 'odd' | 'even' {
    if (arr.length === 0) return 'even'
    let temp = arr.reduce((acc, item) => acc + item)
    return (temp % 2) ? 'odd' : 'even'
}

export function bitsBattle(numbers: number[]): string {
    if (numbers.length === 0) return 'tie';
    let oddNUms = numbers.filter(num => num % 2)

    let evenNUms = numbers.filter(num => (num % 2) === 0);

    let oddNum = oddNUms.reduce((acc, item) => {
        let num = item.toString(2).split('').filter(i => +i === 1)
        return num.length + acc
    }, 0)

    let evenNum = evenNUms.reduce((acc, item) => {
        let num = item.toString(2).split('').filter(i => +i === 0)
        return num.length + acc
    }, 0)

    if (oddNum > evenNum) return 'odds win';
    if (evenNum > oddNum) return 'evens win';

    return 'tie'; //code here
}

export function stringToArray(string: string): string[] {
    return string.split(' ')
}

export function usdcny(usd: number): string {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

export function evenNumbers(array: number[], number: number): number[] {
    return array.filter(num => (num % 2) === 0).splice(-number)
}

export function removeChar(str: string): string {
    return str.split('').filter((letter, index) => index !== 0 && index !== (str.length - 1)).join('')
};

export function removeFirstLastCharacters(str: string): string | null {

    const arr = str.split(',')
    if (arr.length < 3) return null;
    return arr.filter((letter, index, array) => index !== 0 && index !== (array.length - 1)).join(' ')
}

export const part = (x: string[]): string => {
    const sampleArray = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad']
    let phrase = 'Mine\'s a Pint'

    for (let i = 0; i < x.length; i++) {
        phrase += (sampleArray.includes(x[i])) ? '!' : '';
    }

    return (phrase.length > 13) ? phrase : 'Lynn, I\'ve pierced my foot on a spike!!';
}

export const apple = (x: string | number): string => {
    return (Math.pow(Number(x), 2) > 1000) ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

export const isDivideBy = (number: number, a: number, b: number) => {
    return (!(number % a) && !(number % b)) ? true : false
}

export const strToNumber = (str: string): number => {
    return +str
}

export const excludingVatPrice = (price: number): number => {
    // your code
    if (price === null) return -1;
    let vat = Number((price * 15 / 115).toFixed(2))
    return Number((price - vat).toFixed(2));
}

export const distinctDigitYear = (year: number): number => {
    //coding and coding..

    let num = year + 1
    for (let i = num; i < 9000; i++) {
        /*
                let str = i.toString()
                if(str[0] !== str[1] && str[0] !== str[2] && str[0] !== str[3] && str[1] !== str[2] && str[1] !== str[3] && str[2] !== str[3]) {
                    num = i
                    break
                }
        */
        let check = new Set(i.toString())

        if (check.size === 4) {
            num = i
            break
        }

    }

    return num
}

export const validParentheses = (parenStr: string): boolean => {
    if (parenStr.length % 2) return false

    let arr = parenStr.split('')
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].charCodeAt(0) === 40 && arr[i + 1].charCodeAt(0) === 41) {
            arr.splice(i, 2)
            i = -1
        }
    }
    return !arr.length
}

export const validBraces = (braces: string): boolean => {
    //TODO

    let bracesObj = {
        parentheses: '()',
        braces: '{}',
        square_brackets: '[]'
    }

    let bracesArr = braces.split('')

    if ((braces.length % 2) || braces[0] === bracesObj.braces[1] || braces[0] === bracesObj.parentheses[1] || braces[0] === bracesObj.square_brackets[1] || braces[braces.length - 1] === bracesObj.braces[0] || braces[braces.length - 1] === bracesObj.parentheses[0] || braces[braces.length - 1] === bracesObj.square_brackets[0]) return false

    for (let i = 0; i < bracesArr.length - 1; i++) {
        if (bracesArr[i] === bracesObj.braces[0] && bracesArr[i + 1] === bracesObj.braces[1]) {
            bracesArr.splice(i, 2)
            i = -1
        } else if (bracesArr[i] === bracesObj.parentheses[0] && bracesArr[i + 1] === bracesObj.parentheses[1]) {
            bracesArr.splice(i, 2)
            i = -1
        } else if (bracesArr[i] === bracesObj.square_brackets[0] && bracesArr[i + 1] === bracesObj.square_brackets[1]) {
            bracesArr.splice(i, 2)
            i = -1
        }
    }

    return !bracesArr.length
}

export const neutralise = (s1: string, s2: string): string => {
    // Here be dragons!

    const result = []

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) result.push(s1[i])
        else result.push('0')
    }

    return result.join('');
}
export const towerBuilder = (nFloors: number): string[] => {
    // build here
    const floorLength = 1 + 2 * (nFloors - 1)
    const tower = []
    const star = '*'
    const space = ' '

    for (let i = 1; i <= nFloors; i++) {
        let floorStar = 1 + 2 * (i - 1)
        let spaces = floorLength - floorStar
        let floor = space.repeat(spaces / 2) + star.repeat(floorStar) + space.repeat(spaces / 2)
        tower.push(floor)
    }


    return tower
}

export const findUniq = (arr: number[]): number => {
    // do magic

    const newArr = arr.filter(n => n === arr[0])

    if (newArr.length === 1) {
        return newArr[0]
    }

    return arr.find(n => n !== newArr[0])
}
export const solutionNew = (st: string): string => {

    const arr = st.split('')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt(0) < 91) {
            arr.splice(i, 0, ' ')
            i++
        }
    }

    return arr.join('')

}
