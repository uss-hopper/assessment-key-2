const onPageLoad =  () => {
	 axios.get("./php/apis").then(({data}) => {
	 	console.log(data)
	 });
} ;