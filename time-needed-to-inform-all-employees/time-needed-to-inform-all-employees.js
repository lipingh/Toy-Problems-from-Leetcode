/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const graph = {};
    manager.forEach((v, i) => {
        if (!graph[v]) {
            graph[v] = [];
        }
        graph[v].push(i);
    });
    const helper = (id) => {
        if (!graph[id]) {
            return 0;
        }
        let time = 0;
        graph[id].forEach(subId => {time = Math.max(time, informTime[id] + helper(subId))});
        return time;
    }
    return helper(headID);
};