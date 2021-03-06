export const code = `

класа Кафа {
    израчунајЦену() {
        врати 150
    }
}

класа Украс {
    компонента добија вредност празно

    конструктор (компонента) {
        ово.компонента = компонента
    }

    израчунајЦену() {
        врати ово.компонента.израчунајЦену()
    }
}

класа МлекоУкрас наслеђује Украс {
    израчунајЦену() {
        врати 30 + родитељ.израчунајЦену()
    }
}

класа ЧоколадаУкрас наслеђује Украс {
    израчунајЦену() {
        врати 50 + родитељ.израчунајЦену()
    }
}

класа ЦиметУкрас наслеђује Украс {
    израчунајЦену() {
        врати 10 + родитељ.израчунајЦену()
    }
}

нека кафа буде нова Кафа()

нека кафаСаМлеком буде нови МлекоУкрас(кафа)

нека кафаСаМлекомИЧоколадом буде нови ЧоколадаУкрас(кафаСаМлеком)

кафаСаМлекомИЧоколадом.израчунајЦену()

`;
