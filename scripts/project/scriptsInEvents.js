


const scriptsInEvents = {

	async Main_Event1_Act4(runtime, localVars)
	{
		
		var backgroundDiv = document.createElement("div");
		
		
		backgroundDiv.style.backgroundImage = "url('background.png')";
		backgroundDiv.style.backgroundSize = "cover";
		backgroundDiv.style.backgroundPosition = "center";
		backgroundDiv.style.backgroundRepeat = "no-repeat";
		
		
		backgroundDiv.style.position = "fixed";
		backgroundDiv.style.top = "0";
		backgroundDiv.style.left = "0";
		backgroundDiv.style.width = "100%";
		backgroundDiv.style.height = "100%";
		backgroundDiv.style.zIndex = "-1";  
		
		
		document.body.appendChild(backgroundDiv);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

