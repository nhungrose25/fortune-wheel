


const scriptsInEvents = {

	async Main_Event1_Act5(runtime, localVars)
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
	},

	async Main_Event14_Act1(runtime, localVars)
	{
		function randomPickByPercentage(options) {
		    const random = Math.random() * 100;
		    let cumulativePercentage = 0;
		
		    for (const option of options) {
		        cumulativePercentage += option.percentage;
		        if (random <= cumulativePercentage) {
		            return option.value;
		        }
		    }
		    return null; 
		}
		
		
		const arrayInstance = runtime.objects["award"].getFirstInstance();
		const options = [
		    { value: 0, percentage: arrayInstance.getAt(0,5) },
		    { value: 1, percentage: arrayInstance.getAt(1,5) },
		    { value: 2, percentage: arrayInstance.getAt(2,5) },
		    { value: 3, percentage: arrayInstance.getAt(3,5) },
			{ value: 4, percentage: arrayInstance.getAt(4,5) },
		    { value: 5, percentage: arrayInstance.getAt(5,5) },
			{ value: 6, percentage: arrayInstance.getAt(6,5) },
			{ value: 7, percentage: arrayInstance.getAt(7,5) },
			{ value: 8, percentage: arrayInstance.getAt(8,5) },
			{ value: 9, percentage: arrayInstance.getAt(9,5) },
			{ value: 10, percentage: arrayInstance.getAt(10,5) },
			{ value: 11, percentage: arrayInstance.getAt(11,5) }
		];
		
		
		const result = randomPickByPercentage(options);
		
		runtime.globalVars.get = result;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

