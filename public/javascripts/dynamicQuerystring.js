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
		window.setThing1($("#accessId").val());
		freeboard.setDatasourceSettings("TiTag", {"headers":[{"name":"Content-Type","value":"application/json"},{"name":"Authorization","value":window.targetThing1}]});
	    	$("#accessId").prop('disabled', true);
	    	$('button#Authsubmit').prop("disabled",true);
	
	});	
	
},3000);


window.setThing = function(url) {
	window.targetThing = "https://iotone.virtusa.com/api/iotone/data/get?deviceId="+url;
}

window.setThing1 = function(value) {
	window.targetThing1 = "Bearer "+value;
}

