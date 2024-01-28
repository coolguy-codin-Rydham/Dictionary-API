let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// url+="estimate";

const result = document.getElementById("result");

const sound = document.getElementById("sound");

const btn = document.getElementById("search-btn");

const inWord = document.getElementById("inp-word");



const fetchData = () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `<div class="word">
          <h3>${inpWord}</h3>
          <button onclick="playSound()">
              <i class="fa-solid fa-volume-high"></i>
          </button>
          </div>
          <div class="details">
              <p>${data[0].meanings[0].partOfSpeech}</p>
              <p>${data[0]["phonetics"][0]["text"]}</p>
          </div>
  
          <p class="word-meaning">
             ${data[0].meanings[0].definitions[0].definition}
          </p>
          <p class="word-example">
              ${data[0].meanings[0].definitions[0].example || ""}
          </p>`;
          sound.setAttribute("src",`${data[0].phonetics[0].audio}`)
          console.log(sound)
    })
    .catch (()=>{
      result.innerHTML=`<h3 class="error">Could'nt find the word</h3>`
    })
};

btn.addEventListener("click", fetchData);

inWord.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    fetchData();
  }
});

const playSound = () =>{
    sound.play();
}

// const getMeaning=()=>{
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>console.log(data.meanings.definitions.definition))
// }

// getMeaning()
