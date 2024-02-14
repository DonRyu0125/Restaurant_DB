if ($("#filter_results").length) { 
      if (document.getElementById("filter_xml") != null) {
        var filter_inner_xml = $("div").find("#filter_xml")[0].innerHTML;
        let filter_xml = "<filter_xml>\n" + filter_inner_xml + "</filter_xml>\n";
        console.log(filter_xml);
        parser = new DOMParser();
        var xml_doc = parser.parseFromString(filter_xml, "text/xml");
        var filter_tag_list = xml_doc.getElementsByTagName("filter");
        var filter_count = filter_tag_list.length;
        //$('.filter-class').prepend($("<div class='filter_list_container'></div>"));
        // manipulation of filter data

        for (x = 0; x < filter_count; x++) {
          var filter_group = filter_tag_list[x];
          var item_group_list = filter_group.getElementsByTagName("item_group");
          var item_group_count = item_group_list.length;
          var filter_name = xml_doc.getElementsByTagName("filter")[x].getAttribute("name");
          var filter_title = xml_doc.getElementsByTagName("filter")[x].getAttribute("title");
          var filter_dropdown_id = "filter_dropdown";
          var newline = "";
          if (x > 0) {
            filter_dropdown_id += x.toString(); // create different filter id in order to append next ul
            newline = "<br/>";
          }
          var filter_ul_responsive = xml_doc.getElementsByTagName("filter")[x].getAttribute("title");
          if (filter_ul_responsive == "Database" || filter_ul_responsive == "Digital Media Present" || filter_ul_responsive == "Holdings") {
            filter_ul_responsive = "filter_ul_responsive";
          } else {
            filter_ul_responsive = "";
          }
          $(".filter-class").append($(newline + "<h4 class='filter-title' style='font-size:18px; text-align:center;'><b>" + filter_title + "</b></h4><ul id=" + filter_dropdown_id + " list-group' class='general-desc filter-ul " + filter_ul_responsive + "'></ul>"));
          //  $('.filter_list_container').append($( newline + "<div class='filter_list_container_inner'><ul id='filter_ul_main'><li id='filter_li_main'><div id='filter_title'><a href='#' name='filter_title'>" + filter_title + " <i class='fa fa-caret-down'/></a></div><ul id=" + filter_dropdown_id + " style='padding-left:0;'></ul></li></ul></div>"));
          for (i = 0; i < item_group_count; i++) {
            var item_group = item_group_list[i];
            var item_value = item_group.getElementsByTagName("item_value")[0].childNodes[0].nodeValue;
            var item_frequency = item_group.getElementsByTagName("item_frequency")[0].childNodes[0].nodeValue;
            var item_link = item_group.getElementsByTagName("item_link")[0].childNodes[0].nodeValue.replace("&DATABASE=UNION_VIEW", "");
            var item_selected = item_group.getElementsByTagName("item_selected")[0].childNodes[0].nodeValue;
            if (item_selected == "Y") {
              selection_sign = " - ";
            }
            if (item_value == "X") {
              item_value = "Yes";
            }
            if (item_value == "DESCRIPTION_WEB") {
              item_value = "Archives";
            }
            if (item_value == "COLLECTIONS_WEB") {
              item_value = "Art";
            }
            if (item_value == "BIBLIO_WEB") {
              item_value = "Library";
            }
            //console.log("Item Value: " + item_value + "\n" + "Item Freq: " + item_frequency + "\n");
            $("#" + filter_dropdown_id).append($("<li class='list-group-item filter-li'><a class='secondary-blue filter-record-link' href=" + item_link + ">" + item_value + " (" + item_frequency + ") " + "</a></li>")); //change here
          }
        }
      }
} else {
    console.log("fail")
}