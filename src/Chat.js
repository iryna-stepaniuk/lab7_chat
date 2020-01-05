import React from 'react';
import TextField from "@material-ui/core/TextField";
import {db} from "./index.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import {animateScroll} from "react-scroll";
import {isUserAuthorized, getUserName, getFormattedDate} from "./utils";

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.sendMessage = this.sendMessage.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.state = {
            messages: [],
            userName: getUserName(),
            authorized: isUserAuthorized(),
            msg: ""
        };

        this.updateMessages();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        animateScroll.scrollToBottom({
            containerId: "messages-block"
        });
    }

    updateMessages() {
        db.collection("messages")
            .orderBy("date")
            .onSnapshot(querySnapshot => {
                const messages = querySnapshot.docs.map(doc => doc.data());
                this.setState({messages});
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    sendMessage() {
        const messageData = {
            name: this.state.authorized ? this.state.userName : null,
            message: this.state.msg,
            date: new Date().toString()
        };

        db.collection('messages').doc().set(messageData);
        this.setState({msg: ''})
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.sendMessage()
        }
    }

    render() {
        const messages = this.state.messages;

        return (
            <div>
                <Header userName={this.state.userName} authorized={this.state.authorized} title={'Chat'}/>
                <List id="messages-block" className='messages-block'>
                    {
                        messages.map((message, index) => {
                            return (<ListItem key={index}>
                                    <ListItemText
                                        primary={message.message}
                                        secondary={`by ${(message.name || 'anonymous')}  ${getFormattedDate(message.date)}`}
                                    />
                                </ListItem>
                            )
                        })
                    }
                </List>
                <div className="footer">
                    <div>
                        <TextField className="message-input"
                                   fullWidth label="Type here your message..."
                                   name='msg'
                                   onChange={this.handleInputChange}
                                   autoFocus={true}
                                   autoComplete="off"
                                   onKeyDown={this.handleKeyDown}
                                   value={this.state.msg}
                        />
                        <Button variant="outlined" className='send-button' onClick={this.sendMessage}>
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat