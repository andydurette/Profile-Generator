const axios = require('axios');

//Step 3. Recieves color from question passed as a paramater from colorQuestion recieves createPdf function call which is executed at the end as a callBack
async function gitHubProfile(answers, createPdf){
  const response1 = await axios(`https://api.github.com/users/${answers.githubName}`);
  let gitHubInfo = {
    name: response1.data.name,
    location: response1.data.location,
    followers: response1.data.followers,
    following: response1.data.following,
    bio: response1.data.bio,
    html_url: response1.data.html_url,
    blog: response1.data.blog,
    location: response1.data.location,
    public_repos: response1.data.public_repos,
    avatar_url: response1.data.avatar_url,
    company: response1.data.company
  } 
  const response2 = await axios(`https://api.github.com/users/${answers.githubName}/starred`);
  gitHubInfo.starred = Object.keys(response2.data).length;
  // Pass data to createPdf function from the 2 gitHub API calls
   createPdf(answers, gitHubInfo);
}

module.exports.gitHubProfile = gitHubProfile;