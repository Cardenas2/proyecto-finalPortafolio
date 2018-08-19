// external js: masonry.pkgd.js

var $grid = $('.grid').masonry({
  columnWidth: 280,
  itemSelector: '.grid-item'
});

/*$grid.on( 'removeComplete', function( event, removedItems ) {
  console.log( 'Masonry remove complete with ' + removedItems.length + ' items' );
});
*/
// init Masonry
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});