let search = document.querySelector(".search");
let word = document.querySelector(".word");
let meaning = document.querySelector(".meaning");
let example = document.querySelector(".example");
let example_field = document.querySelector(".example_field");
let buffer = document.querySelector("i");
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
async function dict() {
    if (word.value !== "") {
        try {
            buffer.classList.add("effect");
            let res = await axios.get(url + word.value);
            buffer.classList.remove("effect");
            console.log(res.data[0].meanings[0].definitions[0].definition);
            meaning.value = res.data[0].meanings[0].definitions[0].definition;
            example.style.display = "inline";
            example.addEventListener("click", () => {
                example_field.style.display = "inline";
                console.log(res.data[0].meanings[0].definitions[0].example);
                example_field.value = res.data[0].meanings[0].definitions[0].example;
            })
        } catch (e) {
            console.log("Word not found", e);
            meaning.value = "Word not found", e;
        }
    }


}

search.addEventListener("click", () => {
    dict();
})

word.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        dict();
    }
});

