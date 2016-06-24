var area, id

$('.mo').append('<span class=t>sd</span>')

$('.mo').hover(function() {
    $(this).find('.t').css( 'display', 'inline-block' );
  }, function() {
    $( this ).find('.t').css( 'display', 'none' );
  })

$('.t').click(function(){
  if(area) {
    area.removeInstance(id);
    area = null;
  }

  id = $(this).parent().attr('id');
  $( this ).css( 'display', 'none' );
  $('#e').css( 'display', 'inline-block' );
  area = new nicEditor({fullPanel : true}).panelInstance(id, {hasPanel : true});
})

$('#e').click(function(){
  console.log('qwe');
  // id = $(this).parent().attr('id');
  // $( this ).css( 'display', 'none' );
  // area.removeInstance(id);
  // area = null;
})
