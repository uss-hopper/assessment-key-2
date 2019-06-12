const onPageLoad =  () => {
	 axios.get("./php/apis").then(reply => console.log(reply));
} ;