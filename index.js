var katzDeli = [];

function takeANumber(line, name){
	line.push(name);
	return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
	 if (line < 1){
	 	return "There is nobody waiting to be served!"
	 } else {
	 	return `Currently serving ${line.shift()}.` 	
	 }
}

function currentLine(line){
	var theLine = "The line is currently:"
	if (line.length == 1){
		return "The line is currently: 1." + line[0]
	} else if (line.length > 1){
		for (var i = 0; i < (line.length); i++) { 
			theLine += (" "+ (i+1) + ". " + line[i] + ",")
		} 
		return theLine.slice(0, -1)
	} else {
		return "The line is currently empty."
	}
}