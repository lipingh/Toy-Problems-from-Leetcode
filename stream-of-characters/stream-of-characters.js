var TrieNode = function(val) {
    this.children = {};
    this.val = val;
    this.isEnd = false;
}
TrieNode.prototype.addWord = function(word) {
    let currNode = this;
    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        if(!currNode.children[ch]) {
            currNode.children[ch] = new TrieNode(ch);
        }
        currNode = currNode.children[ch];
    }
    currNode.isEnd = true;
}
/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
    this.trie = new TrieNode(null);
    this.letters = [];
    for (let i = 0; i < words.length; i++) {
        let currNode = this.trie;
        currNode.addWord(words[i].split('').reverse());
    }
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    this.letters.unshift(letter);
    // console.log(this.letters);
    let currNode = this.trie;
    for (let i = 0; i < this.letters.length; i++) {
        const ch = this.letters[i]
        if (currNode.children[ch]) {
            currNode = currNode.children[ch];
            if (currNode.isEnd) {
                return true;
            }
        } else {
            return false;
        }  
    }
    return false;
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */