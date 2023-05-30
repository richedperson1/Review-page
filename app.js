const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const nxtBtn = document.querySelector(".next-arrow");
const prevBtn = document.querySelector(".prev-arrow");
const randomPeople = document.querySelector(".suprice-me");
const reviewImg = document.querySelector(".image-intro-desination img");
const reviewName = document.querySelector(".image-intro-desination .name-emp");
const reviewDesination = document.querySelector(
  ".image-intro-desination .desination"
);
const reviewDescription = document.querySelector("p.description");
let index = 0;
const lengthReview = reviews.length;

const reviewChange = (ind) => {
  const reviewSelect = reviews[ind];
  reviewImg.setAttribute("src", reviewSelect["img"]);
  reviewName.innerHTML = reviewSelect["name"];
  reviewDesination.innerHTML = reviewSelect["job"];
  reviewDescription.innerHTML = reviewSelect["text"];
};

reviewChange(0);

nxtBtn.addEventListener("click", () => {
  index++;
  if (index > lengthReview) {
    index = 0;
  }
  reviewChange(index);
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = 0;
  }
  reviewChange(index);
});

randomPeople.addEventListener("click", () => {
  const ind = Math.floor(Math.random() * lengthReview);
  reviewChange(ind);
});
