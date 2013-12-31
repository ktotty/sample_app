function updateCountdown() {
	// 140 character length maximum
	var remaining = 140 - jQuery('#micropost_content').val().length;
	jQuery('.countdown').text(remaining + ' characters remaining');
	console.log('Here I am.');
}

jQuery(document).ready(function($) {
	updateCountdown();
	$('#micropost_content').change(updateCountdown);
	$('#micropost_content').keyup(updateCountdown);
});
