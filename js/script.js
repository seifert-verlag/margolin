/* Author: Alexander Seifert

*/

$(document).ready(function(){
	var MAX_ID = 2; // Anzahl der Episoden -- das wird dann automatisch vom web-generator gesetzt
	var epID = 0;
	var parID = 0;
	var bookmarkID = 0
	var anchor = "";
	
	// Sterne nach jeder Episode
	$("article.right").each(function(index) {
		$(this).append("<pre style='text-align: center'>* * *</pre>");
	});
	$("article.right:first pre").remove();
	$("article.right:last pre").remove();

	// Navigation zwischen Episoden mit j/k
	$(document).keypress(function(e) {
		if (e.which == 106) {
			if (epID < MAX_ID) {
				epID += 1;
			}
			anchor = "#f" + epID.toString();
			$(anchor).slideto({highlight: false, slide_duration: 0});
		} else if (e.which == 107) {
			if (epID > 0) {
				epID -= 1;
			}
			anchor = "#f" + epID.toString();
			$(anchor).slideto({highlight: false, slide_duration: 0});
		}
	});

	// Lesezeichen setzen
	$("p.content").click(function (e) {
	    var offset = $(this).offset();
		parID = this.id;

		// noch kein Lesezeichen bei diesem Absatz
		if (parID != bookmarkID) {
			bookmarkID = parID;
			$("#bookmark").css({
		        left: offset.left-60,
		        top:  offset.top+35
		    }).show();
			$("#bookmark-hover").hide();
			$.cookie("margolin", bookmarkID, {expires: 365}); // set cookie for a year

		// es existiert hier bereits ein Lesezeichen
		} else {	
			$("#bookmark").hide();
			bookmarkID = 0;
			$.cookie("margolin", 0, {expires: 365}); // set cookie for a year
		}
	});
	
	// Hover-Effekt, damit man merkt, dass man ein Lesezeichen setzen kann
	$("p.content").hover(function(e) {
	    var offset = $(this).offset();
	
		if (this.id != bookmarkID) {
			$("#bookmark-hover").css({
		        left: offset.left-60,
		        top:  offset.top+35
		    }).show();
		}
	},
	function() {
		$("bookmark-hover").hide();
	});

	// epID resetten, wenn den Link nach ganz oben geklickt wird
	$("a.top").bind('click', function() {
		epID = 0;
	});

	// und schließlich: Beim erneuten Aufruf Lesezeichen aus Cookie laden
	// -- der timeout ist deswegen notwendig, weil sich durch das Laden der Webfonts & Hyphenate
	// der ganze Zeilenumbruch verschiebt, die Koordinaten aber nicht upgedated werden
	setTimeout( function() {
		$("#" + $.cookie("margolin")).click().slideto({highlight_duration: 'short'});
	}, 1000);
});
