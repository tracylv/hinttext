/* hinttext */

(function ($) {

    var defaults =
    {
	    // the class name for hinttext dom
	    hintLabelCls : "hinttext"
    };

    $.fn.hinttext = function (options) {

        var settings = $.extend(true, {}, defaults, options);
        return this.each(function () {

            var $this = $(this);
            var $con = $this.parent();
	    var hintLabelCls = settings.hintLabelCls;

            // generate hintText dom
            var dom = "<span class='" + hintLabelCls + "'>" + $this.attr("placeholder") + "</span>";
            $this.attr("placeholder", "");
            $(dom).appendTo($con);
			
	    hintLabelCls = "." + hintLabelCls;

            if($.trim($this.val()).length > 0)
            {
                $(hintLabelCls, $con).hide();
            }

            $this.click(function () {

                // hide hint text
                $(hintLabelCls, $con).hide();

                // the input area get focus
                $this.focus();
            });

            // in case, click on the hint text
            $(hintLabelCls, $con).click(function (event) {

                // hide hint text
                $(this).hide();

                // the input area get focus
                $this.focus();
            });

            // when input area is blur, if input value is null then show hint text , or else don't show hint text
            $this.blur(function () {

                var inputval = $.trim($this.val());

                if (inputval === "" || inputval === null) {
                    $(hintLabelCls, $con).show();
                }
            });

            // input area get focus , hide the hint text
            $this.focus(function () {
                $(hintLabelCls, $con).hide();
            });

        });
    };
    $.fn.hinttext.defaults = defaults;
})(jQuery);
