import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import InputOption from '../../feed/InputOption'

function Post({ name, description, message, photoUrl }) {
  return <div className="post">
      <div className="post__header">
          <Avatar />
          <div className="post__info">
              <h2>{name}</h2>
              <p>{description}</p>
          </div>
      </div>
      
      <div className="post__body">
          <p>{message}</p>
      </div>

      <div className="post__buttons">
          <InputOption Icon={ThumbUpOffAltIcon} title="like" color="gray" />
          <InputOption Icon={ChatIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareIcon} title="Share" color="gray" />
          <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
  </div>
}

export default Post