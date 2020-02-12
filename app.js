//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let   urls = ["/What_is_loram"];
let   topics = ["What is Lorem Ipsum?"];
let   posts = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","I am making backend"];

   

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

/********************HOME PAGE********************/
 app.get("/", function(req, res){

/*****************************/ 
 for(i=0; i<urls.length; i++){
mainPage(urls[i], topics[i], posts[i],"1");
console.log(urls[i]);
}

 	res.render("template", {
	title:"Home",
	topic:topics,
	post:posts,
	value:"0",
	link : urls

});	
});
/******************"/"***************/








/********************Contact Page********************/
 mainPage("/about","About","none","0");


/********************About PAGE********************/
 mainPage("/contact","Contact","none","0");




/********************New PAGE********************/
mainPage("/post", "Create New Post"," ","0");
app.post("/post", function(req, res){
	let topic = req.body.topic;
	let post  = req.body.content;
	
	urls.push('/'+topic.split(' ').join('_'));
	topics.push(topic);
	
	posts.push(post);
	// res.render("template", {
	// topic:topics,
	// post:posts

	// });
	res.redirect("/");




});


/****************New post url**********/

/********************Functiom**********/


function mainPage(location,page, detail,value){



app.get(location,function(req,res){
res.render("template",{
	title:page,
    detail:detail,
    value:value
     
 });	
});
}



app.listen(8080, function(){
	console.log(8080);

});
