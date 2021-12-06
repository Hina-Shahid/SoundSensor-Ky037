const amqp = require('amqplib/callback_api');
var func_name = "hina";
function send_feedback(msg){
amqp.connect('amqp://192.168.43.163', (connError, connection) => {
if (connError) {
throw connError;
}
connection.createChannel((channelError, channel) => {
if (channelError) {
throw channelError;
}
const QUEUE = 'SoundValue'
channel.assertQueue(QUEUE);
channel.sendToQueue(QUEUE, Buffer.from(msg));
console.log(`Message send ${QUEUE}`);
})
})}



function bin2string(array){
var result = "";
for(var i = 0; i < array.length; ++i){
result+= (String.fromCharCode(array[i]));
}
return result;
}



exports.handler = function(context, event) {
var b = JSON.parse(JSON.stringify(event));
var a = bin2string(b.body.data);



context.callback("feedback "+a);



console.log("TRIGGER "+a);
send_feedback("SoundValue: "+func_name+" received "+a);
};