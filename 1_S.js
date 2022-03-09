// Single Responsibility Principle

// У модуля должна быть только одна причина для изменения. Класс должен отвечать за что-то одно.
// Идея - организовать код таким образом, чтобы в случае возникновения изменения, задействовать наименьшее кол-во модулей.

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

// Нельзя мутировать "class News" методами "print methods" которые могут быть делегированы в другой класс.

    // toHTML() {
    //     return `
    //         <div class="news">
    //             <h1>${this.title}</h1>
    //             <p>${this.text}</p>
    //         <div>
    //     `
    // }

    // toJSON() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modified: this.modified
    //     }, null, 2)
    // }
}

class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    toHTML() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }

    toJSON() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    toXML() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>
        `
    }
}

const printer = new NewsPrinter(
    new News('Президент', 'Новый закон')
)

console.log(printer.toHTML())
console.log(printer.toXML())
console.log(printer.toJSON())