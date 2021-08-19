// Stores the active TCP connection object.
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key);
  });

  return stdin;
};


// Handling CTRL + C User Input

const handleUserInput = function(key) {
// \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    // console.log("Move : up")
    connection.write("Move: up");
  } else if (key === "s") {
    // console.log("Move : down")
    connection.write("Move: down");
  } else if (key === "a") {
    // console.log("Move : left")
    connection.write("Move: left");
  } else if (key === "d") {
    // console.log("Move : right")
    connection.write("Move: right");
  } else if (key === "q") {
    connection.write("Say: Oops, wrong key!");
  } else if (key === "x") {
    connection.write("Say: Focus!");
  }
};
  


module.exports = {setupInput};