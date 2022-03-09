// Liskov Substitution Principle

// Необходимо, чтобы "подклассы" могли служить заменой для своих "суперклассов". Функции использующие базовый тип - должны иметь возможноть использовать его подтипы.
// Цель - проектировать логику таким образом, чтобы классы наследники могли спокойно использоваться вместо родителей. Для обоих классов лучше всего использовать общий интерфейс, а не наследовать один класс от другого.

class Person {

}

class Member extends Person {
    access() {
        console.log('У тебя есть доступ')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class Visitor extends Guest {
    access() {
        console.log('У тебя нет доступа! Ты Visitor.')
    }
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new Visitor()) // Here sould be member!

// ===============

class Component {
    render() {
        return `<div>Component</div>`
    }
}

class HeaderComponent extends Component {
    onInit() {}
}

class FooterComponent extends Component {
    afterInit() {}
}

class HOC extends Component {
    render() {
        throw new Error('Render is impossible here')
    }

    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
renderComponent(new HOC())