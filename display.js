function display(episodes){
	console.log(episodes[0]);

for(var i = 0; i < episodes.length; i++){
	console.log("Title:      " + episodes[i].title + "		Episode " + episodes[i].episode_number)
	console.log("Description:" + episodes[i].description)
	console.log("Ratng:" + episodes[i].rating)
	console.log("-------------")
}
}

module.exports = display