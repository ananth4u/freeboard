window.targetThing = "";
$.support.cors = true;

setTimeout(function(){
	$('button#Devicesubmit').click(function(e){
		window.setThing($("#deviceId").val());
		freeboard.setDatasourceSettings("TiTag", {"url":window.targetThing});
	    	$("#deviceId").prop('disabled', true);
	    	$('button#Devicesubmit').prop("disabled",true);
	
	});	
	$('button#Authsubmit').click(function(e){
		window.setThing($("#accessId").val());
		freeboard.setDatasourceSettings("TiTag", {"headers.value":window.targetThing});
	    	$("#accessId").prop('disabled', true);
	    	$('button#Authsubmit').prop("disabled",true);
	
	});	
	
},3000);


window.setThing = function(Value) {
	window.targetThing = "Bearer "+Value;
}
