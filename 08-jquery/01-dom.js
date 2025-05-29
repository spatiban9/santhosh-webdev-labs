// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$(document).ready(function () {
  // Option #1
  // Fetch JavaScript objects representing specific elements in the DOM
  let $userInput1 = $("#userInput1");
  let $copy = $("#copy");
  let $output1 = $("#output1");

  // Add an event listener on the target element
  $copy.on("click", handleClick);

  // Callback function to handle event
  function handleClick(event) {
    console.log("click event", event);
    $output1.text($userInput1.val());
  }

  // Option #2
  // $('#copy').on('click', () => {
  //   let $userInput = $('#userInput1');
  //   let $output = $('#output');
  //   $output.text($userInput.val());
  // });

  // Option #3
  // $('#copy').on('click', () => {
  //   $('#output').text($('#userInput1').val());
  // });

  // Exercise #2:
  // When the user enters input text, copy the user input to the output area

  // Fetch JavaScript objects representing specific elements in the DOM
  let $userInput2 = $("#userInput2");
  let $output2 = $("#output2");

  // Add an event listener on the target element
  $userInput2.on("input", handleInput);

  // Callback function to handle event
  function handleInput(event) {
    console.log("click event", event);
    $output2.text($userInput2.val());
  }
});
