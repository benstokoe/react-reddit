var Reddit = {
    getRedditUrl: function(extra) {
        return "http://www.reddit.com" + extra;
    },

    getPopularSubreddits: function() {
        var redditUrl = this.getRedditUrl("/subreddits/popular.json");

        return $.getJSON(redditUrl);
    },

    getThreadsForSub: function(sub) {

    }

};

module.exports = Reddit;