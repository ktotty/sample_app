function updateCountdown() {
	// 140 character length maximum
	var remaining = 140 - jQuery('#micropost_content').value().length;
	jQuery('.countdown').text(remaining + ' characters remaining');
}

jQuery(document).ready(function($) {
	updateCountdown();
	$('#micropost_content').change(updateCountdown);
	$('#micropost_content').keyup(updateCountdown);
});
