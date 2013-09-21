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
jQuery(document).ready(function(){
	addStaffMemberControl();	
});

function addStaffMemberControl()
	{
		jQuery("input[name='code-conduct-select']").change(function(){
			if(jQuery(this).val() == "add-staff-member")
			{
				
				jQuery(".ya-add-staff-member").slideDown();
			}
			else
			{
				jQuery(".ya-add-staff-member").slideUp();
			}
			
		});
	}
jQuery(function(){
	jQuery('#owner').on('click', function(){
		if(jQuery(this).attr('checked') == 'checked'){
			jQuery(this).next('button').trigger('click')
		}
		else{
			
		}
	   
	})
	jQuery('.uncheck-btn').click(function(){
		jQuery('#owner').trigger('click');
	})
	jQuery('.ya-read-more-less').click(function(){
		var show = '<span class="ya-label">Show</span><span class="ya-show-link-icon" data-icon="E" aria-hidden="true"></span>';
		var hide = '<span class="ya-label">Hide</span><span class="ya-show-link-icon" data-icon="C" aria-hidden="true"></span>';
		if(jQuery(this).html() == hide){
			jQuery(this).html(show) 
		}
		else{
			jQuery(this).html(hide) 
		}
	})
	
	
	
	
	
	jQuery('.show-invoke-clause').click(function(){
		
	});
	jQuery('#invoke-clause').on('click', function(){
		if(jQuery(this).attr('checked') == 'checked'){
			jQuery('.show-on-clause').show().css({'visibility': 'visible'});
			jQuery('.hide-for-clause').hide()
		}
		else{
			jQuery('.show-on-clause').hide();
			jQuery('.hide-for-clause').show()
			jQuery('.for-clause-description').hide().css({'visibility': 'hidden'});
			
		}
	});
	jQuery('#invoke-clause:checked').each(function(){
		if(jQuery(this).attr('checked') == 'checked'){
			jQuery('.show-on-clause').show().css({'visibility': 'visible'});
			jQuery('.hide-for-clause').hide()
		}
		else{
			jQuery('.show-on-clause').hide();
			jQuery('.for-clause-description').hide().css({'visibility': 'hidden'});
			jQuery('.hide-for-clause').show();
		}
	});
	
	
	
	
	
	
	
	
	
	jQuery(".cancel-memo").click (function () {
			jQuery("#invoke-clause").trigger('click');
			jQuery('.show-on-clause').hide();
			jQuery('.for-clause-description').hide().css({'visibility': 'hidden'});
			jQuery('.hide-for-clause').show();
		return false;
	});
	
	jQuery('.show-clause-description').click(function(){
		var clasueDescrption = $('.clause-description').val();
		jQuery('.for-clause-description').show().css({'visibility': 'visible'});
		jQuery('.for-clause-description').children().children('p').html(clasueDescrption)
		jQuery('.show-on-clause').hide();
		
		jQuery(".live-desc").text(function(index, text) {
			return text.substr(0, 40);
		});
		
		return false;
	})
	jQuery('.for-show-clause-description').click(function(){
		jQuery('.show-on-clause').show().css({'visibility': 'visible'});
		jQuery('.for-clause-description').hide()
		return false;
	});
	
	jQuery('.ya-pay-for-registration input[type="checkbox"]').click (function () {
		var regChecked = jQuery(".ya-pay-for-registration input:checked").length;
		if ( regChecked > 2  ) {
			jQuery(".continue-btn").addClass('disabled');
		}
		else{
			jQuery(".continue-btn").removeClass('disabled');
		}
	});
	jQuery('.ya-pay-for-registration input[type="checkbox"]:checked').each (function () {
		var regChecked = jQuery(".ya-pay-for-registration input:checked").length;
		if ( regChecked > 2  ) {
			jQuery(".continue-btn").addClass('disabled');
		}
		else{
			jQuery(".continue-btn").removeClass('disabled');
		}
	});
	
	
})




