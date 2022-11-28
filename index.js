// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    let newCats = cats.splice(3,0,"Ralph");
    return newCats;

}

function destructivelyPrependCat(name)
{
    let newCats = cats.unshift("Bob");
    return newCats;
}

function destructivelyRemoveLastCat()
{
    let newCats = cats.pop();
    return newCats;
}

function destructivelyRemoveFirstCat()
{
let newCats= cats.shift();
return newCats;
}

function appendCat(name)
{
    let newCats = [...cats, "Broom"];
    return newCats;
}
function prependCat(name)
{
    let newCats = ["Arnold" , ...cats];
    return newCats;
}
function removeLastCat()
{
    let newCats= cats.slice(0, 2);
    return newCats;

}
function removeFirstCat()
{
    let newCats = cats.slice(1,3);
    return newCats;

}