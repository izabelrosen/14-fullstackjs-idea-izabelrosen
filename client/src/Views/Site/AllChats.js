import React from 'react';
import AllChatsList from '../../Components/Forms/AllChatsList';
import CreateMessage from '../../Components/Forms/CreateMessage';

/*  eslint arrow-body-style: ["error", "always"]  */

const AllChats = () => {
  return (
    <div className="AllChats">
        <AllChatsList />
        <CreateMessage />
    </div>
  );
};

export default AllChats;
