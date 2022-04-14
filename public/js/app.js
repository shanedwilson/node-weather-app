console.log('Client side javascript file is loaded.')

const getWeather = (location, messageOne, messageTwo) => {
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if(data.error) {
        messageOne.textContent = 'ERROR: ' + data.error
      } else {
        messageOne.textContent = 'LOCATION: ' + data.location
        messageTwo.textContent = 'FORECAST: ' + data.forecast
      }
    })
  })
}


const weatherForm = document.querySelector('form')
const searhElement = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = searhElement.value
  getWeather(location, messageOne, messageTwo)
})