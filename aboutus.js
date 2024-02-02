document.addEventListener('DOMContentLoaded', function() {
	const teamMembers = document.querySelectorAll('#team-members li');

	teamMembers.forEach(function(member) {
		member.addEventListener('mouseover', function() {
			this.style.transform = 'scale(1.1)';
			this.style.transition = 'transform 0.3s';
		});

		member.addEventListener('mouseout', function() {
			this.style.transform = 'scale(1)';
			this.style.transition = 'transform 0.3s';
		});
	});
});