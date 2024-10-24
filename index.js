require('dotenv').config()

const express=require('express')
const app=express()
const port=3000

const githubData={
    "login": "Akshey-Gupta",
    "id": 100192799,
    "node_id": "U_kgDOBfjSHw",
    "avatar_url": "https://avatars.githubusercontent.com/u/100192799?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Akshey-Gupta",
    "html_url": "https://github.com/Akshey-Gupta",
    "followers_url": "https://api.github.com/users/Akshey-Gupta/followers",
    "following_url": "https://api.github.com/users/Akshey-Gupta/following{/other_user}",
    "gists_url": "https://api.github.com/users/Akshey-Gupta/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Akshey-Gupta/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Akshey-Gupta/subscriptions",
    "organizations_url": "https://api.github.com/users/Akshey-Gupta/orgs",
    "repos_url": "https://api.github.com/users/Akshey-Gupta/repos",
    "events_url": "https://api.github.com/users/Akshey-Gupta/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Akshey-Gupta/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": null,
    "public_repos": 37,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2022-02-22T08:15:21Z",
    "updated_at": "2024-10-14T21:45:27Z"
  }

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.get('/twitter',(req,res)=>{
    res.send('akshey.com')
})

app.get('/login',(req,res)=>{
    res.send('<h1>You have logged in</h1>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})