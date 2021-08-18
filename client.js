const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // attach an event handler to handle incoming data
  conn.on('data', (data) => {
    console.log(data);
  });

  // Connect event handler
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: ES');

    // const intervalID = setInterval(() => {
    //   conn.write('Move: up');
    // }, 500);

    // //Use setTimeout to stop the snake after 6 moves
    // setTimeout(() => {
    //   clearInterval(intervalID);
    // },3000);
  
  });


  return conn;
};


module.exports = {connect};


