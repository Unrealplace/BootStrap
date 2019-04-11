$(document).ready(function() {
	$("#system_link").click(function() {
		$(".center-ct").css("display", "none");
		$("#system").css("display", "block");
		$(".letter-del-choose").css("display", "none");
		$(".letter-del-pl").css("display", "block");
		$(".del_checkbox").css("display", "none")
		$('input[name="del_checkbox"]').each(function() {
			$(this).prop("checked", false);
		});
		$('input[name="checkall"]').each(function() {
			$(this).prop("checked", false);
		});
	});
	$("#personal_link").click(function() {
		$(".center-ct").css("display", "none");
		$("#personal").css("display", "block");
		$(".letter-del-choose").css("display", "none");
		$(".letter-del-pl").css("display", "block");
		$(".del_checkbox").css("display", "none");
		$('input[name="del_checkbox"]').each(function() {
			$(this).prop("checked", false);
		});
		$('input[name="checkall"]').each(function() {
			$(this).prop("checked", false);
		});
	});
	$(".sub-menu a").click(function() {
		$(".sub-menu a").removeClass("active");
		$(this).addClass("active");
	})

	$(".letter-del-pl").click(function() {
		$(this).css("display", "none");
		$(".letter-del-choose").css("display", "block");
		$(".del_checkbox").css("display", "block");
	});
	$('input[name="checkall"]').on("click", function() {
		if($(this).is(':checked')) {
			$('input[name="del_checkbox"]').each(function() {
				$(this).prop("checked", true);
			});
		} else {
			$('input[name="del_checkbox"]').each(function() {
				$(this).prop("checked", false);
			});
		}
	});
	$(".letter-del-cancel").click(function() {
		$(".letter-del-choose").css("display", "none");
		$(".letter-del-pl").css("display", "block");
		$(".del_checkbox").css("display", "none")
	});

	$(".letter-cont-list ul li").mouseover(function() {
		var index = $(this).index();
		$(".info-del").css("display", "none");
		$(".info-del").eq(index).css("display", "block");
	});
	$(".letter-cont-list ul li").mouseout(function() {
		$(".info-del").css("display", "none");
	});

	$(".info-del").click(function() {
		$(".singele-del").css("display", "block");
	});
	$(".dialog-cancel").click(function() {
		$(".singele-del").css("display", "none");
	});
	$(".letter-del-sure").click(function() {
		$(".letter-del-dialog").css("display", "block");
		$(".singele-del").css("display", "none");
	});
	$(".dialog-cancel").click(function() {
		$(".letter-del-dialog").css("display", "none");
	});
});