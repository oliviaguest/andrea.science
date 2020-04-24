
// Or with jQuery

$(document).ready(function(){


  $.fn.wrapInTag = function(opts) {

    var tag = opts.tag || 'strong',
        words = opts.words || [],
        regex = RegExp(words.join('|'), 'gi'),
        replacement = '<'+ tag +'>$&</'+ tag +'>';

    return this.html(function() {
      return $(this).text().replace(regex, replacement);
    });
  };

  $('.authors').wrapInTag({
    tag: 'b',
    words: ['Martin, A. E.']
  });

// pub-item

  // var authors = document.getElementsByClassName("authors");

  // console.log(x);

  // $(".authors").html('boop');
  // $('.authors').html(html.replace(/Martin, A. E./gi, '<strong>$&</strong>'));

  // for (let a of authors) {
  //     console.log(a.innerHTML);
  //     a.innerHTML = '<b>' + a.innerHTML + '</b>'
  //     // a.innerHTML.replace("Martin, A. E.", "<b>Martin, A. E.</b>");
  // }

});
