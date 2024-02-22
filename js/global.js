let HOME_SESSID = getCookie("HOME_SESSID");
$(".bookmark-btn").on("click", function () {
  console.log("clicked");
  // Create a form dynamically
  var form_string = '<form method="post" action="' + $(".web_sum_form").attr("data-action") + '"></form>';
  var myform = $(form_string);
  var input_field = '<input type="text" name="' + $(this).find("input").attr("name") + '" value="' + $(this).find("input").attr("value") + '">';
  myform.append(input_field);
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

// CRU for restaurant record
$( "#target" ).on( "click", function() {
  //op="chg": attribute to change the value at the xml
  // NONE VALUE + CREATE + NO OP= Y => MAKE NEW RECORD
  //error ?manipxmlrecord&database=RESTAURANT&key=res_name&VALUE=Don_999&CREATE=Y  => not showing at the SMA

  let url = HOME_SESSID+`?manipxmlrecord&database=RESTAURANT&key=res_speciality&VALUE=Korean&REPLACE=Y`;
  var xmlForm = `<?xml version="1.0" encoding="UTF-8"?><RECORD><res_name>don_guys</res_name><res_speciality>American</res_speciality></RECORD>`;
  $.ajax({
    async: false,
    type: "POST",
    url: url,
    contentType: "text/xml",
    dataType: "xml",
    data: xmlForm,
    processData: false,
    cache: false,
    timeout: 300000,
    success: function (data, textStatus, xhr) {
      console.log('data================>',data)
      if (jQuery.isXMLDoc(data)) {
        //var xml_value = getXmlFieldValue(data, "error");
        // if (xml_value != "" && parseInt(xml_value, 10) == 0) {
        //   window.location.reload();
        // }
      }
    },
    error: function (e) {
      console.error(e);
    },
  });
});
