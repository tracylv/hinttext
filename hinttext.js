/* hinttext */

if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

// hinttext
(function ($) {

    var defaults =
    {

    };

    $.fn.hinttext = function (options) {

        var settings = $.extend(true, {}, defaults, options);
        return this.each(function () {

            var $this = $(this);
            var $con = $this.parent();

            // generate hintText dom
            var dom = "<span class='hinttext'>" + $this.attr("placeholder") + "</span>";
            $this.attr("placeholder", "");
            $(dom).appendTo($con);

            if($this.val().trim().length > 0)
            {
                $(".hinttext", $con).hide();
            }

            $this.click(function () {

                // hide hint text
                $(".hinttext", $con).hide();

                // the input area get focus
                $this.focus();
            });

            // in case, click on the hint text
            $(".hinttext", $con).click(function (event) {

                // hide hint text
                $(this).hide();

                // the input area get focus
                $this.focus();
            });

            // when input area is blur, if input value is null then show hint text , or else don't show hint text
            $this.blur(function () {

                var inputval = $this.val().trim();

                if (inputval === "" || inputval === null) {
                    $(".hinttext", $con).show();
                }
            });

            // input area get focus , hide the hint text
            $this.focus(function () {
                $(".hinttext", $con).hide();
            });

        });
    };
    $.fn.hinttext.defaults = defaults;
})(jQuery);
