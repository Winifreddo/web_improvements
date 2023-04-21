
/* toggle the navigation menu when the burger bar is clicked */
$(document).ready(function () {
$('.burger').click(function() {
  $('nav').toggle();
//   $('nav').css({'display': 'flex',
// 'flex-direction': 'column'});

});

// form vlaidation rules (regex)
const nameRegex = /([a-zA-Z\-]|[à-ü]|[À-Ü])([^0-9]){1,23}/;
const emailRegEx = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})(\.[\w]{2,})?$/;

// error messages
const errorArray = [
  "There was an error in the name field, please only enter letters.",
  "Oops, there was an issue with the email you provided, please try again.",
];

// event listener to trigger form validation

  const btn = $("#submit");
  btn.on("click", function (e) {
    e.preventDefault();
    // select class to display error message to user when form doesn't pass validation
    const errorMessage = $(".error-message");
    // dom selection for user returned as node list
    const input = $(".input");

    // regex testing
    const nameTest = nameRegex.test(input.eq(0).val());
    // console.log(nameTest);
    const emailTest = emailRegEx.test(input.eq(1).val());
    if (!nameTest) {
      errorMessage.html(errorArray[0]);
      errorMessage.css("color", "red");
      input.eq(0).css("border", "1px solid red");
    } else if (!emailTest) {
      errorMessage.html(errorArray[1]);
      errorMessage.css("color", "red");
      input.eq(1).css("border", "1px solid red");
    }
  });

  //   show more info
  //slide toggle used so other elements will make space for expanded text
  //if condition changes text displayed to user
  $(".show-text").on("click", function (e) {
    e.preventDefault();
    $(".read-more").toggle();
    if ($(".show-text").text() == "Read More>>") {
      $(".bottom").css("height", "88vh");
      $(this).text("Read Less<<");
    } else {
      $(".bottom").css("height", "50vh");
      $(this).text("Read More>>");
    }
  });
  $(".show-text2").on("click", function (e) {
    e.preventDefault();
    $(".read-more2").toggle();
    if ($(".show-text2").text() == "Read More>>") {
      $(".bottom2").css("height", "88vh");
      $(this).text("Read Less<<");
    } else {
      $(".bottom2").css("height", "50vh");
      $(this).text("Read More>>");
    }
  });
});

