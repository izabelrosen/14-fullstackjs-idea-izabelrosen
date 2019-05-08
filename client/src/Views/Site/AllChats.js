import React from 'react';
import AllChatsList from '../../Components/Forms/AllChatsList';
import CreateMessage from '../../Components/Forms/CreateMessage';

const AllChats = () => (
  <div className="AllChats">
    <AllChatsList />
    <CreateMessage />
  </div>
);

export default AllChats;
