//表单验证
$(document).ready(function() {
	$("#theme").blur(function() {
		if($("#theme").val() == "" || $("#theme").val() == null) {
			$("#theme").addClass("error");
			$("#name_span").removeClass("hidden");
		} else {
			$("#theme").removeClass("error");
			$("#name_span").addClass("hidden");
		}

	});
	//	$("#name").blur(function() {
	//		if($("#name").val() == "" || $("#name").val() == null) {
	//			$("#name").addClass("error");
	//			$("#name_span_2").removeClass("hidden");
	//		} else {
	//			$("#name").removeClass("error");
	//			$("#name_span_2").addClass("hidden");
	//		}
	//
	//	}); 
	$("#name").blur(function() {      
		var username = /^[\u4E00-\u9FA5A-Za-z]+$/;      
		console.log($("#name").val())      
		if(!username.test($("#name").val()) || $("#name").val() == "" || $("#name").val() == null) {       
			$("#name").addClass("error");
			$("#name_span_2").removeClass("hidden");      
		} else {      
			$("#name").removeClass("error");
			$("#name_span_2").addClass("hidden");      
		}      
	});
	$("#phone").blur(function() {      
		var phone = /^1[34578]\d{9}$/;      
		console.log($("#phone").val())      
		if(!phone.test($("#phone").val()) || $("#phone").val() == "" || $("#phone").val() == null) {       
			$("#phone").addClass("error");
			$("#phone_span").removeClass("hidden");      
		} else {      
			$("#phone").removeClass("error");
			$("#phone_span").addClass("hidden");      
		}      
	});
	$("#email").blur(function() {      
		var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;      
		console.log($("#email").val())      
		if(!email.test($("#email").val()) || $("#email").val() == "" || $("#email").val() == null) {       
			$("#email").addClass("error");
			$("#email_span").removeClass("hidden");      
		} else {      
			$("#email").removeClass("error");
			$("#email_span").addClass("hidden");      
		}      
	});
	$(".release_task_type").blur(function() {
		if($(".release_task_type:radio:checked").length == 0) {
			$(".task_type_1").addClass("error");
			$("#radio_spadffvvn_1").removeClass("hidden");
		} else {
			$(".task_type_1").removeClass("error");
			$("#radio_span_1").addClass("hidden");
		}

	});
	$(".release_pay_type").blur(function() {
		if($(".release_pay_type:radio:checked").length == 0) {
			$(".task_type_2").addClass("error");
			$("#radio_span_2").removeClass("hidden");
		} else {
			$(".task_type_2").removeClass("error");
			$("#radio_span_2").addClass("hidden");
		}

   d});
	$("#Province").blur(function() {
		if($("#Province").val() == "省份") {
			$("#Province").addClass("error");
			$("#Province_span").removeClass("hidden");
		} else {
			$("#Province").removeClass("error");
			$("#Province_span").addClass("hidden");
		}

	});
	$("#City").blur(function() {
		if($("#City").val() == "城市") {
			$("#City").addClass("error");
			$("#City_span").removeClass("hidden");
		} else {
			$("#City").removeClass("error");
			$("#City_span").addClass("hidden");
		}

	});
	$("#School").blur(function() {
		if($("#School").val() == "学校") {
			$("#School").addClass("error");
			$("#School_span").removeClass("hidden");
		} else {
			$("#School").removeClass("error");
			$("#School_span").addClass("hidden");
		}

	});
	$("#address").blur(function() {
		if($("#address").val() == "" || $("#address").val() == null) {
			$("#address").addClass("error");
			$("#address_span").removeClass("hidden");
		} else {
			$("#address").removeClass("error");
			$("#address_span").addClass("hidden");
		}

	});
	$("#send").click(function() {
		if($("#address").val() == "" || $("#address").val() == null) {
			$("#address").addClass("error");
			$("#address_span").removeClass("hidden");
			$("#address").focus();

		} else {
			$("#address").removeClass("error");
			$("#address_span").addClass("hidden");
		}
		if($("#School").val() == "学校") {
			$("#School").addClass("error");
			$("#School_span").removeClass("hidden");
			$("#School").focus();
		} else {
			$("#School").removeClass("error");
			$("#School_span").addClass("hidden");
		}
		if($("#City").val() == "城市") {
			$("#City").addClass("error");
			$("#City_span").removeClass("hidden");
			$("#City").focus();
		} else {
			$("#City").removeClass("error");
			$("#City_span").addClass("hidden");
		} 
		if($("#Province").val() == "省份") {
			$("#Province").addClass("error");
			$("#Province_span").removeClass("hidden");
			$("#Province").focus();  
		} else {
			$("#Province").removeClass("error");
			$("#Province_span").addClass("hidden");
		}

		var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;      
		console.log($("#email").val())      
		if(!email.test($("#email").val()) || $("#email").val() == "" || $("#email").val() == null) {       
			$("#email").addClass("error");
			$("#email_span").removeClass("hidden"); 
			$("#email").focus();       
		} else {      
			$("#email").removeClass("error");
			$("#email_span").addClass("hidden");      
		}  
		var phone = /^1[34578]\d{9}$/;      
		if(!phone.test($("#phone").val()) || $("#phone").val() == "" || $("#phone").val() == null) {       
			$("#phone").addClass("error");
			$("#phone_span").removeClass("hidden");   
			$("#phone").focus();    
		} else {      
			$("#phone").removeClass("error");
			$("#phone_span").addClass("hidden");      
		}
		var username = /^[\u4E00-\u9FA5A-Za-z]+$/;      
		if(!username.test($("#name").val()) || $("#name").val() == "" || $("#name").val() == null) {       
			$("#name").addClass("error");
			$("#name_span_2").removeClass("hidden");   
			$("#name").focus();   
		} else {      
			$("#name").removeClass("error");
			$("#name_span_2").addClass("hidden");      
		}    
		if($(".release_pay_type:radio:checked").length == 0) {
			$(".task_type_2").addClass("error");
			$("#radio_span_2").removeClass("hidden");
			$(".release_pay_type").focus();
		} else {
			$(".task_type_2").removeClass("error");
			$("#radio_span_2").addClass("hidden");
		} 
		if($(".release_task_type:radio:checked").length == 0) {
			$(".task_type_1").addClass("error");
			$("#radio_span_1").removeClass("hidden");
			$(".release_task_type").focus();
		} else {
			$(".task_type_1").removeClass("error");
			$("#radio_span_1").addClass("hidden");
		}
		if($("#theme").val() == "" || $("#theme").val() == null) {
			$("#theme").addClass("error");
			$("#name_span").removeClass("hidden");
			$("#theme").focus();
		} else {
			$("#theme").removeClass("error");
			$("#name_span").addClass("hidden");
		}
	});

});