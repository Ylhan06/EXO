// class pokemon

class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    islucky() {
        return Math.floor(Math.random() * 100) <= this.luck
        
    }

attackPokemon(pokemon) {
    if (this.isLucky()) {
        let damages = this.attack - pokemon.defense
        pokemon.hp -= damages
        console.log(`${this.name} a attaquer ${pokemon.name}, perdant ${damages} hp !` );
    } else {
        console.log(`${this.name} a raté son attaque !!`);
    }
}


}


// Pokemon 
let absol = new Pokemon('absol', 25, 15, 30, 65)
let lucario = new Pokemon('lucario', 20, 20, 30, 75)

let percent = 85 
let isLucky = Math.floor(Math.random() * 100) <= percent

absol.attackPokemon(lucario)




