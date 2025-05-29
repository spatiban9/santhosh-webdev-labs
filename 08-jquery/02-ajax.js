const url = "https://anapioficeandfire.com/api/books/";

const $app = $("#books");
const $loading = $("#loading");
$app.css("padding-left", 0);

const addBookToDOM = (item) => {
  console.log(item);

  let $element = $("<div></div>");
  let $title = $("<h2></h2>");
  let $author = $("<p></p>");
  let $published = $("<p></p>");
  let $pages = $("<p></p>");

  $title.text(item.name);
  $author.text(`by ${item.authors[0]}`);
  $published.text(item.released.substr(0, 4));
  $pages.text(`${item.numberOfPages} pages`);

  $element.css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });

  $element.append($title, $author, $published, $pages);
  $app.append($element);
};

const fetchData = (url) => {
  $.ajax({
    url: url,
    method: "GET",
    success: (data) => {
      data.forEach(addBookToDOM);
    },
    error: () => {
      let $error = $("<p></p>").text("An error occurred. Please try again.");
      $app.append($error);
    },
    complete: () => {
      $loading.remove();
    },
  });
};

fetchData(url);
