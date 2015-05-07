(function(){

var nowDat = {
    "SurvYear": 2008,
    "NumOfProviders": 9,
    "TotAdmissions": 10071,
    "StateTotAdmissions": 40096,
    "MedicareReim": "Medicare: $103,237,759",
    "MedicaidReim": "Medicaid: $42,438,083",
    "BlueCrossReim": "Blue Cross: $2,703,222",
    "OtherInsReim": "Other Insurance: $5,712,969",
    "TotalReim": 154588825,
    "StateTotReim": 486204333,
    "TotExpenditures": 157545343,
    "StateAvgExpenditures": 496792991,
    "SelfPayTot": "Patient Payment: $75,243"
 };

 var thenDat = {
    "SurvYear": 2005,
    "NumOfProviders": 11,
    "TotAdmissions": 9112,
    "StateTotAdmissions": 36498,
    "MedicareReim": "Medicare: $83,522,102",
    "MedicaidReim": "Medicaid: $28,027,334",
    "BlueCrossReim": "Blue Cross: $2,962,836",
    "OtherInsReim": "Other Insurance: $5,563,848",
    "TotalReim": 120399511,
    "StateTotReim": 380158964,
    "TotExpenditures": 116851150,
    "StateAvgExpenditures": 389424446,
    "SelfPayTot": "Patient Payment: $323,391"
};

var toolTips = {
		"providers": "Cabrini Hospice merged with Pax, and Comprehensive Community Hospice of Parker Jewish Institute",
		"workedHours": "This data is for all hopsice care in the state of New York. NYC data is unavailable.",
		"admissions": "<span class=\"popTitle\">THE TREND</span>:<br>Admissions to hospice centers in New York City have increased modestly in recent years, though projections indicate growth is likely to be spurred by a growing elderly population. The most recently available data shows the number of annual enrolees in hospice treatment has increased just 10 percent between 2005 and 2008.",
		"medicare": "<span class=\"popTitle\">WHY MEDICARE MATTERS</span>:<br> Medicare reimbursements are a major source of revenue for hospice companies, but the federal government is planning to scale back subsidies to the industry over the next few years. The two largest hospice providers in the U.S. (Vitas and Gentiva) estimate that as much as 93 percent of annual hospice revenues comes from Medicare, with an additional 4 percent coming from Medicaid and local government. In NYC, 74 percent of the patients served in 2005 were admitted through Medicare, and 78 percent were admitted through Medicare in 2008.",
		"revenues": "<span class=\"popTitle\">THE TREND</span>:<br>The industry's reliance on Medicare and Medicaid is increasing. In 2005, those programs accounted for 92 percent of NYC hospice companies' revenues. In 2008, it was up to 94 percent.",
		"expenses": "<span class=\"popTitle\">RISING COSTS</span>:<br>Expenses for hospice workers has gone up significantly in the past few years. The price of prescription drugs, inflation, transportation costs, higher worker wages and other factors have driven operating expenses up."
	};

 var gone = ['Cabrini Hospice', 'Comprehensive Community Hospice of Parker Jewish Institute'];


 $('.thenPie').on('mouseover', function(e){
 	var id = $(this).attr('data-which');
 	console.log(thenDat[id]);
 	$('.tooltipHolder').html('');
    $('.tooltipHolder').addClass('tooltip').removeClass('hidden').append(thenDat[id]);

    
    var buffer = 10;
    var tooltip_height = $('#tooltip').height();
    var tooltip_width = $('#tooltip').width();
    $('.tooltip').css({
        top: e.pageY - tooltip_height - buffer,
        left: e.pageX - tooltip_width / 2
    })

    $(this).on('mouseout', function(){
    	$('.tooltipHolder').removeClass('tooltip').addClass('hidden');
    })
});

 $('.nowPie').on('mouseover', function(e){
 	var id = $(this).attr('data-which');
 	console.log(thenDat[id]);
 	$('.tooltipHolder').html('');
    $('.tooltipHolder').addClass('tooltip').removeClass('hidden').append(nowDat[id]);

    
    var buffer = 10;
    var tooltip_height = $('#tooltip').height();
    var tooltip_width = $('#tooltip').width();
    $('.tooltip').css({
        top: e.pageY - tooltip_height - buffer,
        left: e.pageX - tooltip_width / 2
    })

    $(this).on('mouseout', function(){
    	$('.tooltipHolder').removeClass('tooltip').addClass('hidden');
    })
});

 $('.then-now-chart tr').on('mouseenter', function(){
 	var id = $(this).attr('data-which');
 	$('.canvas').html('');
 	$('.canvas').append(toolTips[id]);
 })
	

}).call(this);