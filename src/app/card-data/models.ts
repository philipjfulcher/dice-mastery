export class Expansion {
    Id: string
    MacroName: string
    DisplayName: string
    Active: boolean
}

export class Energy {
    Id: string
    Name: string
}

export class Rarity {
    Id: string
    Name: string
}

export class Card {  
    Expansion: Expansion
    Energies: Energy[]
    Rarities: Rarity
    Id: string
    Name: string
    SubTitle: string
    Text: string
    Keywords: string
    Global: string
    Cost: Number
    Equipable: boolean
    Number: Number
    Side: any
    Image: string
    MaxDice: Number
    Die_Id: string
    Expansion_Id: string
    Rarity_Id:string
    DieValue: Number
}