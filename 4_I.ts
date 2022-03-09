// Interface Segregation

// Сущности не должны зависеть от интерфейсов, которые не используют.
// Принцип прост - интерфейсы принято декомпозировать.

// Problem ===>

// interface AutoSet {
//     getTeslaSet() : any;
//     getAudiSet() : any;
//     getBmwSet() : any;
// }

// class Tesla implements AutoSet {
//     getTeslaSet() : any { };
//     getAudiSet() : any { };
//     getBmwSet() : any { };
// }

// class Audi implements AutoSet {
//     getTeslaSet() : any { };
//     getAudiSet() : any { };
//     getBmwSet() : any { };
// }

// class Bmw implements AutoSet {
//     getTeslaSet() : any { };
//     getAudiSet() : any { };
//     getBmwSet() : any { };
// }

// Independent ===>

interface TeslaSet {
    getTeslaSet(): any;
}

interface AudiSet {
    getTeslaSet(): any;
}

interface BmwSet {
    getTeslaSet(): any;
}

class Tesla implements TeslaSet {
    getTeslaSet(): any { };
}

class Audi implements TeslaSet {
    getTeslaSet(): any { };
}

class Bmw implements TeslaSet {
    getTeslaSet(): any { };
}