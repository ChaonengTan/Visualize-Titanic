import data from './titanic-data.js'

const squaresSize = 15
const columns = '34'
const border = 5

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = `repeat(${columns}, ${squaresSize+border*2}px)`
titanic.style.gridGap = '1px'

// Map over the data and make a new element for each passenger
var passengers = data.map(p => {
  return document.createElement('div')
})

// clears titanic div
const clear = () => {
  titanic.innerHTML = ''
}
// Loop over each passenger and append them to the titanic
const append = () => {
  passengers.forEach(p => {
    titanic.appendChild(p)
  })
}
append()

// sort
document.body.addEventListener('click', e => {
  if(e.target.className === 'survivedSort') {
    clear()
    survivedSort()
    style()
    append()
  }
  if(e.target.className === 'ageSort') {
    clear()
    ageSort()
    style()
    append()
  }
  if(e.target.className === 'genderSort') {
    clear()
    genderSort()
    style()
    append()
  }
})
const survivedSort = () => {
  passengers = data.sort(a => a.fields.survived === 'Yes' ? 1 : -1).map(p => document.createElement('div'))
}
const ageSort = () => {
  passengers = data.sort((a, b) => a.fields.age - b.fields.age).map(p => document.createElement('div'))
}
const genderSort = () => {
  passengers = data.sort(a => a.fields.sex === 'male' ? 1 : -1).map(p => document.createElement('div'))
}

// styles
const style = () => {
  // bg color, opacity, border radius, border color
  passengers.forEach((p, i) => {
    const d = data[i]
    // BGColor according to embarked
    p.style.backgroundColor = d.fields.embarked === 'S' ? 'red' : data[i].fields.embarked === 'C' ? 'green' : 'blue'
    // Opacity according to survived
    p.style.opacity = d.fields.survived === 'No' ? '.5' : '1'
    // BorderRadius according to survived
    p.style.borderRadius = d.fields.sex === 'male' ? '0' : '50%'
    // BorderColor according to pclass
    p.style.border = d.fields.pclass && `${border}px solid ${data[i].fields.pclass === 1 ? 'yellow' : data[i].fields.pclass === 2 ? 'gray' : 'brown'}`
    p.style.width = `${squaresSize}px`
    p.style.height = `${squaresSize}px`
  })
  // size according to age
  passengers.forEach((p, i) => {
    const d = data[i]
    var height = squaresSize
    var width = squaresSize
    if (d.fields.age) {
      switch (Math.floor(d.fields.age/20)) {
        case(0) :
          height = height/2
          width = width/2
        case(1) :
          height = height/2
        case(2) :
          width = width/2
      }
    }
    p.style.width = `${width}px`
    p.style.height = `${height}px`
    p.style.margin = 'auto'
  })
  // first letter of name
  passengers.forEach((p, i) => {
    const d = data[i]
    if (d.fields.name) {
      const text = document.createElement('div')
      p.appendChild(text)
      const name = document.createTextNode(`${d.fields.name[0]}`)
      text.appendChild(name)
      const style = text.style
      style.display = 'flex'
      style.justifyContent = 'center'
    }
  })
}
style()
// Challenges - 

// Make the squares a little bigger 15px by 15px. 
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger. 

// Change the number of columns on the titanic to 34

// Display each passenger as a circle if they are female. 
// Do this by setting the borderRadius of each passenger. 
// Match the passenger in passengers to the object data 
// in the data array by the index. 

// Display each passengers who did not survive as 
// opacity 0.5. 

// Set the backgroundColor of each passenger by their 
// embarked value. There are three possible values: 
// 'S', 'C', and 'Q'
