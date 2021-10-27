import React from 'react'

const Chat = () => {
    return (
        <div class="main">
            <div class="main-header">
                <img src="./images/Vector.jpg" alt="" />
                <h3>Asteria Lucius</h3>
            </div>
            <div class="chat">
                <div class="chat-left">
                    <div class="chat-left-header">
                        <h4>Inbox</h4>
                        <i class="far fa-edit"></i>
                    </div>
                    <div class="chat-left-list">
                        <div class="list">
                            <img src="./images/Unsplash-Avatars_0006s_0015_vinicius-amano-f9oQZOk9vnk-unsplash.jpg" alt="" />
                            <h5>STron</h5>
                        </div>
                        <div class="list">
                            <img src="./images/2.jpg" alt="" />
                            <h5>Admin</h5>
                        </div>
                    </div>
                </div>

                <div class="chat-right">
                    <div class="chat-right-header">
                        <img src="./images/Unsplash-Avatars_0006s_0015_vinicius-amano-f9oQZOk9vnk-unsplash.jpg" alt="" />
                        <h5>STron </h5>
                    </div>
                    <div class="chat-right-body">
                        <div class="recieved-chats">
                            <div class="recieved-chats-img">
                                <img src="./images/Unsplash-Avatars_0006s_0015_vinicius-amano-f9oQZOk9vnk-unsplash.jpg" alt="" />
                            </div>

                            {/* Chat Message Start */}
                            <div class="recieved-chats-msg">
                                <div class="recieved-chats-inbox">
                                    <p>Hi! there, I am STron</p>
                                </div>
                                <span class="time">6:16 PM | October 15</span>
                            </div>
                            <div class="recieved-chats-msg">
                                <div class="recieved-chats-inbox">
                                    <p>Hi! there, I am STron</p>
                                </div>
                                <span class="time">6:16 PM | October 15</span>
                            </div>
                        </div>

                        <div class="outgoing-chats">
                            <div class="outgoing-chats-msg">
                                <div class="outgoing-chats-inbox">
                                    <p>Hello!</p>
                                </div>
                                <span class="time">6:21PM | October 15</span>
                            </div>
                            <div class="outgoing-chats-msg">
                                <div class="outgoing-chats-inbox">
                                    <p>Hello!</p>
                                </div>
                                <span class="time">6:21PM | October 15</span>
                            </div>
                            <div class="outgoing-chats-img">
                                <img src="./images/Vector.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Input Group Thingi */}
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Message" />
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <i class="fas fa-paper-plane"></i>
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Chat
