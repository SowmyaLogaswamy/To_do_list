//business logic
function IncompleteWork(task, completed) {
  this.task = task;
  this.completed = completed;
}
var itemsArray = [];

//user interface logic
$(document).ready(function() {
  $("form#newtodoform").submit(function(event) {
    event.preventDefault();
    var newItem = $("input#new-item").val();
    itemsArray.push(newItem);
    console.log(newItem);
    console.log(itemsArray);
    var newWork = new IncompleteWork(newItem, false);
    $(".headertwo").show();
    $("#displaycheckboxform").show();
    $(".form-group").append("<label class='checkbox'>" + "<input type='checkbox' name='still-to-do' value=id=\'"+ newWork.task + "\'>" + newWork.task + "<br>" + "</label>");
  });

  $("form#displaycheckboxform").submit(function(event) {
    event.preventDefault();
    $("#deleteAcc").on("click", function() {
      $(".checkbox input:checked").parent().remove();
    });
  });
});
