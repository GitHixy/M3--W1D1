// EXTRA 1 [DONE]
//Crea con JavaScript la funzionalità per rimuovere il link "twitter"
//sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automaticamente.

// EXTRA 2 [DONE]
//Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando
//sul link "Continua a leggere".

// EXTRA 3 [DONE]
//Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che
//il cursore passa sopra l'autore del post.

//Extra1

document.addEventListener("DOMContentLoaded", function () {
  const twitterLink = document.querySelector(
    ".blog-sidebar .p-4:last-child li:nth-child(2)"
  );
  twitterLink.innerHTML = "";
});

//Extra2

document.addEventListener("DOMContentLoaded", function () {
  function removeParentElement(event) {
    event.preventDefault();
    let parentElement = event.currentTarget.closest(".col-md-6");
    if (parentElement) {
      parentElement.remove();
    }
  }
  let links = document.querySelectorAll(".col-md-6 .stretched-link");
  links.forEach(function (link) {
    link.addEventListener("click", removeParentElement);
  });
});

//Extra3

document.addEventListener("DOMContentLoaded", function () {
  function showAlertOnHover(event) {
    let authorName = event.target.textContent;

    alert(`Author of the Post: ${authorName}`);
  }

  let authorLinks = document.querySelectorAll(".blog-post-meta a");
  authorLinks.forEach(function (link) {
    link.addEventListener("mouseover", showAlertOnHover);
  });
});
