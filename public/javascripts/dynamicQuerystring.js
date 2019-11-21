window.targetThing = "";
$.support.cors = true;

setTimeout(function(){
	$('button#Devicesubmit').click(function(e){
		window.setThing($("#deviceId").val());
		freeboard.setDatasourceSettings("TiTag", {"url":window.targetThing});
	    	$("#deviceId").prop('disabled', true);
	    	$('button#Devicesubmit').prop("disabled",true);
	
	});	
	
},3000);


window.setThing = function(url) {
	window.targetThing = url;
}
