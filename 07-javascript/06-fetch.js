const url = "https://anapioficeandfire.com/api/books/";
const app = document.querySelector("#books");

const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Remove the loading spinner
    const loading = document.querySelector("#loading");
    if (loading) {
      loading.remove();
    }

    data.forEach((book) => {
      // Create an element for each book that contains title, author, publication year, and number of pages
      const container = document.createElement("div");
      container.style.marginBottom = "2rem";
      container.style.textAlign = "center";

      const title = document.createElement("h2");
      title.textContent = book.name;

      const author = document.createElement("p");
      author.textContent = `by ${book.authors[0]}`;

      const year = document.createElement("p");
      year.textContent = new Date(book.released).getFullYear();

      const pages = document.createElement("p");
      pages.textContent = `${book.numberOfPages} pages`;

      container.appendChild(title);
      container.appendChild(author);
      container.appendChild(year);
      container.appendChild(pages);

      // Append the book element to the DOM
      app.appendChild(container);
    });

    // Update the styles in JavaScript to center all the books in the container given
  } catch (error) {
    console.error("Failed to fetch books:", error);
  }
};

fetchData(url);
