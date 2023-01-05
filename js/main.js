//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const character = Math.floor(Math.random() * 827)
  const url = `https://rickandmortyapi.com/api/character/${character}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.name)
        console.log(data.image)
        document.querySelector('#name').innerText = `Name: ${data.name}`
        document.querySelector('img').src = data.image
        document.querySelector('#episode').innerText = `First appearance: Episode #${(data.episode[0]).replace(/\D/g,'')}`
        document.querySelector('#location').innerText = `Location: ${data.location.name}`
        document.querySelector('#origin').innerText = `Origin: ${data.origin.name}`
        document.querySelector('#species').innerText = `Species: ${data.species}`
        document.querySelector('#status').innerText = `Status: ${data.status}`
        if (data.type) {
          document.querySelector('#type').innerText = `Type: ${data.type}`
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


/*

myString = myString.replace(/\D/g,'');

episode: ['https://rickandmortyapi.com/api/episode/46']
gender: "Male"
id: 752
image: "https://rickandmortyapi.com/api/character/avatar/752.jpeg"
location: {name: 'Space Tahoe', url: 'https://rickandmortyapi.com/api/location/118'}
name: "Changeformer"
origin: {name: 'Space Tahoe', url: 'https://rickandmortyapi.com/api/location/118'}
species: "Robot"
status: "Dead"
type: "Changeformer"


*/