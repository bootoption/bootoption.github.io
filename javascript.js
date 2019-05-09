fetch("https://api.github.com/repos/bootoption/bootoption/releases/latest")
	.then(function(response) {
		return response.json()
	})
	.then(function(json) {
		let version = json.tag_name
		let assets = json.assets
		let tarURL = json.tarball_url
		let zipURL = json.zipball_url

		document.getElementById("version").innerHTML = version

		for (var i = 0; i < assets.length; i++) {
			let asset = assets[i]				
			let listItem = document.createElement("li")
			let link = document.createElement("a")
			link.href = asset.browser_download_url
			link.innerHTML = asset.name
			listItem.appendChild(link)
			document.getElementById("assets").appendChild(listItem)
		}

		document.getElementById("tar-link").href = tarURL
		document.getElementById("zip-link").href = zipURL
		
		document.getElementById("fetch-box").setAttribute("style", "display: block")
		document.getElementById("repo-link-box").setAttribute("style", "display: block")
	})
