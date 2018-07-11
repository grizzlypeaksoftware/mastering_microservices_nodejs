var DataAccess = require("./dataAccess.js");

var Model = function(){};

Model.prototype.GetNotes = function(req){

	var query = {};
	if(req.query && req.query.id){
		query = {_id: DataAccess.MakeMongoId(req.query.id)}
	}

	return new Promise( function(fulfill, reject){	
		DataAccess.GetEntities("notes_microservice", "notes", query)
		.then(function(docs){
			fulfill(docs);
		}).catch(function(err){
			reject(err);
		});
	});	
};

Model.prototype.Insert = function(req,res){
	var title = req.body.title;
	var note = req.body.note;
	var tags = req.body.tags;

	var posted_note = {
		title: title,
		note: note
	};

	if(tags !== ""){
		posted_note.tags = tags.split(',');
   }

   return new Promise(function(fulfill, reject){
	   DataAccess.InsertEntity(posted_note, "notes_microservice", "notes")
	   .then(function(result){
		   fulfill(result);
	   }).catch(function(err){
			reject(err);
	   });
   });
};


module.exports = new Model();