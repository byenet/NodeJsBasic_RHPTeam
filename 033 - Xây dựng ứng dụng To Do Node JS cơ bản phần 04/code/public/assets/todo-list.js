$(document).ready(function () {
  $("form").on("submit", function () {
    var item = $("form input");
    var todo = { item: item.val() };

    $.ajax({
      type: "POST",
      url: "/todo",
      data: todo,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });
    return false;
  });

  $("li").on("click", function () {
    var item = $(this).text().trim().replace(/ /g, "-");
    // console.log(item);
    $.ajax({
      type: "DELETE",
      url: "/todo/" + item,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });
  });
});


// $(document).ready(function () {

//   $("form").on("submit", function () {
//     var item = $("form input");
//     var todo = { item: item.val() };

//     axios({
//       method: "post",
//       url: "/todo",
//       data: todo,
//     }).then(function (response) {
//       console.log("post success");
//     });
//   });

//   $("li").on("click", function () {
//     var item = $(this).text().trim().replace(/ /g, "-"); 
//     console.log(item);

//     axios({
//       method: "delete",
//       url: "/todo/" + item,
//     }).then(function (response) {
//       location.reload();
//       console.log("delete success" + item);
//     });
//   });
// });

