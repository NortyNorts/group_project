
# ERIK

Erik is an educational app for students enrolled in the 16 week immersive Software Development course at CodeClan, a digital skills academy based in Scotland. 

**It features:**
* A weekly quiz for students to revise what they have learnt that week
* Talk to your Duck, a place to talk through coding challenges or problems. The duck will give you an answer but maybe not the one you expect
* A Sticky note board where the user can collect sticky notes for quick access to short cuts, ideas and inspiration
* Useful links, this section will have a collection of handy places on the internet that will be of great benefit whilst being a student at CodeClan
* Inspiration, in this section you will find some quotes or anecdotes from alumni


## Tech Stack

**Client:** JavaScript, HTML5, CSS, React, Style Components, React-Stickies

**Server:** Node, Express, MongoDB 


## Installation

- Ensure NPM is installed on your local machine
- In your terminal go to a directory you want to save the app in and perform the following commands:

```bash
  git clone git@github.com:NortyNorts/group_project.git
  cd group_project
```
Install modules in **server:** Open up a new terminal window then perform the following commands:

```bash
  cd server
  npm install
```
Whilst still in server load seed data into MongoDB by running these 3 seeds files:

```bash
  cd server
  npm run userSeeds
  npm run duckSeeds
  npm run quizSeeds
```

Install modules in **client:** Open up a new terminal window then perform the following commands:

```bash
  cd client
  npm install
```

## Deployment

To deploy this project

From server run:

```bash
  npm run server:dev 
```

From client run:

```bash
  npm start 
```
Verify it is running correctly by browsing http://localhost:3000

## Contributors

- @ElinVS
- @NortyNorts
- @Johnstoncam
- @Andrew-C-Smith


