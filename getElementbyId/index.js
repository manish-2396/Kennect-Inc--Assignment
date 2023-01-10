
const getElementById = function (id) {
  let result = "";
  function getIDNode(node) {
    if (node.id === id) {
      result = node;
    }
    for (let i = 0; i < node.childNodes.length; i++) {
      getIDNode(node.childNodes[i]);
    }
  }

  getIDNode(document.body);
  console.log(result);
  return result;
};

getElementById("container").innerHTML = "Hi I am Manish";
