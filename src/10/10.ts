
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
export type ArrOfPrimit = {
    name: string
    age: number
    friends: Array<string>
}
export type ArrayOfObjects = Array<{name: string, age: number}>
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
                ingredients: Array<{title: string, amount: number}>
            }
        }>
    }
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
export function fullCopyArrayOfObjectsInsideObject(obj: ArrOfObjectinsideObject):ArrOfObjectinsideObject  {
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
export function fullCopyArrayOfObjectsInsideObjects(obj: ArrayOfObjectsInsideObjectsType): ArrayOfObjectsInsideObjectsType{
    return {
        ...obj,
        mother: {...obj.mother,
                work: {...obj.mother.work},
                parents: obj.mother.parents.map( u => ({...u}) )
        }
    }
}
export function fullCopyObjectArrayObjectObject(obj: ObjectInsideObjectArrayObjectObjectType) {
    return {
        ...obj,
        mother: {...obj.mother,
                    parents: obj.mother.parents.map((u) => ({...u,favoriteDish: {...u.favoriteDish}}))
        }
    }
}
export function fullCopyArrayObjectObjectjbject(obj: ArrayObjectObjectObjectArrayObjectType): ArrayObjectObjectObjectArrayObjectType {
    return {
        ...obj,
        mother: {...obj.mother,
                    work: {...obj.mother.work},
                    parents: obj.mother.parents.map(u => {
                        return {...u,
                            favoriteDish: {...u.favoriteDish,
                                            ingredients: u.favoriteDish.ingredients.map(i => ({...i}))
                            }
                        }
                    })
        }
    }
}