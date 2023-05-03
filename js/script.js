// Get DOM elements
const author = document.getElementById("author");
const job = document.getElementById("job");
const description = document.getElementById("description");
const image = document.getElementById("image");
const nextBtn = document.getElementById("btnA");
const prevBtn = document.getElementById("btnB");
const randomBtn = document.getElementById("btnC");

// Set initial index
let index = 0;

// Define reviews array
const reviews = [
  {
    id: 1,
    name: "Glaucos Cavalcante",
    job: "Web Developer",
    image: "https://avatars.githubusercontent.com/u/101951153?v=4",
    text: " I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Web Design",
    image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "The Boss",
    image: "https://media.istockphothttps://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.",
  },
];

// Set event listeners for buttons
nextBtn.addEventListener("click", function () {
  // Increment index and loop back to 0 if necessary
  index = (index + 1) % reviews.length;
  
  // Update DOM elements
  author.innerText = reviews[index].name;
  job.innerText = reviews[index].job;
  description.innerText = reviews[index].text;
  image.setAttribute("src", reviews[index].image);
});

prevBtn.addEventListener("click", function () {
  // Decrement index and loop back to the end if necessary
  index = (index - 1 + reviews.length) % reviews.length;
  
  // Update DOM elements
  author.innerText = reviews[index].name;
  job.innerText = reviews[index].job;
  description.innerText = reviews[index].text;
  image.setAttribute("src", reviews[index].image);
});

randomBtn.addEventListener("click", function () {
  // Generate random index
  index = Math.floor(Math.random() * reviews.length);
  
  // Update DOM elements
  author.innerText = reviews[index].name;
  job.innerText = reviews[index].job;
  description.innerText = reviews[index].text;
});
