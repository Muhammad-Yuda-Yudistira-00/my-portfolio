$(document).ready(function() {
	if(!$("html").attr("data-current-lang")) {
		$("html").attr("data-current-lang", "en")
	}
	

	$(".flag").click(function() {
		$("#english").toggle()
		$("#indonesian").toggle()

		$('[data-lang="en"]').toggle()
		$('[data-lang="id"]').toggle()

		let currentLang = $("html").attr("data-current-lang")

		if(currentLang === "en") {
			$("html").attr("data-current-lang", "id")
			currentLang = "id"
		} else if(currentLang === "id") {
			$("html").attr("data-current-lang", "en")
			currentLang = "en"
		}
		console.log({currentLang})
	})

})
