$(document).ready( function() {
    var AC3Inhoud = $('#AC3').detach();
    var BlackFlagInhoud = $('#BlackFlag').detach();
    var rogueInhoud = $('#rogue').detach();
    var SyndicateInhoud = $('#Syndicate').detach();

    
   $('#AC3Thumb').on('click', function() {
       DePopUP.openen({inhoud: AC3Inhoud, breedte: 600});
   });
    
    $('#BlackFlagThumb').on('click', function() {
       DePopUP.openen({inhoud: BlackFlagInhoud, breedte: 600});
   });
      
    $('#rogueThumb').on('click', function() {
       DePopUP.openen({inhoud: rogueInhoud, breedte: 600});
   });  
    
    $('#SyndicateThumb').on('click', function() {
       DePopUP.openen({inhoud: SyndicateInhoud, breedte: 600});
   });  
});