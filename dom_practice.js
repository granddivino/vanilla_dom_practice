const myDiv = document.querySelector('#otherlinks')
console.log(myDiv)

const myTitle = document.querySelector('h2')
console.log(myTitle)

myTitle.innerText = 'Welcome to San Diego!!!'

const myList = document.querySelectorAll('li')
console.log(myList)

myList[3].style.color = 'SkyBlue'

myList[4].innerText = 'Jamboree sandwich at the Jambo-reeh'


//I couldn't remember how to use setAttribute and I couldn't find it from if we did it in class so I used the
//src which we did change it to on the Stranger Things example
const oceanFront = document.createElement('img')
// oceanFront.setAttribute('https://admin.hksinc.com/wp-content/uploads/2018/09/SanDiego_01.jpg')
oceanFront.src = 'https://admin.hksinc.com/wp-content/uploads/2018/09/SanDiego_01.jpg'

const todo = document.querySelector('.todo')
todo.appendChild(oceanFront)

//Bonus
