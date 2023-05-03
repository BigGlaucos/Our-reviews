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
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas fugit mollitia corrupti, explicabo culpa sint ab. Impedit vero commodialias, minus aspernatur aperiam asperiores molestias delectus repellendus dolores totam veniam a laudantium. Eligendi, repellatatque!",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Web Design",
    image: "https://media.istockphoto.com/id/1317446149/pt/foto/happy-young-african-american-woman-smiling-with-arms-crossed-and-looking-away-against-white.jpg?s=612x612&w=0&k=20&c=qbK5RmjvA7wUc6ln6UdmT1t80Xb30xT2_tG8chsKUNw=",
    text: "abacate2.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    image: "https://media.istockphoto.com/id/1324558913/pt/foto/confident-young-man-in-casual-green-shirt-looking-away-standing-with-crossed-arms-isolated-on.jpg?s=612x612&w=0&k=20&c=b4bD1bovuuKk4L1liDwNqYsFpcJuj6sIq5gWPI1MvJ0=",
    text: "abacate3",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "The Boss",
    image: "https://media.istockphoto.com/id/1364917563/pt/foto/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=U8JPP2jR5ibSuE_t0JrWgm0iQEfuMHHGMGTwEIMzNq0=",
    text: "abacate4",
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
