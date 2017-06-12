//business logic
function IncompleteWork(task, completed) {
  this.task = task;
  this.completed = completed;
}
//user interface logic
$(document).ready(function() {
  $("form#newtodoform").submit(function(event) {
    event.preventDefault();
    var newItem = $("input#new-item").val();

    var newWork = new IncompleteWork(newItem, false);

    $("ul#display").append("<li><span class='item'>" + newWork.task() + "</span></li>");

    $(".item").click(function() {
      $("#display").hide();
    });

  });
});
