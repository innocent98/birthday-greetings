// Introduction to DOM
// Manipulating the DOM

const example = document.getElementById("example");

example.innerHTML = "New text";
example.style.color = 'red'

// Creating and appending elements

const paragraph = document.getElementById('paragraph')

const appendElement = document.createElement('span')
appendElement.innerHTML = 'Shalom'
appendElement.style.fontWeight = '800'
appendElement.style.color = 'hotpink'

// paragraph.append('Shalom')
paragraph.appendChild(appendElement)
