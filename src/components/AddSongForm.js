import React, { useState } from 'react';


function AddSongForm( { newSong }) {

    const initialState = {title:"", artist:"", image:""}
    const [songData, setSongData] = useState (initialState)

function handleChange(e) {
    const key = e.target.name
    const value = e.target.value
    setSongData({...songData, [key]: value})
    console.log(e.target.value)
}

function handlePost(e) {
    e.preventDefault()
    fetch("http://localhost:3000/songs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(songData)
    })
    .then(res => res.json())
    .then(data => newSong(data))
    .then(setSongData(initialState))
    .catch(err=> console.log(err))
    }


    return (
            <div className="ui segment">Add Song Form
              <form onSubmit={handlePost} className="ui form">
                <div className="inline fields">
                  <input  onChange={handleChange} value={songData.title} type="text" name="title" placeholder="song title"/>
                  <input  onChange={handleChange} value={songData.artist} type="text" name="artist" placeholder="artist" />
                  <input  onChange={handleChange} value={songData.image} type="text" name="image" placeholder="image" />
                </div>
                <button className="ui button" type="submit">
                  Add Song
                </button>
              </form>
            </div>
          );
}
export default AddSongForm