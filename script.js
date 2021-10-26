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
const passengers = data.map(p => {
  return document.createElement('div')
})

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

// Let's loop over each passenger and set some styles 
passengers.forEach((p, i) => {
  const d = data[i]
  p.style.width = `${squaresSize}px`
  p.style.height = `${squaresSize}px`
  p.style.backgroundColor = d.fields.embarked === 'S' ? 'red' : data[i].fields.embarked === 'C' ? 'green' : 'blue'
  p.style.opacity = d.fields.survived === 'No' ? '.5' : '1'
  p.style.borderRadius = d.fields.sex === 'male' ? '0' : '50%'
  p.style.border = d.fields.pclass ? `${border}px solid ${data[i].fields.pclass === 1 ? 'yellow' : data[i].fields.pclass === 2 ? 'gray' : 'brown'}` : ''
})

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
