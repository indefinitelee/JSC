$(function() {
//Student Code Start
// Select all the child div elements under the #thumbnails container.
  $("#thumbnails").children("div");
// Select all the img elements from #thumbnails.
  $("#thumbnails").children("div").children("img");
// Use the find() method to select all the .thumbnail elements belonging to #thumbnails.
  $("#thumbnails").find(".thumbnail");
//Select all the children belonging to #thumbnails.
  $("#thumbnails").children();
  
  //Go back up the tree from the .thumbnail element to the #thumbnails element.
  $(".thumbnail").parent().parent("#thumbnails");
  
// Starting with a .thumbnail selector select the next() closest .thumbnail.
  $(".thumbnail").parent("div").next().children(".thumbnail");
  
// Find the next to last .thumbnail in the #thumbnails tree.
  $("#thumbnails div:last-child").prev();
});