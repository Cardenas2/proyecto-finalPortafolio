// external js: masonry.pkgd.js

var $grid = $('.grid').masonry({
  columnWidth: 160,
  itemSelector: '.grid-item'
});

$grid.on( 'removeComplete', function( event, removedItems ) {
  console.log( 'Masonry remove complete with ' + removedItems.length + ' items' );
});
