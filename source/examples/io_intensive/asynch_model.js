var Model = function(){
	
};

Model.prototype.InitRequest = function(){
	// example long running request

	// the callback from initializing the back-end request should return an id for status;
	return {
		id: 12345
	};
};

Model.prototype.GetRequest = function(id){
	//the calling app can query for completeness of job, and get the payload as well if complete
	return{
		status: {percentComplete: .6},
		payload: {}
	};
};

Model.prototype.GetPagedRequest = function(id, pointer, num_records){
	//the calling app can query for completeness of job, and get the payload as well if complete
	return{
		status: {percentComplete: 1, pointer: pointer, num_records: num_records },		
		payload: {
			results: [
				//... the results set
			]
		}
	};
};




module.exports = new Model();