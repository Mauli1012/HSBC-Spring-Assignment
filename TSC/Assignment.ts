//questopn 1
export function add(a){
    var sum =0;
    var t=0;
    while (t != 0) {
        var num = t % 10;
        sum += num;
        t = Math.floor(t / 10);
    }
    return sum;
}

//question 2
export function sqr(x,y){
    return x**y;
}

//question 3
export function minmax(a){
    var max:number = 0;
    var min:number = 1000;
    for(var i of a)
    {
        if(i>max)
            max=i;
        if(min>i)
            min=i;
    }
    return "maximus is " + max + " minimum is " + min ;
}

//question 4
export function sqrarr(a){
var b = new Array();
    for(var i of a)
     {  var x=i*i;
        b.push(x);
     }
    console.log(b);
}

//question 5
export function strJoin(...arg) {
    var str = [];
    var seperator = arg[0];
    for (var i = 1; i < arguments.length; i++) {
        str[i - 1] = arguments[i];
    }
    var s = str.sort();
    console.log(s.join(seperator));
}


//question 6
class Product {
    name: string;
    price: number;
   constructor(name:string, price:number)
    {
        this.name = name;
        this.price = price;
    }
    show(){
        console.log(this.name+" "+this.price);
    }
}
export function printAllProducts(){
    var products:Product[] = [new Product("Pen",10), new Product("Pencil",12), new Product("Eraser",5)]
    products.forEach((p) =>{
        p.show();
    });

}
