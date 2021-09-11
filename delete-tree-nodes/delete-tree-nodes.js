/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 if val = 0 return null
 */
var deleteTreeNodes = function(nodes, parent, value) {
    let children = {};
    parent.forEach((node, index) => {
        if (!children[node]) {
            children[node] = [];
        }
        children[node].push(index);
    });
    console.log(children);
    const dfs = (x) => {
        let total = value[x];
        let count = 1;
        if (children[x]) {
            children[x].forEach((child) => {
                let [t, c] = dfs(child);
                total += t;
                count += c;
            });
        }
        return [total, total ? count : 0];
    }
    return dfs(0)[1];
};