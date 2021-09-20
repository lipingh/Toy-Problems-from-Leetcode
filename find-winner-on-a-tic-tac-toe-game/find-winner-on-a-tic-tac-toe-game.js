/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const n = 3;

    let rows = [...Array(n)].fill(0);
    let cols = [...Array(n)].fill(0);
    let diagonal1 = 0;
    let diagonal2 = 0;
    let player = 1;
    for (let move of moves) {
        const r = move[0];
        const c = move[1];

        rows[r] += player;
        cols[c] += player;
        if (r === c) {
            diagonal1 += player;
        }
        if (r + c === n-1) {
            diagonal2 += player;
        }

        if (Math.abs(rows[r]) === n || Math.abs(cols[c]) === n || Math.abs(diagonal1) === n || Math.abs(diagonal2) === n) {
            return player === 1 ? 'A' : 'B';
        }
        player *= -1;
    }
    return moves.length === n * n ? 'Draw' : 'Pending';
};