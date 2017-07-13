function popupOpenClose(popup) {
	if ($(".wrapper").length == 0){
		$(popup).wrapInner("<div class='wrapper'></div>");
	}
	/* Open popup */
	$(popup).show();
	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});
/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popup).find("button[class=close]").on("click",function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
	});
}
/****************************************************************/
function popuptOpenClose(popuprej) {
	if ($(".wrapper").length == 0){
		$(popuprej).wrapInner("<div class='wrapper'></div>");
	}
	/* Open popup */
	$(popuprej).show();
	/* Close popup if user clicks on background */
	$(popuprej).click(function(e) {
		if ( e.target == this ) {
			if ($(popuprej).is(':visible')) {
				$(popuprej).hide();
			}
		}
	});
/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popuprej).find("button[class=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popuprej).hide();
	});
}
/*************************************************************************************/
$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".popup"));
	});
});
$(document).ready(function () {
	$("[data-js=openrej]").on("click", function() {
		popupOpenClose($(".popuprej"));
	});
});
