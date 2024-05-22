

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')



const quotes = [
    { quote: "All we have to decide is what to do with the time that is given us.", person: "Gandalf" },
    { quote: "Even the smallest person can change the course of the future.", person: "Galadriel" },
    { quote: "Not all those who wander are lost.", person: "Bilbo Baggins" },
    { quote: "I wish the ring had never come to me. I wish none of this had happened.", person: "Frodo Baggins" },
    { quote: "There is some good in this world, and it's worth fighting for.", person: "Samwise Gamgee" },
    { quote: "One does not simply walk into Mordor.", person: "Boromir" },
    { quote: "My precious.", person: "Gollum" },
    { quote: "The road goes ever on and on.", person: "Bilbo Baggins" },
    { quote: "The time of the Elves is over. Do we leave Middle-earth to its fate? Do we let them stand alone?", person: "Elrond" },
    { quote: "You shall not pass!", person: "Gandalf" }
  ];
  


  btn.addEventListener('click', function(){
    
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person

  })