const onPageLoad = () => {
	axios.get("./php/apis").then(({data}) => {
		let cards =  createCard(data.data);
		console.log(cards);
		let html = document.getElementById("target");
		html.innerHTML = cards.join("\r\n");

	});
};

const createCard = reply => reply.map(reply => {

	return (
		`
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">${reply.title}</h5>
					<p class="card-text">${reply.body}
					</p>
			</div>
		</div>

	`
	)
});