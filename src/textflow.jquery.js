(function ($) {

  function middle(intval) {
    return Math.floor(intval[0] + (intval[1] - intval[0])/2);
  }

  function distance(intval) {
    return Math.abs(intval[1] - intval[0]);
  }

  function textflow(elem, min, max) {
    var fit = elem;
    var step = 0;

    fit.css('font-size', min + 'px');

    var parentH = fit.parent().height();
    var parentW = fit.parent().width();

    var intval = [min, max];
    var currentMiddle = middle(intval);
    fit.css('font-size', currentMiddle + 'px');

    do {
      step++;
      if (parentH < fit.outerHeight(true) || parentW < fit.outerWidth(true)) {
        intval = [intval[0], currentMiddle];
      } else {
        intval = [currentMiddle, intval[1]];
      }
      currentMiddle = middle(intval);
      fit.css('font-size', currentMiddle + 'px');
    } while (distance(intval) > 0 && step < 20);
  }

  $.fn.textflow = function(options) {
    var settings = $.extend({
      min: 10,
      max: 100
    }, options);

    return this.each(function() {
      var elem = $(this);
      var min = elem.data('min') || settings.min;
      var max = elem.data('max') || settings.max;
      textflow(elem, min, max);
    });
  };
})(jQuery);
