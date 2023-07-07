# Music Discovery App

Music Discovery App is an single-page application that allows users to add and share their favorite songs to a list that is shared by everyone. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

https://earnest-sunshine-a5f222.netlify.app/ - Front End Repository

https://music-discovery-app.onrender.com/songs - Back End Repository

To add a song to the list, click "Add Song" at the top right. Input a song title, artist, and a URL for an image of the album art. To view the list of songs that have been added, click on "Songs". This will display a list of all the songs that have been added with the "Add Song" form, and will organize the list of songs based off of the ones with the most likes. To the right of the likes button, there is a delete button to remove songs from the list. The top song will have their artist featured on the homepage. The songs and likes are saved on a backend database and will save automatically without requiring a refresh of the page. 

## How to Use App Locally  

```bash
$ git clone git@github.com:alvinscode/music-discovery-app.git
$ cd music-discovery-app
$ npm install
$ npm start
```

In a new terminal,

```bash
$ cd server
$ json-server --watch db.json
```

## Contributor's Guide

Fork the repository on GitHub.

Run the tests to confirm they all pass on your system. If they don’t, you’ll need to investigate why they fail.

Write tests that demonstrate your bug or feature. Ensure that they fail.

Make your change.

Run the entire test suite again, confirming that all tests pass including the ones you just added.

Send a GitHub Pull Request to the main repository’s main branch. GitHub Pull Requests are the expected method of code collaboration on this project.

## License

[MIT](https://choosealicense.com/licenses/mit/)