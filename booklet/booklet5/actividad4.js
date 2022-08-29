class Store{
    constructor(name,address,owner,field){
        this.name = name;
        this.address = address;
        this.owner = owner;
        this.field = field;
    }
    isOwner(name){
        return this.owner == name;
    }
}


const store1 = new Store('Target', 'Av', 'Apu','Super Market');
const store2 = new Store('Sams', 'Av', 'Daniel','Super Market');
const store3 = new Store('Walmart', 'Av', 'Diego','Super Market');



for (let index = 0; index < 5; index++) {
    let enter = prompt("Enter owner's name");

    if (store1.isOwner(enter)) {
        alert(enter + "the owner'store" +store1.name );
    }

    if (store2.isOwner(enter)) {
        alert(enter + "the owner'store" +store2.name );
    }

    if (store3.isOwner(enter)) {
        alert(enter + "the owner'store" +store3.name );
    }
    
}