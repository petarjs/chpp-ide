export const code = `

функција сортирај(низ) {
    за(нека индекс1 буде 0; индекс1 мање од низ.дужина; индекс1++) {
        за(нека индекс2 буде 0; индекс2 мање од низ.дужина; индекс2++) {
            ако (низ[индекс1] веће од низ[индекс2]) {
                нека привремен буде низ[индекс1]
                низ[индекс1] добија вредност низ[индекс2]
                низ[индекс2] добија вредност привремен
            }
        }
    }

    врати низ
}

сортирај([3, 1, 2, 2, 1, 88])

`;
