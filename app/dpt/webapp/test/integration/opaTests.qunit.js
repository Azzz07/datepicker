sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'dpt/test/integration/FirstJourney',
		'dpt/test/integration/pages/tabList',
		'dpt/test/integration/pages/tabObjectPage'
    ],
    function(JourneyRunner, opaJourney, tabList, tabObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('dpt') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetabList: tabList,
					onThetabObjectPage: tabObjectPage
                }
            },
            opaJourney.run
        );
    }
);