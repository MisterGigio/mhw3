document.addEventListener("DOMContentLoaded", () => {
  function onJson(json) {
    console.log("JSON ricevuto");
    console.log(json);

    const newsView = document.querySelector("#news-viewAPI");
    newsView.innerHTML = "";

    const results = json.articles;
    let num_results = results.length;
    if (num_results > 10) num_results = 10;

    for (let i = 0; i < num_results; i++) {
      const article = results[i];

      const title = article.title;
      const selected_image = article.urlToImage;

      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");

      const img = document.createElement("img");
      img.src = selected_image;
      img.alt = title;
      img.classList.add("news-image");

      const caption = document.createElement("h3");
      caption.textContent = title;
      caption.classList.add("news-title");

      const description = document.createElement("p");
      description.textContent = article.description;
      description.classList.add("news-description");

      const link = document.createElement("a");
      link.href = article.url;
      link.target = "_blank";
      link.textContent = "Leggi di più";
      link.classList.add("news-link");

      newsItem.appendChild(img);
      newsItem.appendChild(caption);
      newsItem.appendChild(description);
      newsItem.appendChild(link);
      newsView.appendChild(newsItem);
    }
  }

  function onResponse(response) {
    console.log("Risposta ricevuta dal server");
    return response.json();
  }

  function search(event) {
    event.preventDefault();

    const searchInput = document.querySelector("#search-query");
    const searchQuery = encodeURIComponent(searchInput.value.trim());

    const url =
      "https://newsapi.org/v2/everything?q=" +
      searchQuery +
      "&apiKey=" +
      apiKey;

    console.log("URL chiamata fetch:", url);

    fetch(url)
      .then(onResponse)
      .then(onJson)
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  }

  const apiKey = "secret";
  const form = document.querySelector("#search-form-newsAPI");
  form.addEventListener("submit", search);
});
