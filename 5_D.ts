// Dependency Inversion

// Модули высших уровней не должны зависеть от модулей низких уровней.
// Оба должны зависеть от абстракций.
// Абстракции не должны зависеть от деталей.
// Детали должны зависеть от абстракций.
// Верхнеуровние сущности не должны зависеть от нижнеуровневых реализаций. Любые зависимости лучше инкапсулировать в отдельных сущностях.
// Уменьшение межмодульных зависимостей.


// Incorrect; Inversion mistake ===>

// class xmlHttpRequestService { }

// // Low level
// class xmlHttpService extends xmlHttpRequestService {
//     request(url: string, type: string) { }
// }

// // Hight level module
// class Http {
//     constructor(private xmlHttpService: xmlHttpService) { }

//     get(url: string, options: any) {
//         this.xmlHttpService.request(url, 'GET');
//     }

//     post(url: string, options: any) {
//         this.xmlHttpService.request(url, 'POST');
//     }
// }

// Correct ===>

interface Connection {
    request(url: string, options: any): any;
}

class Http {
    constructor(private httpConnection: Connection) { }

    get(url: string, options: any) {
        this.httpConnection.request(url, 'GET');
    }

    post(url: string, options: any) {
        this.httpConnection.request(url, 'POST');
    }
}

class xmlHttpRequestService {
    open() { }
    send() { }
}

class xmlHttpService implements Connection {
    xhr = new xmlHttpRequestService();

    request(url: string, options: any) {
        this.xhr.open();
        this.xhr.send();
    }
}

