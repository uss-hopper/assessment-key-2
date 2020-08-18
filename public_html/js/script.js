const onPageLoad = () => {
	fetch(
		"https://bootcamp-coders.cnm.edu/~gkephart/ng-demo7-backend/public_html/apis/posts/"
	)
	.then((response) => response.json())
	.then((response) => {
		document.getElementById("target").innerHTML = response.data.map(
			(reply) => {
				return `
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">${reply.title}</h5>
					<p class="card-text">${reply.body}
					</p>
			</div>
		</div>
			`;
			}
		);
	});
};
