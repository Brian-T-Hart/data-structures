const dogs = new Set()
dogs.add('German Shepherd')
dogs.add('Poodle')

console.log(dogs)

const ids = new Set([1,2,3])
ids.add(4)
console.log(ids)
ids.delete(2)
console.log(ids)
console.log(ids.has(2))