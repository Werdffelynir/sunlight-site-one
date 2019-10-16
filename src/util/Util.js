
function closest(node, parentSelector){
    while (node) {
        if (node.matches(parentSelector)) return node;
        else node = node.parentElement;
    }
    return null;
}




const Util = {
    closest,

};

export default Util;
