function comments(input = []) {
    let data = { userList: [], articleList: [], comments: {} };
    for (let line of input) {
        if (line.split(' ').length === 2) {
            let [command, item] = line.split(' ');
            if (command === 'user') {
                if (!data.userList.includes(item)) {
                    data.userList.push(item);
                }
            } else if (command === 'article') {
                if (!data.articleList.includes(item)) {
                    data.articleList.push(item);
                }
            }
        } else {
            const [username, article, title, content] = line
                .replace(' posts on ', '&')
                .replace(': ', '&')
                .replace(', ', '&')
                .split('&');
            if (data.userList.includes(username) && data.articleList.includes(article)) {
                if (!data.comments.hasOwnProperty(article)) {
                    data.comments[article] = [{
                        [username]: `--- From user ${username}: ${title} - ${content}`
                    }];
                } else {
                    data.comments[article].push({ [username]: `--- From user ${username}: ${title} - ${content}` });
                }
            }
        }
    }
    let sortedComments = Object.entries(data.comments)
        .sort((a, b) => b[1].length - a[1].length);
    for (const [name, comments] of sortedComments) {
        console.log(`Comments on ${name}`);
        for (const commentItem of comments.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))) {
            const [user, comment] = Object.entries(commentItem)[0];
            console.log(comment);
        }
    }
}
comments([
    'user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping', 'user someUser',
    'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);