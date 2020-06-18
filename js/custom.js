        jQuery(document).ready(function() {

            var numberOfItems = jQuery("#options").find(".drag-text").length;
            jQuery.each(jQuery("#options").find(".drag-text"), function(index, item) {
                jQuery(item).attr("order", index);
                var removeBotton = jQuery('<i class="fa fa-times cancel_btn" style="display:none"></i>');
                removeBotton.click(function() {
                    addToOlderPlace(jQuery(this).parent());
                });
                jQuery(item).append(removeBotton);

            });

            jQuery('.selected_answer10,.selected_answer9,.selected_answer8,.selected_answer7,.selected_answer6,.selected_answer5,.selected_answer4,.selected_answer3,.selected_answer2,.selected_answer1').droppable({
                accept: ".drag-text",

                drop: function(event, ui) {
                    if (jQuery(this).find(".drag-text").length > 0)
                        addToOlderPlace(jQuery(this).find(".drag-text"));

                    jQuery(ui.draggable).find("i").attr("style", "");
                    jQuery(this).append(jQuery(ui.draggable));


                    // if (jQuery('.selected_answer10').html().length > 0 && jQuery('.selected_answer1L').html().length > 0 && jQuery('.selected_answer1R').html().length > 0) {
                    if (jQuery('.selected_answer10').html().length > 0 && jQuery('.selected_answer9').html().length > 0 && jQuery('.selected_answer8').html().length > 0 && jQuery('.selected_answer7').html().length > 0 && jQuery('.selected_answer6').html().length > 0 && jQuery('.selected_answer5').html().length > 0 && jQuery('.selected_answer4').html().length > 0 && jQuery('.selected_answer3').html().length > 0 && jQuery('.selected_answer2').html().length > 0 && jQuery('.selected_answer1').html().length > 0) {
                        jQuery('.fillinblank_button').prop('disabled', false);


                    } else {
                        jQuery('.fillinblank_button').prop('disabled', true);

                    }


                }
            });

            jQuery(".drag-text").draggable({
                helper: "clone",
                revert: "invalid"
            });

            function addToOlderPlace(jQueryitem) {
                var indexItem = jQueryitem.attr("order");
                var itemList = jQuery("#options").find(".drag-text");
                jQueryitem.find("i").hide();

                if (indexItem === "1")
                    jQuery("#options").prepend(jQueryitem);
                else
                if (Number(indexItem) === Number(numberOfItems) - 1)
                    jQuery("#options").append(jQueryitem);
                else

                    jQuery(itemList[indexItem - 1]).after(jQueryitem);
            }

        });


        jQuery(document).ready(function() {

            jQuery('#fillinblank_button').click(function() {
                function ans() {
                    document.getElementsByClassName("no-display").style.display = "inline-block";
                }

                if (jQuery('.selected_answer10,.selected_answer9,.selected_answer8,.selected_answer7,.selected_answer6,.selected_answer5,.selected_answer4,.selected_answer3,.selected_answer2,.selected_answer1').find('#ca-10, #ca-9,#ca-8,#ca-7,#ca-6,#ca-5,#ca-4,#ca-3,#ca-2,#ca-1')) {
                    jQuery('.selected_answer10 #ca-10,.selected_answer9 #ca-9,.selected_answer8 #ca-8,.selected_answer7 #ca-7,.selected_answer6 #ca-6,.selected_answer5 #ca-5,.selected_answer4 #ca-4,.selected_answer3 #ca-3,.selected_answer2 #ca-2,.selected_answer1 #ca-1').css({
                        'color': '#0d9f3e'

                    });
                    jQuery(".drag-text").draggable({
                        disabled: true
                    });

                    jQuery('.answer_section').show();

                    //   jQuery('.selected_answer1, .selected_answer1L, .selected_answer1R').find('i').hide();
                    jQuery('span.selected_answer10,span.selected_answer9, span.selected_answer8, span.selected_answer7, span.selected_answer6, span.selected_answer5, span.selected_answer4, span.selected_answer3, span.selected_answer2, span.selected_answer1').css({
                        'color': '#f73c55'
                    });

                }
            });
        });
        jQuery(document).ready(function() {
            jQuery('#loadpop').click(function() {

                if (jQuery('.selected_answer10,.selected_answer9,.selected_answer8,.selected_answer7,.selected_answer6,.selected_answer5,.selected_answer4,.selected_answer3,.selected_answer2,.selected_answer1').find('#ca-10, #ca-9,#ca-8,#ca-7,#ca-6,#ca-5,#ca-4,#ca-3,#ca-2,#ca-1')) {
                    // jQuery('.selected_answer10 #ca-10,.selected_answer9 #ca-9,.selected_answer8 #ca-8,.selected_answer7 #ca-7,.selected_answer6 #ca-6,.selected_answer5 #ca-5,.selected_answer4 #ca-4,.selected_answer3 #ca-3,.selected_answer2 #ca-2,.selected_answer1 #ca-1').css({
                    //     'color': '#0d9f3e'

                    // });
                    jQuery(".drag-text").draggable({
                        disabled: false
                    });

                    jQuery('.answer_section').delay(180000).show(500);
                    jQuery('.timeout').delay(180000).show(100);

                    //   jQuery('.selected_answer1, .selected_answer1L, .selected_answer1R').find('i').hide();
                    // jQuery('span.selected_answer10,span.selected_answer9, span.selected_answer8, span.selected_answer7, span.selected_answer6, span.selected_answer5, span.selected_answer4, span.selected_answer3, span.selected_answer2, span.selected_answer1').css({
                    //     'color': '#f73c55'
                    // });

                }
            });
        });

        function ans() {
            document.getElementById("fillinblank_button").style.display = "inline-block";
        }

        function start() {
            document.getElementById("drag-dropp").style.display = "block";
        }