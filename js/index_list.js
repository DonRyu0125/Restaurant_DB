let HOME_SESSID = getCookie("HOME_SESSID");
// $("#listSearch").keypress(function (event) {
//   if (event.which == "13") {
//     event.preventDefault();
//     event.stopPropagation();
//   }
// });

// KEY NAME : MINISIS FIELDS EX) RES_SPECILITY
// KEY VALUE: KOREAN, ITALIAN
// INDEX KEY: KEY NAME, SAME TO KEY NAME

$("#res_speciality_index").on("click", function () {
  // var url = HOME_SESSID + "/NEXT?INDEXLIST&FORM=[DON_ROOT]index_list.html&TRUNCATE=2&KEYVALUE=Korean&KEYNAME=RES_SPECIALITY&DATABASE=RESTAURANT&errmsg=[DON_ROOT]error.html";

  var url = HOME_SESSID + "/FIRST?INDEXLIST&FORM=[DON_ROOT]index_list.html&KEYNAME=RES_SPECIALITY&DATABASE=RESTAURANT&errmsg=[DON_ROOT]adv_search_error.html";
  load_index_page(url);
});

// retrieve a page of key values from web site
function load_index_page(url) {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", url, true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (xhttp.responseText != "") {
        $("#modal_id").append(xhttp.responseText);
      }
    } else {
      // console.log(this);
    }
  };
}

function searchValue(form_id, request_url) {
  var jquery_form = "#" + form_id;
  var form_data = $(jquery_form).serialize();


  $.ajax({
    async: false,
    type: "POST",
    dataType: "html",
    url: request_url,
    data: form_data,
    success: function (data) {
      if (data != "") {
        
      $("#modal_id").empty();
      $("#modal_id").append(data);
      } else {
        alert("[--Search key is not found--]");
      }
    },
    error: function (xhr, status, error) {
      alert("[--Unable to find search key--]");
    },
  });
}

// function clusterButton(event, url) {
//   event.preventDefault();
//   event.stopPropagation();
//   // Need the logic for replacing the index list, prev next etc

//   //  if url is not #, load page
//   if (url != "#") {
//     load_index_page(url);
//   }
// }


// Modal is not created yet
//html => js 
// $("#search-value").on('click',()=>{
//   console.log('asd')
// })

function SaveButton() {
  let selectedValue = $("#search-value").val();
  $("#RES_SPECIAL_CL").val(selectedValue)
  $("#exampleModal").modal("hide")
}


$("#exampleModal").on("hide.bs.modal", function () {
  $("#modal_id").empty();
});

