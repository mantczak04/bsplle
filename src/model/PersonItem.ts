export interface Person{
    id: number,
    name: string,
    age: number,
    voivodeship: string,
    bornMonth: string,
    imageUrl?: string
}

export default class PersonItem implements Person{
    constructor(
        private _id: number=0,
        private _name: string='',
        private _age: number=20,
        private _voivodeship:string='SLASKIE',
        private _bornMonth: string='',
        private _imageUrl: string=''
    ) { }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }
    
    set name(name: string) {
        this._name = name;
    }
    
    get age(): number {
        return this._age;
    }
    
    set age(age: number) {
        this._age = age;
    }
    
    get voivodeship(): string {
        return this._voivodeship;
    }
    
    set voivodeship(voivodeship: string) {
        this._voivodeship = voivodeship;
    }
    
    get imageUrl(): string {
        return this._imageUrl;
    }
    
    set imageUrl(imageUrl: string) {
        this._imageUrl = imageUrl;
    }

    get bornMonth(): string {
        return this._bornMonth;
    }
    
    set bornMonth(month: string) {
        this._bornMonth = month;
    }
}