const getBookElement = function (book) {

    const bookElem = document.createElement("article");
    bookElem.className = "books";
    bookElem.innerHTML =
      `
      <h2>${book.volumeInfo.title}</h2>
      <h3>${book.volumeInfo.subtitle}</h3>
      <figure>
        <img class="imag" src="${book.volumeInfo.imageLinks.thumbnail}" width="352px" height="182px">
        <figcaption><b>Authors:</b> ${book.volumeInfo.authors}</figcaption>
      </figure>
      <div class="blog-text">
            <p><b>Summary:</b><br> ${book.volumeInfo.description.slice(0,300)}</p>
            <p><b>Page count:</b> ${book.volumeInfo.pageCount}</p>
            <p><b>Published on:</b> ${book.volumeInfo.publishedDate}</p>
      </div>

      `;
      return bookElem;
  };

  // document.getElementById("sbmt").addEventListener("click", displayDate);

  function getInputValue() {
    return document.querySelector("#searchbar").value;
  }

async function init() {
    try {
        // const search = "java";
        const resultsElem = document.getElementById("mainblock");
        var child = resultsElem.lastElementChild; 
        while (child) {
          resultsElem.removeChild(child);
            child = resultsElem.lastElementChild;
        }
        let search = getInputValue();
      const usersResp = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
      const users = await usersResp.json();
      console.log(users);
      users.items.forEach(book => {
        resultsElem.appendChild(
          getBookElement (book)
        )
      });
    } catch (err) {
      console.log("Error", err);
    } finally {
      console.log("Demo finished");
    }
  }
  
  // init();