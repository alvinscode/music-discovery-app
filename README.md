# Music Discovery App

Music Discovery App is an single-page application that allows users to add and share their favorite songs to a list that is shared by everyone. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

https://music-discovery-app.onrender.com/songs

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
