var jokes = document.querySelector("#jokes");
var categories = new URL("https://api.chucknorris.io/jokes/random?");
var API = "https://api.chucknorris.io/jokes/random";

function categoriesValue() {
  fetch(categories)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      jokes.innerHTML = responseData.value;
    });
}

// Animal jokes
animal = () => {
  categories.searchParams.append("category", "animal");
  categoriesValue();
};

//Career Jokes
career = () => {
  categories.searchParams.append("category", "career");
  categoriesValue();
};

//celebrity jokes
celebrity = () => {
  categories.searchParams.append("category", "celebrity");
  categoriesValue();
};

//Dev jokes
dev = () => {
  categories.searchParams.append("category", "dev");
  categoriesValue();
};

//Explicit jokes
explicit = () => {
  categories.searchParams.append("category", "explicit");
  categoriesValue();
};

//Fashion jokes
fashion = () => {
  categories.searchParams.append("category", "fashion");
  categoriesValue();
};

//Food jokes
food = () => {
  categories.searchParams.append("category", "food");
  categoriesValue();
};

//History jokes
hist = () => {
  categories.searchParams.append("category", "history");
  categoriesValue();
};

//Money jokes
money = () => {
  categories.searchParams.append("category", "money");
  categoriesValue();
};

//Music jokes
music = () => {
  categories.searchParams.append("category", "music");
  categoriesValue();
};

//Movie jokes
movie = () => {
  categories.searchParams.append("category", "movie");
  categoriesValue();
};

//political joke
political = () => {
  categories.searchParams.append("category", "political");
  categoriesValue();
};

//Religion jokes
religion = () => {
  categories.searchParams.append("category", "religion");
  categoriesValue();
};

//Science jokes
science = () => {
  categories.searchParams.append("category", "science");
  categoriesValue();
};

//Sport jokes
sport = () => {
  categories.searchParams.append("category", "sport");
  categoriesValue();
};

//Travel jokes
travel = () => {
  categories.searchParams.append("category", "travel");
  categoriesValue();
};

//Some random new jokes
newJokes = () => {
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      jokes.innerHTML = responseData.value;
    });
};

//Show the categories which we have choosen
var btnResult = document.querySelector("#btnResult");
$(".btn").click(function () {
  var selectedBtn = $(this).val();
  btnResult.innerHTML = selectedBtn;
});
