// fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//             console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       })

// Main class of Fruit

class Fruit{
  constructor(name, color, flavor, outerEdible){
    this._name = name
    this.color = color
    this.flavor = flavor
    this.outerEdible = outerEdible
  }
  prepare(){
    if(this.outerEdible){
      return `fresh ${this._name} added`
    }
    else{
      return `removed outer layer of ${this._name}, then added`
    }
  }
  get name(){
    return this._name
  }
  get flavor(){
    return this._flavor
  }
  set flavor(flavor){
    this._flavor = flavor
  }
}

class Berries extends Fruit{
  constructor(name, color, flavor, outerEdible, dried){
    super(name, color, flavor, outerEdible)
    this.dried = dried
  }
  prepare(){
    if(this.dried){
      return `soaked dried ${this.name} in warm water for 15 minutes, drained, then added`
    }
    else{
      return super.prepare()
    }
  }
}

class Pomes extends Fruit{
  constructor(name, color, flavor, outerEdible){
    super(name, color, flavor, outerEdible)
  }
  prepare(){
    return `removed core of ${this.name}, then added`
  }
}

class Drupes extends Fruit{
  constructor(name, color, flavor, outerEdible, needsPittingToEat){
    super(name, color, flavor, outerEdible)
    this.needsPittingToEat = needsPittingToEat
  }
  prepare(){
    return `${this.name} pitted, then added`
  }
}

class Citrus extends Fruit{
  constructor(name, color, flavor, outerEdible, hasJuice){
    super(name,color,flavor, outerEdible)
    this.hasJuice = hasJuice
  }
  prepare(){
    if(this.hasJuice){
      return `added the juice of 1 ${this.name}`
    }
    else{
      return `added the zest of 1 ${this.name}`
    }
  }
}

class Blender{
  constructor(){
    this.blended = false
    this.ingredients = ["milk", "ice"]
    this.flavors = ["creamy"]
  }
  addIngredient(fruit){
    this.ingredients.push(fruit.name)
    this.flavors.push(fruit.flavor)
    return fruit.prepare()
  }
  listIngredients(){
    console.log(this.ingredients)
  }
  removeIngredient(fruit){
    if(this.ingredients.includes(fruit.name)){
      this.ingredients.splice(this.ingredients.findIndex((element, index) => {
        if(element === fruit.name){
          return index
        }
      }), 1)
      this.flavors.splice(this.ingredients.findIndex((element, index) => {
        if(element === fruit.flavor){
          return index
        }
      }), 1)
      console.log(this.ingredients, this.flavors)
    }
  }
  blend(){
    this.blended = true
    return `the ingredients were blended together on 'High' for 1 minute`
  }
  serve(){
    let text = ""
    for(let flavor in this.flavors){
      text += `${this.flavors[flavor]} `
    }
    return `it's got a ${text} taste`
  }
}
let orange = new Citrus("orange", "orange", "tangy", false, true)
let blenderMax3000 = new Blender()
console.log(blenderMax3000.addIngredient(orange))
console.log(blenderMax3000.blend())
console.log(blenderMax3000.serve())
