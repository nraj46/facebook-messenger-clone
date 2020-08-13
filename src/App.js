import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMesseges] = useState([]);
  const [username, setUsername] = useState('');


  useEffect(() => {

    db.collection('Messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMesseges(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
      });

  }, [])

  


  useEffect(() => {
    //const name = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'));
  }, [])


  const sendMessage = (event) => {
    // all the logic send  messages
    event.preventDefault();

    db.collection('Messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //setMesseges([...messages, {username: username, text: input}]);
    setInput('');


  }

  return (
    <div className="App">

      <TelegramIcon className= 'app_telegram' fontSize = 'large'color = 'primary'/>
      <h2>Welcome {username}</h2>

      <form className = 'app__form'>
        <FormControl className = 'app__formcontrol'>
          <InputLabel >Enter a message.....</InputLabel>
          <Input className = 'app__input' placeholder = 'Enter a message...'value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className='app__iconbutton' disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
         
        </FormControl>


      </form>
      <FlipMove>
        {

          messages.map(({id,message}) => (

            <Message key={id} username={username} message={message}  />



          ))
        }
      </FlipMove>

     




    </div>
  );
}

export default App;
