const treeHeight = document.querySelector('#tree-height');
const chracterType = document.querySelector('#character-type');
const growBtn = document.querySelector('#grow-button')

const tree = () => { 
    treeSpecs.height = treeHeight.value
    treeSpecs.character = chracterType.value
    // console.log(treeSpecs.height)
    // console.log(treeSpecs.character)
    let space = ' '
    let string = `${space.repeat(treeSpecs.height - 1)}${treeSpecs.character}`
    console.log(string)
    
    for (let i = 1; i < treeSpecs.height; i++) {
        string = string.slice(1)
        string += `${treeSpecs.character.repeat(2)}`
        console.log(string)
    }
    
}

const treeSpecs = {
    height: 0,
    character: ''
}

growBtn.addEventListener('click', () => {
    tree();
})