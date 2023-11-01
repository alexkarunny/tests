import {
    addBook, apple, arrayDiff,
    ArrayObjectObjectObjectArrayObjectType,
    ArrayOfObjects,
    ArrayOfObjectsInsideObjectsType,
    ArrOfObjectinsideObject,
    arrOfPrim,
    ArrOfPrimit,
    arrOfPrimit, billboard, bitsBattle,
    bjInsObjType, calculateAge, camelCaseStyle,
    changeAddress,
    changeBook,
    changeCcmpanyname,
    changeName, checkCoupon, connotation,
    copyObjInsObj,
    createPhoneNumber,
    delBook,
    descendingOrder, distinctDigitYear, divide,
    divisors,
    duplicateCount, evenNumbers, excludingVatPrice,
    feast,
    filter_list, findNextSquare, findOutlier, findUniq, flattenAndSort, friend,
    fullCopyArrayObjectObjectjbject,
    fullCopyArrayOfObjects,
    fullCopyArrayOfObjectsInsideObject,
    fullCopyArrayOfObjectsInsideObjects,
    fullCopyArrayOfPrimitivInsadeObj,
    fullCopyObjectArrayObjectObject,
    fullCopyObjectInsideObjectInsideObject, getNumberPassengers,
    getSum, hello, hoopCount, howManyYears, infected,
    iqTest, isDivideBy, isDivisible, isIsogram,
    isLeapYear, isPalindrome,
    isSquare,
    isTriangle,
    lastChair, lastSurvivor, lastSurvivors,
    longest,
    loopArr, missingNo, neutralise, newMember,
    ObjectInsideObjectArrayObjectObjectType,
    ObjectInsideObjectInsideObjectType, oddOrEven,
    overTheRoad, part,
    persistence,
    prevMultOfThree, removeChar, removeFirstLastCharacters, removeSmallest, reverseWord, reverseWords,
    rowSumOddNumbers, searchArray, SeriesSum, simpleMultiplication,
    simpleObjectCopy,
    SimpleObjectType, solution, solutionNew, solve, sortByLength,
    sortString, stringToArray, strToNumber, sumCubes,
    sumTwoSmallestNumbers,
    tickets, towerBuilder,
    uniqueInOrder, usdcny,
    UserPropsType,
    UserType,
    validatePinCode, validBraces, validParentheses,
    vaporcode, xMasTree,
    XO
} from './10';

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
    expect(getNumberPassengers([[10, 0], [3, 5], [5, 8]])).toBe(5)
    expect(getNumberPassengers([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])).toBe(17)
    expect(getNumberPassengers([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])).toBe(21)
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
    expect(arrayDiff([], [4, 5])).toStrictEqual([])
    expect(arrayDiff([3, 4], [3])).toStrictEqual([4])
    expect(arrayDiff([1, 8, 2], [])).toStrictEqual([1, 8, 2])
})
test('concatanation', () => {
    expect(solution('45', '1')).toBe('1451')
    expect(solution('13', '200')).toBe('1320013')
    expect(solution('Soon', 'Me')).toBe('MeSoonMe')
})
test('reverse words', () => {
    expect(reverseWord("hello world!")).toBe("world! hello")
    expect(reverseWord("yoda doesn't speak like this")).toBe("this like speak doesn't yoda")
    expect(reverseWord("row row row your boat")).toBe("boat your row row row")
})
test('last survivor, vol.1', () => {
    expect(lastSurvivor('abc', [1, 1])).toBe('a')
    expect(lastSurvivor('kbc', [0, 1])).toBe('b')
    expect(lastSurvivor('zbk', [2, 1])).toBe('z')
    expect(lastSurvivor('c', [])).toBe('c')
})
test('last survivors, vol.2', () => {
    expect(lastSurvivors('abaa')).toBe('ac')
    expect(lastSurvivors('zzab')).toBe('c')
})
test('pandemia', () => {
    expect(infected("01000000X000X011X0X")).toBe(73.33333333333333)
    expect(infected("01X000X010X011XX")).toBe(72.72727272727273)
    expect(infected("0000000010")).toBe(100)
    expect(infected("X00X000000X10X0100")).toBe(42.857142857142854)
    expect(infected("XXXXX")).toBe(0)
})
test('member test', () => {
    expect(newMember([[45, 12], [55, 21], [19, -2], [104, 20]])).toStrictEqual(['Open', 'Senior', 'Open', 'Senior'])
    expect(newMember([[3, 12], [55, 1], [91, -2], [54, 23]])).toStrictEqual(['Open', 'Open', 'Open', 'Open'])
    expect(newMember([[59, 12], [55, -1], [12, -2], [12, 12]])).toStrictEqual(['Senior', 'Open', 'Open', 'Open'])
})
test('christmas tree', () => {
    expect(xMasTree(3)).toStrictEqual(['__#__', '_###_', '#####', '__#__', '__#__'])
    expect(xMasTree(7)).toStrictEqual(['______#______', '_____###_____', '____#####____', '___#######___', '__#########__', '_###########_', '#############', '______#______', '______#______'])
    expect(xMasTree(2)).toStrictEqual(['_#_', '###', '_#_', '_#_'])
    expect(xMasTree(4)).toStrictEqual(['___#___', '__###__', '_#####_', '#######', '___#___', '___#___'])
    expect(xMasTree(6)).toStrictEqual(['_____#_____', '____###____', '___#####___', '__#######__', '_#########_', '###########', '_____#_____', '_____#_____'])
})
test('next square', () => {
    expect(findNextSquare(121)).toBe(144)
    expect(findNextSquare(625)).toBe(676)
    expect(findNextSquare(319225)).toBe(320356)
    expect(findNextSquare(15241383936)).toBe(15241630849)
    expect(findNextSquare(155)).toBe(-1)
})
test('check', () => {
    expect(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')).toBe(true)
    expect(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')).toBe(false)
})
test('price of billboard', () => {
    expect(billboard("Jeong-Ho Aristotelis")).toBe(600)
    expect(billboard("Abishai Charalampos")).toBe(570)
    expect(billboard("Idwal Augustin")).toBe(420)
    expect(billboard("Hadufuns John", 20)).toBe(260)

})
test('find friends', () => {
    expect(friend(["Ryan", "Kieran", "Mark"])).toStrictEqual(["Ryan", "Mark"])
    expect(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])).toStrictEqual(["Ryan"])
    expect(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])).toStrictEqual(["Jimm", "Cari", "aret"])
})
test('Sum', () => {
    expect(SeriesSum(0)).toBe('0.00')
    expect(SeriesSum(2)).toBe('1.25')
    expect(SeriesSum(3)).toBe('1.39')
    expect(SeriesSum(4)).toBe('1.49')
})
test('remove small number', () => {
    expect(removeSmallest([5, 3, 2, 1, 4])).toStrictEqual([5, 3, 2, 4])
    expect(removeSmallest([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5])
    expect(removeSmallest([2, 2, 1, 2, 1])).toStrictEqual([2, 2, 2, 1])
})
test('is programm', () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true)
    expect(isIsogram("isogram")).toBe(true)
    expect(isIsogram("aba")).toBe(false)
    expect(isIsogram("isIsogram")).toBe(false)
    expect(isIsogram("moOse")).toBe(false)
    expect(isIsogram("")).toBe(true)
})
test('hello world', () => {
    expect(hello('johN')).toBe('Hello, John!')
    expect(hello('alice')).toBe('Hello, Alice!')
    expect(hello()).toBe('Hello, World!')
    expect(hello('')).toBe('Hello, World!')
})
test('calcAge', () => {
    expect(calculateAge(2012, 2016)).toBe("You are 4 years old.")
    expect(calculateAge(1989, 2016)).toBe("You are 27 years old.")
    expect(calculateAge(2000, 1990)).toBe("You will be born in 10 years.")
    expect(calculateAge(3400, 3400)).toBe("You were born this very year!")
    expect(calculateAge(2011, 2012)).toBe("You are 1 year old.")
    expect(calculateAge(2000, 1999)).toBe("You will be born in 1 year.")
})
test('missing number', () => {
    expect(missingNo([9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16])).toBe(26)
    expect(missingNo([26, 0, 75, 87, 33, 52, 37, 59, 27, 4, 54, 15, 24, 7, 21, 82, 98, 79, 34, 25, 1, 99, 5, 10, 96, 97, 65, 85, 47, 28, 81, 70, 74, 11, 38, 45, 84, 13, 41, 2, 86, 39, 29, 43, 19, 31, 18, 58, 14, 77, 69, 32, 6, 66, 61, 62, 50, 53, 8, 80, 72, 9, 68, 35, 42, 73, 83, 71, 92, 95, 63, 51, 16, 17, 64, 22, 44, 91, 30, 76, 12, 3, 46, 60, 36, 56, 88, 89, 100, 78, 90, 49, 55, 48, 23, 93, 57, 67, 20, 94])).toBe(40)
    expect(missingNo([15, 60, 61, 95, 46, 38, 68, 11, 47, 45, 27, 23, 3, 16, 8, 81, 76, 63, 62, 57, 59, 22, 55, 78, 28, 54, 74, 39, 79, 65, 48, 82, 17, 2, 98, 90, 18, 9, 56, 34, 7, 75, 10, 93, 35, 5, 73, 77, 85, 71, 13, 91, 83, 70, 89, 4, 84, 14, 52, 99, 53, 33, 49, 42, 40, 58, 30, 36, 67, 72, 41, 26, 87, 97, 25, 29, 50, 64, 21, 88, 66, 24, 94, 51, 1, 100, 0, 96, 69, 12, 92, 31, 37, 6, 86, 32, 19, 44, 20, 43])).toBe(80)
})
test('simple multiplication', () => {
    expect(simpleMultiplication(2)).toBe(16)
    expect(simpleMultiplication(1)).toBe(9)
    expect(simpleMultiplication(8)).toBe(64)
    expect(simpleMultiplication(4)).toBe(32)
    expect(simpleMultiplication(5)).toBe(45)
})
test('sum of cubes', () => {
    expect(sumCubes(1)).toBe(1)
    expect(sumCubes(2)).toBe(9)
    expect(sumCubes(3)).toBe(36)
    expect(sumCubes(4)).toBe(100)
    expect(sumCubes(10)).toBe(3025)
    expect(sumCubes(123)).toBe(58155876)
})
test('difference between years', () => {
    expect(howManyYears('1997/10/10', '2015/10/10')).toBe(18)
    expect(howManyYears('1990/10/10', '2015/10/10')).toBe(25)
    expect(howManyYears('2015/10/10', '1990/10/10')).toBe(25)
    expect(howManyYears('1992/10/24', '2015/10/24')).toBe(23)
    expect(howManyYears('2018/10/10', '2000/10/10')).toBe(18)
})
test('solve ', () => {
    expect(solve([2, 7, 5, 9, 100, 34, 32, 0], 3)).toStrictEqual([4, 8, 7, 9, 101, 35, 34, 0])
    expect(solve([], 2)).toStrictEqual([])
    expect(solve([1000, 999, 998, 997], 5)).toStrictEqual([1000, 1003, 1001, 999])
    expect(solve([0, 0, 0, 0], 5)).toStrictEqual([0, 0, 0, 0])
    expect(solve([4, 3, 2, 1], 5)).toStrictEqual([8, 6, 4, 2])
    expect(solve([33, 23, 45, 78, 65], 10)).toStrictEqual([36, 26, 50, 86, 70])
})
test('connotatiosm', () => {
    expect(connotation("A big brown fox caught a bad bunny")).toBe(true)
    expect(connotation("Xylophones can obtain Xenon.")).toBe(false)
    expect(connotation("CHOCOLATE MAKES A GREAT SNACK")).toBe(true)
    expect(connotation("All FOoD tAsTEs NIcE for someONe")).toBe(true)
    expect(connotation("Is  this the  best  Kata?")).toBe(true)
})
test('watermeloon', () => {
    expect(divide(4)).toBe(true)
    expect(divide(2)).toBe(false)
    expect(divide(5)).toBe(false)
    expect(divide(100)).toBe(true)
    expect(divide(99)).toBe(false)
})
test('find the integers', () => {
    expect(findOutlier([0, 1, 2])).toBe(1)
    expect(findOutlier([1, 2, 3])).toBe(2)
    expect(findOutlier([2, 6, 8, 10, 3])).toBe(3)
    expect(findOutlier([0, 0, 3, 0, 0])).toBe(3)
    expect(findOutlier([1, 1, 0, 1, 1])).toBe(0)
})
test('arr', () => {
    expect(flattenAndSort([[], [1]])).toStrictEqual([1])
    expect(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).toStrictEqual([1, 2, 3, 4, 5, 6, 100])
})
test('add or even', () => {
    expect(oddOrEven([0])).toBe('even')
    expect(oddOrEven([])).toBe('even')
    expect(oddOrEven([-1023, 1, -2])).toBe('even')
    expect(oddOrEven([1023, 1, 3])).toBe('odd')
    expect(oddOrEven([0, 1, -4])).toBe('odd')
})
test('odd against even', () => {
    expect(bitsBattle([])).toBe('tie')
    expect(bitsBattle([3, 8, 22, 15, 78])).toBe('evens win')
    expect(bitsBattle([5, 3, 14])).toBe('odds win')
    expect(bitsBattle([1, 13, 16])).toBe('tie')
})
test('string To Array', () => {
    expect(stringToArray("Robin Singh")).toEqual(["Robin", "Singh"])
    expect(stringToArray("I love arrays they are my favorite")).toStrictEqual(["I", "love", "arrays", "they", "are", "my", "favorite"])
})
test('usd to cny', () => {
    expect(usdcny(15)).toBe('101.25 Chinese Yuan')
    expect(usdcny(465)).toBe('3138.75 Chinese Yuan')
})
test('last even numbers', () => {
    expect(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)).toEqual([-8, 26])
    expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([4, 6, 8])
    expect(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)).toEqual([6])
})
test('should remove first and last letter', () => {
    expect(removeChar('eloquent')).toBe('loquen')
    expect(removeChar('country')).toBe('ountr')
    expect(removeChar('ooopsss')).toBe('oopss')
})
test('should remove first and last letter with spaces', () => {
    expect(removeFirstLastCharacters('1,2,3')).toBe('2')
    expect(removeFirstLastCharacters('1,2')).toBeNull()
    expect(removeFirstLastCharacters('1,2,3,4,5')).toBe('2 3 4')
})
test('at least one term from given array should equal one term from array of samples', () => {
    expect(part(['Grouse', 'Partridge', 'Pheasant'])).toBe('Mine\'s a Pint!')
    expect(part(['Pheasant', 'Goose', 'Starling', 'Robin'])).toBe('Lynn, I\'ve pierced my foot on a spike!!')
    expect(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster'])).toBe('Mine\'s a Pint!!!!!!!!')
})
test('number squared should be more than 1000', () => {
    expect(apple('50')).toBe('It\'s hotter than the sun!!')
    expect(apple(4)).toBe('Help yourself to a honeycomb Yorkie for the glovebox.')
})
test('number should divided by other number', () => {
    expect(isDivideBy(-12, 2, -6)).toBeTruthy()
    expect(isDivideBy(-12, 2, -5)).toBeFalsy()
    expect(isDivideBy(45, 1, 6)).toBeFalsy()
    expect(isDivideBy(45, 5, 15)).toBeTruthy()
    expect(isDivideBy(4, 1, 4)).toBeTruthy()
    expect(isDivideBy(15, -5, 3)).toBeTruthy()

})
test('string to a number', () => {
    expect(strToNumber('1234')).toBe(1234)
    expect(strToNumber('605')).toBe(605)
    expect(strToNumber('1405')).toBe(1405)
    expect(strToNumber('-7')).toBe(-7)
})
test('get price excluding 15% vat', () => {
    expect(excludingVatPrice(230)).toBe(200)
    expect(excludingVatPrice(123)).toBe(106.96)
})
test('next number with distinct digits', () => {
    expect(distinctDigitYear(1987)).toBe(2013)
    expect(distinctDigitYear(2013)).toBe(2014)
})
test('check if parentheses is valid', () => {
    expect(validParentheses("((()))")).toBe(true)
    expect(validParentheses("()()()")).toBe(true)
    expect(validParentheses("(()())()")).toBeTruthy()
    expect(validParentheses("()(())((()))(())()")).toBe(true)
    expect(validParentheses("")).toBe(true)

    expect(validParentheses("()()(")).toBe(false)
    expect(validParentheses(")(")).toBeFalsy()
    expect(validParentheses("((())")).toBe(false)
    expect(validParentheses("())(()")).toBe(false)

})
test('check if braces are valid', () => {
    expect(validBraces("()))")).toBeFalsy()
    expect(validBraces("()")).toBeTruthy()
    expect(validBraces("{}")).toBeTruthy()
    expect(validBraces("[]")).toBeTruthy()
    expect(validBraces("[]]][[()][{}{]]])[[[][]([()")).toBeFalsy()
})
test('interact of strings', () => {
    expect(neutralise("+++--+---", "++----++-")).toBe("++0--000-")
    expect(neutralise("-----", "-----")).toBe("-----")
    expect(neutralise("+-----+++-", "--+-+-++--")).toBe("0-0-0-++0-")
    expect(neutralise("-+--+-+---", "-+--+-+-+-")).toBe("-+--+-+-0-")
})
test('build the tower', () => {
    expect(towerBuilder(1)).toStrictEqual(["*"])
    expect(towerBuilder(2)).toStrictEqual([" * ","***"])
    expect(towerBuilder(3)).toStrictEqual(["  *  "," *** ","*****"])
})
test('find unique number in an array', () => {
    expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).toBe(2)
    expect(findUniq([ 3, 10, 3, 3, 3 ])).toBe(10)
    expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).toBe(2)
    expect(findUniq([ 0, 0, 1 ])).toBe(1)
})
test('break up camel case', () => {
    expect(solutionNew('camelCasing')).toBe('camel Casing')
    expect(solutionNew('camelCasingTest')).toBe('camel Casing Test')
})
test('rewrite string in CamelCaseStyle', () => {
    expect(camelCaseStyle("test case")).toBe("TestCase")
    expect(camelCaseStyle("camel Case method")).toBe("CamelCaseMethod")
    expect(camelCaseStyle("camel case word")).toBe( "CamelCaseWord")
    expect(camelCaseStyle("")).toBe( "")
})
test('check if n divided by x and y', () => {
    expect(isDivisible(3,3,4)).toBeFalsy()
    expect(isDivisible(12,3,4)).toBeTruthy()
    expect(isDivisible(8,3,4)).toBeFalsy()
    expect(isDivisible(48,3,4)).toBeTruthy()

})

test('sort array by strings length', () => {
    expect(sortByLength(["Beg", "Life", "I", "To"])).toStrictEqual(["I", "To", "Beg", "Life"])
    expect(sortByLength(["", "Moderately", "Brains", "Pizza"])).toStrictEqual(["", "Pizza", "Brains", "Moderately"])
    expect(sortByLength(["Longer", "Longest", "Short"])).toStrictEqual(["Short", "Longer", "Longest"])
})
test('find indexOfArray in Array', () => {
expect(searchArray([[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]], [9,20])).toBe(2)
})
test('check the amount of the loops', () => {
expect(hoopCount(3)).toBe("Keep at it until you get it")
expect(hoopCount(11)).toBe("Great, now move on to tricks")
})