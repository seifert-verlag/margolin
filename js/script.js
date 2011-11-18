/* Author: Alexander Seifert

*/

$(document).ready(function(){
	var MAX_ID = 3; // Anzahl der Episoden -- das wird dann automatisch vom web-generator gesetzt
	var epID = 0;
	var parID = 0;
	var bookmarkID = 0
	var anchor = "";
	
	// Sterne nach jeder Episode
	$("td.text").each(function(index) {
		$(this).append("<pre style='text-align: center'>* * *</pre>");
	});
	
	// Navigation zwischen Episoden mit j/k
	$(document).keypress(function(e) {
		if (e.which == 106 || e.keyCode == 39) {
			if (epID < MAX_ID) {
				epID += 1;
			}
			anchor = "#f" + epID.toString();
			$(anchor).slideto({highlight: false, slide_duration: 0});
		} else if (e.which == 107 || e.keyCode == 37) {
			if (epID > 0) {
				epID -= 1;
			}
			anchor = "#f" + epID.toString();
			$(anchor).slideto({highlight: false, slide_duration: 0});
		}
	});

	// Lesezeichen setzen
	$("p.content").mousedown(function(){
		parID = parseInt(this.id.substr(1));
		epID = parseInt($(this).parent().parent().get(0).id.substr(1)); // epID von dem Absatz merken
		
		// noch kein Lesezeichen gesetzt hier
		if (parID != bookmarkID) {
			bookmarkID = parID;
			$("#lesezeichen").remove();
			$(this).prepend('<img id="lesezeichen" width="48px" src="img/margolin.png" />');
			$.cookie("margolin", this.id, {expires: 365}); // set cookie for a year
			$(this).mouseleave();
		// es existiert hier bereits ein Lesezeichen
		} else {
			bookmarkID = 0;
			$("#lesezeichen").remove();
			$.cookie("margolin", 0, {expires: 365}); // set cookie for a year
		}
	});
	
	// Hover-Effekt, damit man merkt, dass man ein Lesezeichen setzen kann
	$("p.content").hover(function(){
		if (this.id != bookmarkID) {
			$(this).prepend('<img id="bookmark-hover" width="48px" src="img/margolin-outline.png" />');
		}
	},
	function() {
		$("#bookmark-hover").remove();
	});

	// epID resetten, wenn den Link nach ganz oben geklickt wird
	$("a.top").bind('click', function() {
		epID = 0;
	});

	// und schließlich: Beim erneuten Aufruf Lesezeichen aus Cookie laden
	$("#" + $.cookie("margolin")).mousedown().slideto({highlight_duration: 'short'});
});
