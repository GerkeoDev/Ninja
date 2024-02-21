class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre
        this.salud = salud
        this.velocidad = 3
        this.fuerza = 3
    }
    sayName(){
        console.log(`el nombre del ninja es: ${this.nombre}`)
    }
    showStats(){
        console.log(`Nombre: ${this.nombre} Fuerza: ${this.fuerza} Velocidad: ${this.velocidad} Salud: ${this.salud}`)
    }
    drinkSake(){
        this.salud += 10
    }
}
const ninja1 = new Ninja("Kakashi", 10)
console.log(ninja1)
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
console.log(ninja1)
class Sensei extends Ninja {
    constructor(
        nombre,
        salud = 200,
        velocidad = 10,
        fuerza = 10,
        sabiduria = 10
    ){
        super(nombre, salud, velocidad, fuerza)
        this.velocidad = velocidad
        this.fuerza = fuerza
        this.sabiduria = sabiduria
    }

    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
        super.drinkSake()
    }
}

const superSensei = new Sensei ("Master Splinter")
superSensei.speakWisdom()
superSensei.showStats()