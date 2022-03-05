import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './post/Post';
import { db } from './firebase';


function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
    setPosts(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    )
    )
  })

  const sendPost = e => {
    e.preventDefault()
  }
  
  return (
    <div className="feed">
    <div className="feed__inputContainer">
      <div className="feed__input">
        <CreateIcon />
        <form>
          <input type="text"/>
          <button onClick={sendPost} type="submit">Send</button>
        </form>
      </div>
      <div className="feed__inputOptions">
        <InputOption Icon={ImageIcon} title="Photo" color="#7085F9"/>
        <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e"/>
        <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
        <InputOption Icon={CalendarViewDayIcon} title="Write atricle" color="#7fc15e"/>
      </div>
    </div>

    {posts.map((post) => {
      <Post />
    })}

    <Post name="Camilla Åmli" description="Web Developer" message="WOW This is my first Post!🥳 "/>
  </div>
  )
}

export default Feed