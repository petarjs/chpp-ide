export const code = `

функција сабериСе(н) {
    нека сума добија вредност 0
    за (нека број буде 1; број мањи од н + 1; број увећај за 1) {
        ако (
            број остатак при дељењу са 3 је једнако 0
            или
            број остатак при дељењу са 5 је једнако 0
        ) {
            сума увећај за број
        }
    }

    врати сума
}

сабериСе(10)

`;
