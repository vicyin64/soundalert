/*Sound alert by Victor Yin*/

import xapi from 'xapi';

const THRESHOLD = 50; // set threshold value here
const alertTime = 20; //Time in seconds to display alert on screen and touch 10
//This enables the Room Analytics required for the Macro to function properly
function init() {
    xapi.config.set('RoomAnalytics AmbientNoiseEstimation Mode', 'On')
    .catch((error) => { console.error(error); });
    console.log('RoomAnalytics AmbientNoiseEstimation Mode Has been Enabled');
}

function onSoundLevelChange(level) {
  if (level > THRESHOLD) {
     alertDisplay(THRESHOLD);
    console.log('Sound level too high!');
    // do something here, such as mute the microphone or display a warning message
  }
}
function alertDisplay(THRESHOLD) {
   const text2Display = 'Sound limit reached set threshold of ' + THRESHOLD

	xapi.command(
	  	'UserInterface Message Alert Display',
	  	{Title : 'Sound Level threshold Reached',
	  	Text : (text2Display),
	  	Duration : (alertTime) }
	)
}
xapi.status.on('RoomAnalytics Sound Level A', onSoundLevelChange)