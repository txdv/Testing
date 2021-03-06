﻿/* global Bridge */

Bridge.define('ClientTestLibrary.TestDateFunctions', {
    statics: {
        dateTimes: function (assert) {
            assert.expect(2);

            // TEST
            //[#83] by C#
            var str = "2015-03-24T10:48:09.1500225+03:00";
            var bridgeDate = Bridge.Date.parse(str);
            var bridgeDate1 = new Date(str);

            assert.deepEqual(bridgeDate, bridgeDate1, "[#83] C# bridgeDate = bridgeDate1");

            // TEST
            //[#83] by JavaScript code. This is to check the same issue as above and just to check another way of calling QUnit from JavaScript
            var str = "2015-03-24T10:48:09.1500225+03:00",
    bridgeDate = Bridge.Date.parse(str),
    jsDate = new Date(Date.parse(str)),
    format = "yyyy-MM-dd hh:mm:ss";
    assert.deepEqual(Bridge.Date.format(bridgeDate, format), Bridge.Date.format(jsDate, format), "[#83] js");
        }
    }
});

