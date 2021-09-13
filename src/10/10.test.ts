import {
    addBook, arrayDiff,
    ArrayObjectObjectObjectArrayObjectType,
    ArrayOfObjects,
    ArrayOfObjectsInsideObjectsType,
    ArrOfObjectinsideObject,
    arrOfPrim,
    ArrOfPrimit,
    arrOfPrimit,
    bjInsObjType,
    changeAddress,
    changeBook,
    changeCcmpanyname,
    changeName,
    copyObjInsObj,
    createPhoneNumber,
    delBook,
    descendingOrder,
    divisors,
    duplicateCount,
    feast,
    filter_list,
    fullCopyArrayObjectObjectjbject,
    fullCopyArrayOfObjects,
    fullCopyArrayOfObjectsInsideObject,
    fullCopyArrayOfObjectsInsideObjects,
    fullCopyArrayOfPrimitivInsadeObj,
    fullCopyObjectArrayObjectObject,
    fullCopyObjectInsideObjectInsideObject, getNumberPassengers,
    getSum,
    iqTest,
    isLeapYear, isPalindrome,
    isSquare,
    isTriangle,
    lastChair,
    longest,
    loopArr,
    ObjectInsideObjectArrayObjectObjectType,
    ObjectInsideObjectInsideObjectType,
    overTheRoad,
    persistence,
    prevMultOfThree, reverseWords,
    rowSumOddNumbers,
    simpleObjectCopy,
    SimpleObjectType, solution,
    sortString,
    sumTwoSmallestNumbers,
    tickets,
    uniqueInOrder,
    UserPropsType,
    UserType,
    validatePinCode,
    vaporcode,
    XO
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

    const userCopy: UserPropsType = changeName(user, 'Alex', 1, 'EPAM')

    expect(userCopy['Alex'][0].title).toBe('EPAM');
    expect(user['Alex']).not.toBe(userCopy['Alex']);
    expect(user['Dima']).toBe(userCopy['Dima'])
})
test('1. Simple object', () => {
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
test('2. Array of primitives', () => {
    // 2. Array of primitives
    let numbers: arrOfPrim = [1, 2, 3];

    let numbersFullCopy = arrOfPrimit(numbers)

    expect(numbers).not.toBe(numbersFullCopy)
})
test('3. Object inside an object', () => {

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
test('4. Array of primitives inside an object', () => {
    // 4. Array of primitives inside an object
    let man2: ArrOfPrimit = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    let man2FullCopy: ArrOfPrimit = fullCopyArrayOfPrimitivInsadeObj(man2)
    man2FullCopy.friends[1] = 'Alex';

    expect(man2.friends[1]).toBe('Steven')
    expect(man2.friends).not.toBe(man2FullCopy.friends)
    expect(man2FullCopy.friends[1]).toBe('Alex')

})
test('5. Array of objects', () => {
    // 5 Array of objects
    let people: ArrayOfObjects = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];

    let peopleFullCopy = fullCopyArrayOfObjects(people)
    peopleFullCopy[0].name = 'Alex'
    expect(peopleFullCopy[0].name).toBe('Alex')
    expect(people[0].name).toBe('Peter')
    expect(people).not.toBe(peopleFullCopy)
})
test('6. Array of objects inside object', () => {
    // 6 Array of objects inside object
    let man3: ArrOfObjectinsideObject = {
        name: 'John',
        age: 25,
        friends: [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ]
    };

    let man3FullCopy: ArrOfObjectinsideObject = fullCopyArrayOfObjectsInsideObject(man3)
    man3FullCopy.friends[0].name = 'Alex'

    expect(man3.friends).not.toBe(man3FullCopy.friends)
    expect(man3.friends[0].name).toBe('Peter')
    expect(man3FullCopy.friends[0].name).toBe('Alex')
    //  your code

})
test('7. Object inside an object, inside an object', () => {
    // 7 Object inside an object, inside an object
    let man4: ObjectInsideObjectInsideObjectType = {
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

    let man4FullCopy: ObjectInsideObjectInsideObjectType = fullCopyObjectInsideObjectInsideObject(man4)
    man4FullCopy.mother.work.experience = 20
    expect(man4.mother.work).not.toBe(man4FullCopy.mother.work)
    expect(man4.mother.work.experience).toBe(15)
    expect(man4FullCopy.mother.work.experience).toBe(20)

})
test('8. Array of objects inside object -> object', () => {
    // 8 Array of objects inside object -> object
    let man5: ArrayOfObjectsInsideObjectsType = {
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

    let man5FullCopy: ArrayOfObjectsInsideObjectsType = fullCopyArrayOfObjectsInsideObjects(man5)
    man5FullCopy.mother.work.experience = 26

    expect(man5.mother.parents).not.toBe(man5FullCopy.mother.parents)
    expect(man5.mother.work).not.toBe(man5FullCopy.mother.work)
    expect(man5FullCopy.mother.work.experience).toBe(26)
    expect(man5.mother.work.experience).toBe(15)
})
test('9. Object inside an object -> array -> object ->  object', () => {
    // 9 Object inside an object -> array -> object ->  object
    let man6: ObjectInsideObjectArrayObjectObjectType = {
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

    let man6FullCopy = fullCopyObjectArrayObjectObject(man6)
    man6FullCopy.mother.parents[0].favoriteDish.title = 'red soup'
    expect(man6FullCopy.mother.parents[0].favoriteDish.title).toBe('red soup')
    expect(man6.mother.parents[0].favoriteDish.title).toBe('borscht')
    expect(man6.mother.parents[0].favoriteDish).not.toBe(man6FullCopy.mother.parents[0].favoriteDish)


})
test('10 Array of objects inside an object -> object -> array -> object ->  object', () => {
    //10 Array of objects inside an object -> object -> array -> object ->  object
    let man7: ArrayObjectObjectObjectArrayObjectType = {
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

    let man7FullCopy: ArrayObjectObjectObjectArrayObjectType = fullCopyArrayObjectObjectjbject(man7)
    man7FullCopy.mother.parents[0].favoriteDish.ingredients[1].amount = 347

    expect(man7.mother.parents).not.toBe(man7FullCopy.mother.parents)
    expect(man7.mother.parents[0].favoriteDish).not.toBe(man7FullCopy.mother.parents[0].favoriteDish)
    expect(man7.mother.parents[0].favoriteDish.ingredients).not.toBe(man7FullCopy.mother.parents[0].favoriteDish.ingredients)
    expect(man7.mother.parents[0].favoriteDish.ingredients[1].amount).not.toBe(man7FullCopy.mother.parents[0].favoriteDish.ingredients[1].amount)
    expect(man7.mother.parents[0].favoriteDish.ingredients[1].amount).toBe(5)
    expect(man7FullCopy.mother.parents[0].favoriteDish.ingredients[1].amount).toBe(347)


})
test(' sort a given strin', () => {
    let str = 'is2 Thi1s T4est 3a'

    let newStr = sortString(str)
    let emptyStr = sortString('')

    expect(newStr).toBe('Thi1s is2 3a T4est')
    expect(emptyStr).toBe('')


})
test('List Filtering ', () => {
    let a = [1, 2, 'a', 'b'];
    let x = [1, 2, 'aasf', '1', '123', 123]
    let b = filter_list(a)
    let fd = filter_list(x)
    expect(b.length).toBe(2)
    expect(b[1]).toBe(2)

    expect(fd.length).toBe(3)
    expect(fd[2]).toBe(123)

})
test('get sum beetwen', () => {
    let firstnumber = getSum(-1, 2);
    let secondNumber = getSum(1, 6);
    let thirdNumber = getSum(0, -1);
    expect(firstnumber).toBe(2);
    expect(secondNumber).toBe(21);
    expect(thirdNumber).toBe(-1)


})
test('iq test', () => {
    let firstTest = iqTest("2 4 7 8 10")
    let secondTest = iqTest('1 2 2')
    let thirdtwst = iqTest('1 3 5 3 5 6 7 9')
    expect(firstTest).toBe(3)
    expect(secondTest).toBe(1)
    expect(thirdtwst).toBe(6)
})
test('same amount of X and O', () => {
    let firstTest = XO('xxxm')
    let secTest = XO('xxOo')
    let thirdTest = XO('vfdsdgtre')


    expect(firstTest).toBe(false)
    expect(secTest).toBe(true)
    expect(thirdTest).toBe(true)
})
test('validate pin code', () => {
    expect(validatePinCode('123' +
        '')).toBe(false)
    expect(validatePinCode('-12345')).toBe(false)
    expect(validatePinCode('12.0')).toBe(false)
    expect(validatePinCode('090909')).toBe(true)
    expect(validatePinCode('123v')).toBe(false)

})
test('is leap year', () => {
    expect(isLeapYear(1600)).toBe(true)
    expect(isLeapYear(1234)).toBe(false)
    expect(isLeapYear(2000)).toBe(true)
    expect(isLeapYear(2013)).toBe(false)
    expect(isLeapYear(1600)).toBe(true)
    expect(isLeapYear(1900)).toBe(false)
    expect(isLeapYear(1000)).toBe(false)
    expect(isLeapYear(1984)).toBe(true)

})
test('over road find the number of a house', () => {
    expect(overTheRoad(2, 3)).toBe(5)
    expect(overTheRoad(7, 11)).toBe(16)
    expect(overTheRoad(23633656673, 310027696726)).toBe(596421736780)
})
test('a dish has to fit an animal', () => {

    const first = feast("great blue heron", "garlic naan");
    const sec = feast("chickadee", "chocolate cake");
    const third = feast("brown bear", "bear claw")

    expect(first).toBe(true)
    expect(sec).toBe(true)
    expect(third).toBe(false)
    expect(feast('das fdsfd', 'dsdasad')).toBe(true)

})
test('vaporcode have to be returned', () => {

    expect(vaporcode("Let's go to the movies")).toBe("L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S")
    expect(() => vaporcode("Error")).toThrowError() // при поиске ошибки нужно оборачивать функцию колбэком(стрелочная ф)
    expect(vaporcode("Why isn't my code working?")).toBe("W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?")
})
test('find integer', () => {
    expect(prevMultOfThree(1)).toBe(null)
    expect(prevMultOfThree(25)).toBe(null)
    expect(prevMultOfThree(36)).toBe(36)
    expect(prevMultOfThree(36)).toBe(36)
    expect(prevMultOfThree(952406)).toBe(9)
    expect(prevMultOfThree(1244)).toBe(12)

})
test("loop array", () => {
    let ne = loopArr([1, 5, 87, 45, 8, 8], 'left', 2)
    expect(loopArr([1, 5, 87, 45, 8, 8], 'left', 2)).toStrictEqual([87, 45, 8, 8, 1, 5])
    expect(loopArr([1, 5, 87, 45, 8, 8], 'right', 2)).toStrictEqual([8, 8, 1, 5, 87, 45])
})
test("descent order", () => {
    expect(descendingOrder(15)).toBe(51)
    expect(descendingOrder(1)).toBe(1)
    expect(descendingOrder(0)).toBe(0)
    expect(descendingOrder(123456789)).toBe(987654321)
    expect(descendingOrder(1021)).toBe(2110)
})
test("duplateCount", () => {

    expect(duplicateCount("abcde")).toBe(0);
    expect(duplicateCount("aabbcde")).toBe(2);
    expect(duplicateCount("aabBcde")).toBe(2);
    expect(duplicateCount("Indivisibility")).toBe(1);
    expect(duplicateCount("Indivisibilities")).toBe(2);

})
test("isSquare", () => {
    expect(isSquare(0)).toBe(true)
    expect(isSquare(25)).toBe(true)
    expect(isSquare(3)).toBe(false)
    expect(isSquare(26)).toBe(false)
    expect(isSquare(4)).toBe(true)
})
test("persistence", () => {
    expect(persistence(39)).toBe(3)
    expect(persistence(4)).toBe(0)
    expect(persistence(25)).toBe(2)
    expect(persistence(999)).toBe(4)
})
test("unique", () => {
    const testArr = uniqueInOrder('AAAABBBCCDAABBB')
    const testArrTwo = uniqueInOrder('ABBCcAD')
    const testArrThree = uniqueInOrder([1, 2, 2, 3, 3])

    expect(testArr).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B'])
    expect(testArrTwo).toStrictEqual(['A', 'B', 'C', 'c', 'A', 'D'])
    expect(testArrThree).toStrictEqual([1, 2, 3])

})
test('tickets', () => {
    expect(tickets([25, 25, 50, 50])).toBe('YES')
    expect(tickets([25, 100])).toBe('NO')
    expect(tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100])).toBe('NO')
})
test('isTiangle', () => {
    expect(isTriangle(1, 2, 2)).toBe(true)
    expect(isTriangle(7, 2, 2)).toBe(false)
})
test("twoSmallestNumbers", () => {
    expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13)
    expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6)
    expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toBe(24)
    expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toBe(16)
})
test('longestString', () => {
    expect(longest("aretheyhere", "yestheyarehere")).toBe("aehrsty")

    expect(longest("inmanylanguages", "theresapairoffunctions")).toBe("acefghilmnoprstuy")
    expect(longest("loopingisfunbutdangerous", "lessdangerousthancoding")).toBe("abcdefghilnoprstu")
})
test("rowSumOddNumbers", () => {

    expect(rowSumOddNumbers(1)).toBe(1)
    expect(rowSumOddNumbers(2)).toBe(8)
    expect(rowSumOddNumbers(3)).toBe(27)
    expect(rowSumOddNumbers(42)).toBe(74088)
})
test('divisors', () => {
    expect(divisors(15)).toStrictEqual([3, 5])
    expect(divisors(12)).toStrictEqual([2, 3, 4, 6])
    expect(divisors(13)).toBe("13 is prime")
})
test('lastChair', () => {
    expect(lastChair(10)).toBe(9)
})
test('getNumberPassengers', () => {
    expect(getNumberPassengers([[10,0],[3,5],[5,8]])).toBe(5)
    expect(getNumberPassengers([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toBe(17)
    expect(getNumberPassengers([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toBe(21)
})
test('reverse words', () => {
    expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god')
    expect(reverseWords('a b c d')).toBe('a b c d')
    expect(reverseWords('double  spaced  words')).toBe('elbuod  decaps  sdrow')
})
test('is string a palindrome', () => {
    expect(isPalindrome('aba')).toBe(true)
    expect(isPalindrome("Abba")).toBe(true)
    expect(isPalindrome("hello")).toBe(false)
})
test('difference of an array', () => {
    expect(arrayDiff([], [4,5])).toStrictEqual([])
    expect(arrayDiff([3,4], [3])).toStrictEqual([4])
    expect(arrayDiff([1,8,2], [])).toStrictEqual([1,8,2])
})
test('concatanation', () => {
    expect(solution('45', '1')).toBe('1451')
    expect(solution('13', '200')).toBe('1320013')
    expect(solution('Soon', 'Me')).toBe('MeSoonMe')
})