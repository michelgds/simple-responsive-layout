// Load more on table names
$( document ).ready(function() {
  $("#table-names tr").slice( 4 ).hide();

  $("#loadmore").on('click', function (e) {
    e.preventDefault();
    $("tr:hidden").slice(0, 4).slideDown();
    this.remove();
  });
});

// Mask input
$(document).ready(function(){
  $('#tel').mask('(00) 0000-0000');
});