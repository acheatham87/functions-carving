const createWoodBlock = () => {
  let woodObject = {
    type: "wood block",
    length: 10,
    material: "pine",
    purpose: "flute"
  }
  return woodObject
}

const woodBlock = createWoodBlock()
// console.log(woodBlock)

const createBeautifulCarving = (object) => {
    let string = `The ${object.length}-inch, ${object.material} ${object.type} was carved into a wooden ${object.purpose}.`
    return string
}

const carvingString = createBeautifulCarving(woodBlock)

console.log(carvingString)

