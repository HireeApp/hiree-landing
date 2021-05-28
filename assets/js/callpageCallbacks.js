callpage('event.onCallCreated', function(call) {
    if (call.scheduled_at) {
        ga('set', 'page', '/thank-you-scheduled');
        ga('send', 'pageview');
    } else if (call.email) {
        ga('set', 'page', '/thank-you-email');
        ga('send', 'pageview');
    } else {
        ga('set', 'page', '/thank-you-call');
        ga('send', 'pageview');
    }
});
