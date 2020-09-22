let lastCommit = (username) => {
let url = `https://api.github.com/users/${username}/events/public`
 return fetch(url, {headers: {'authorization': `${gitToken}`}})
 .then(user => user.json())
 .then(data => data.filter(event => event.type === "PushEvent"))
 .then(PushEvents => PushEvents[0].created_at.slice(0, 10))
}


document.getElementById('lookitup').addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value
    lastCommit(username)
        .then(date => document.getElementById('output').innerText = date)
})
