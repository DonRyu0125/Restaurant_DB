$(".bookmark-btn").on("click", function () {
  console.log("clicked");
  // Create a form dynamically
  var form_string = '<form method="post" action="' + $(".web_sum_form").attr("data-action") + '"></form>';
  var myform = $(form_string);
  var input_field = '<input type="text" name="' + $(this).find("input").attr("name") + '" value="' + $(this).find("input").attr("value") + '">';
  console.log("input==>", input_field);
  myform.append(input_field);
  console.log("form==>", myform);
  console.log("this", this);
  $("body").append(myform);
  // sumbit form
  $(myform).submit();
  /*
      if (count == false) {
          count = true;
          // alert($(".web_sum_form").attr('data-action'))
          $.ajax({
              type: "POST",
              url: $(".web_sum_form").attr("data-action"),
              data: $(this).find("input").attr("name") +
                  "=" +
                  $(this).find("input").attr("value"),
              success: function(textStatus, status) {
                  console.log(textStatus);
                  console.log(status);
              },
              error: function(xhr, textStatus, error) {
                  console.log(xhr.responseText);
                  console.log(xhr.statusText);
                  console.log(textStatus);
                  console.log(error);
              },
          }).done(function() {
              location.reload();
          });
      }
    */
});
$("#web_sum_form").on("submit", function (e) {
  e.preventDefault();
});

$(".Delete-Bookmark").on("click", function () {
  $.ajax({
    url: $("#web_sum_form").attr("action"),
    type: "POST",
    data: $(this).find("input").attr("name") + "=" + $(this).find("input").attr("value"),
  }).then(function (data) {
    location.reload();
  });
});

function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}
