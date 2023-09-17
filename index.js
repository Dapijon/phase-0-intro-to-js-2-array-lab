// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name) {
    cats.pop(2)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(1)
}

const copyCats = [...cats, "Bruno"];
    



console.log(cats);
