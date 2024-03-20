let a:string;
let b :number;
let c :boolean;
let d: undefined;
let e:symbol;
let f:null;
let g:any;

let nambo = <string> "vfmdvfdh";

//union variable
let surname :string | number;


//type ellices

type UserNAme = string | number;
let h : UserNAme = "bhcbhbh";


//
type values = (n:string, m:string)=> string;

const func:values = (n,m) =>{
    console.log(m,n)
    return m + n
};


//  arr:number[]  arr:Array<number>
//method1

const arr:number[] = [12,2,3,4,5,6];
let arr2: string[] = ["sfsd",'edfrd',"dsfsdef"];


//method2
const arr3: Array<string> = ["wrew","ere","etre","retfgr"];
const arr4: Array<number> = new Array(20);

const arr5:Array<String|number> = ["dfd",234,3243,"dgfd"]


//obj

type obj = {
    height:number;
    width:number;
    gender?: boolean;
}

const Obj:obj={
    height:3543,
    width:3543,
    gender:true,
}

const Obj2:obj={
    height:324,
    width:234,
}

// use interface instead of type it will be extendible;

interface obj1 {
    height:number;
    width:number;
    gender?: boolean;
}

type funcType =(n:number, m:number) => void;

interface NewObj extends obj1{
scolar:boolean;
fun:funcType
}

const gigi:NewObj ={
    height:2342,
    width:2343,
    scolar:true,
    fun:(n,m)=>{

    }
}
const kendal :NewObj ={
    height:23,
    width:234,
    scolar:true,
    fun:(n,m) =>{
        console.log(n*m)
    },
}
kendal.fun(22,22)



// function

function lol(n:number):number{
    return 45
}


type funType=(n:number,m:number,l?:number)=>number;

const fun:funType =(m,n,l)=>{
 if(typeof l=== "undefined") return n*m;

 return n*m*l;
};




// type funType=(n:number,m:number,l:number) => number;

// const fun:funType =(m,n,l=23)=>{
//  if(typeof l=== "undefined") return n*m;

//  return n*m*l;
// };
// fun(22,34,35);



// default parameter l=23
const funcs =(m:number,n:number,l:number=23):number=>{
    return n*m*l;
   };
   funcs(22,34,35);
   funcs(22,34);



// Rest operator - many parameter
 type fucType = (...m : number[]) => number;

 const fuc : funcType = (...m:number[])=>{
    // const fuc : funcType = (...m)=>{
    return m;
 }
 fuc(2,3,3,4,3,2,3,3);


 // fun with obj

 type GetDetatype = (product:{
    name:string,stock:number,price:number,photo:string})=>void;

    
 // by using interfeces
  interface Product {
    name:string,
    stock:number,
    price:number,
    photo:string,
    readonly _id : string,
  }

 const getData:GetDetatype= (product)=>{
   console.log(product);
 };

 const productOne:Product = {
    name: "Mackbook",
    stock : 46,
    price:99999,
    photo:"/url",
    _id:"ewyrywy",
 }

 getData(productOne)




 // Never type

 const errHandeler = () : never => {
    throw new Error();
 };


 // 
 type themMode = "light" | "dark";





// classes

class player {
    public readonly id:string;
    constructor( 
        private height:number, 
        public weight:number, 
        protected power:number)
    //     {
    //   this.height = height;
    //   this.weight = weight;
    //   };
    {
        this.id = String(Math.random() * 100);
    }
    getHeight = () =>this.height;

    // gettter function
    get getMyHeight(): number{
        return this.height;
    }
    // setter
    set changeHeight(val:number){
        return this.height;
    }

}

const abhi = new player(100,150,78);


class player2 extends player {
    special: boolean;
constructor(height:number,weight:number,power:number,special:boolean){
   super(height,weight,power);
   this.special = special;
}
}
const abhi2 = new player2(120,32,56,true);



interface Person {
    name:string,
    email:string,
}

const myObj:Person ={
    name:"suvarna",
    email:"suvarna1232@gmail.com"
};

const getName = () =>{
    return myObj.name
}
const getEmail = () =>{
    return myObj.name
}
const getDatas = (key:string):string =>{
    return myObj.name
}





// utilities classes

// Partial type
type User = {
    name:string,
    email:string,
};
type User2 = Partial<User>


// Required <Type> - opposite of partials

type Users = {
name?: string,
email?:string
}

const Users2 : Required<Users> ={
 name:"suvarna",
 email:"suvsad@gmail.com"
}
          

// Readonly <Type>   - make properties readonly

type Userss= {
   readonly name:string,
    email:string
}

const user : Userss = {
    name:"suvarna",
    email:"suvsad@gmail.com"
}

user.name = "asd"  // not change value as readonly

type User2 = Readonly<Userss>     


// Record < Keys, Type >

type user = {
    name:string,
    email:string
};

type usere2 = Record< "name" |"email" |"gender", string>

// eg
interface Userinfo{
    age:number
}
type UserName = "john"  | "andrew" | "elon" |"jack"

const users: Record<UserName, Userinfo> ={
john :{age:34},
andrew :{age:325},
elon:{age:45},
jack:{age:4},
}


// Pick <Type ,keys >
interface OrderInfo {
    id: string,
    user :string,
    city:string,
    state:string,
    status:string,
}
type shippingInfo = Pick<OrderIfo,"city"|"state" | "country" >


// Omit<Type ,Keys>
interface shipingInfos {
    city:string,
    state:string,
    status:string,
}

type Random = Omit<shipingInfos,"country">


// Exclude<Type,ExcludeedUnion>
type MyUnion = string | number | boolean
type random1 = Exclude<MyUnion,boolean>

type random = Exclude<string |number,number>

// NonNullable<Type>
type myunoin= string |number |boolean | null |undefined
type random = NonNullable<MyUnion>

//Parameters<Type>
const myFun =(a:number, b:string)=>{
    console.log(a+b)
};

type random = Parameters<typeof myFun>


//constructorParameter<Type>
class SampleClass{
    constructor(public s:string, public t:string){
    }
}
type random = ConstructorParameters<typeof SampleClass>

//ReturnType<type>
const myFun =(a:number, b:string):string=>{
    return a+b
};
type funType = ReturnType<typeof myFun>

//InstanceType<type>
class SampleClass{
    constructor(public s:string, public t:string){}
}
type Random = InstanceType<typeof SampleClass>

const user:Random = {
    s:"44",
    t:"sdfee"
}





// Generics


const funcss = <T> (n:T):T  =>{
    return n
}
funcss(20)
funcss("20")
funcss(true)


const funcj = <T,U>(n:T, o:U):{n:T, o:U} => {
// const funcj = <T,U>(n:T, o:U) => {
    return {n,o};
};

const ans = funcj<number,string>(20,"lol");



//
type Persons = {
    name: string,
    age:number,
}

const usersj:Persons[]=[
 {
    name:"abhi",
    age:287
 },
 {
    name:"abhis",
    age:287
 },
 {
    name:"abhssi",
    age:287
 }
];

// const filtersBYPeople = (arr:[], property:any, value:any) =>{
//     arr.filter(item => item[property] ===value)
// };


// using generic
const filtersBYPeople = <T,U extends keyof T> (arr:T[], property:U, value:T[U])=>{
 arr.filter((item)=> item[property] === value)
}
const filterPeopleByName = filtersBYPeople(usersj,"Name","abhi")

