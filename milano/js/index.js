$( function() {
  $(".sortable").sortable();

  $('input').keypress(function(e) {
    if(e.which == 13) {
      var val = $('input').val();
      $('ol').prepend('<li class="slide-down">' + val + '</li>');
      $(this).val('');
    }
  });

  $('.tinderslide-b').click(function(e){
    $('#tinderslide').addClass('b');
  });

  $('[data-check]').click(function(e){
    var check = $(this).attr('data-check');
    $(this).parent().toggleClass('is-checked');
    $('.button-question').removeClass('is-checked');
    $('[data-checkbutton=' + check + ']').addClass('is-checked');
  });

    /**
   * jTinder initialization
   */
  $("#tinderslide").jTinder({
    onDislike: function (item) {
      if (item.index() == 0) {
        $('.question').removeClass('is-active');
        if ($('#tinderslide').hasClass('b')) {
          $('[data-slide="2"]').addClass('is-active');
        }
        else {
          $('[data-slide="2"]').addClass('is-active');
        };
      };
    },
    onLike: function (item) {
      if (item.index() == 0) {
        $('.question').removeClass('is-active');
        if ($('#tinderslide').hasClass('b')) {
          $('[data-slide="2"]').addClass('is-active');
        }
        else {
          $('[data-slide="2"]').addClass('is-active');
        };
      };
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.like',
    dislikeSelector: '.dislike'
  });
  /**
   * Set button action to trigger jTinder like & dislike.
   */
  $('.actions .like, .actions .dislike').click(function(e){
    e.preventDefault();
    $("#tinderslide").jTinder($(this).attr('class'));
  });

  $('[data-link]').click(function(e){
    e.preventDefault();
    var link = $(this).attr('data-link');
    $('.question').removeClass('is-active');
    $('[data-slide=' + link + ']').addClass('is-active');
    $('.modal-close').addClass('is-active');
    $('body').addClass('modal-active')
  });

  $('.modal-close').click(function(e){
    e.preventDefault();
    $('.question, .result, .modal-close').removeClass('is-active');
    $('body').removeClass('modal-active')
  });
});