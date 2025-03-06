$(window).on('scroll', function () {
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');

    // Calculate the scroll position
    var scroll = $window.scrollTop() + ($window.height() / 2); // Middle of the viewport
   
    $panel.each(function () {
        var $this = $(this);

        // Check if the panel is in the viewport
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            // Remove existing color classes
            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            // Add the color class based on the panel's data attribute
            $body.addClass('color-' + $this.data('color'));
        }
    });
}).trigger('scroll'); // Trigger scroll to apply the color on page load
