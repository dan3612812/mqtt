var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://192.168.2.28:1883');

var mqtt_topic = []

// subscribe topic "test"
client.on('connect', function () {
    client.subscribe('test');
});

//to pusblish message to topic "test"
function push() {
    client.publish('test', 'Hello mqtt this is me');
}
//listen all topic and printf
client.on('message', function (topic, message) {
    console.log(topic + "：" + message.toString())

    //dynamic subscribe topic
    var msg = message.toString().split(":");
    if (msg[0] == "instr") {
        client.subscribe(msg[1]);
    }
});

