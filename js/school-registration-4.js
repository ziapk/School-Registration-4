jQuery(document).ready(function(){
	jQuery("select").change(function () {
		if(jQuery(this).val() == "0") 
		{
			jQuery(this).addClass("ya-empty");
		}	
		else 
		{
			jQuery(this).removeClass("ya-empty");
		}	
	});

	jQuery("select").change();
	
	jQuery("#rys-edit-track-link").click(function(){
		jQuery(".ya-edit-track").slideToggle();
	});
	jQuery(".ya-add-new-session-btn").click(function(){
		jQuery(".ya-new-session-container").slideToggle();
	});

	changeCollapseIcon();

		
});
function changeCollapseIcon()
{
	jQuery(".accordion-heading").click(function(){
		var classes = jQuery(this).parent().find(".collapse").attr("class");
		if (classes.indexOf("in") >= 0)
		{
			jQuery(this).find(".ya-collapse-icon").attr("data-icon","*");
		}
		else 
		{
			jQuery(this).find(".ya-collapse-icon").attr("data-icon","");
		}

	});
}


