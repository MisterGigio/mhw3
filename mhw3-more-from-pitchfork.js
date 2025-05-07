const topContainer = document.querySelector(".more-from-pitchfork-top");
const bottomContainer = document.querySelector(".more-from-pitchfork-bottom");

for (const article of ARTICLES) {
  const card = document.createElement("div");
  card.classList.add(
    article.position === "top" ? "mfp-top-card" : "mfp-bottom-card"
  );

  const img = document.createElement("img");
  img.src = article.img;
  img.alt = "";
  img.width = 302;
  img.height = 150;

  const h3 = document.createElement("h3");
  h3.className = "nav-bar-mfp";
  h3.textContent = article.category;

  const h1 = document.createElement("h1");
  h1.className = "title-mfp";
  h1.textContent = article.title;

  const author = document.createElement("span");
  author.className = "author-mfp";
  author.textContent = article.author;

  const date = document.createElement("span");
  date.className = "date-mfp";
  date.textContent = article.date;

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(h1);
  card.appendChild(author);
  card.appendChild(date);

  if (article.position === "top") {
    topContainer.appendChild(card);
  } else {
    bottomContainer.appendChild(card);
  }
}

function onImageClick(event) {
  const modal = document.querySelector("#modal-view");
  const bigImg = document.createElement("img");
  bigImg.src = event.currentTarget.src;

  modal.innerHTML = "";
  modal.appendChild(bigImg);

  document.body.classList.add("no-scroll");

  modal.classList.remove("hidden");

  modal.style.top = window.pageYOffset + "px";
}

function onModalClick() {
  const modal = document.querySelector("#modal-view");

  modal.classList.add("hidden");

  document.body.classList.remove("no-scroll");

  modal.innerHTML = "";
}

document.querySelector("#modal-view").addEventListener("click", onModalClick);

const allImages = document.querySelectorAll("#more-from-pitchfork img");

for (const img of allImages) {
  img.addEventListener("click", onImageClick);
}
