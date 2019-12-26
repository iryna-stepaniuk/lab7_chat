import React from 'react';
import TextField from "@material-ui/core/TextField";
import {db} from "./index.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Header from "./Header";

import {animateScroll} from "react-scroll";
import moment from "moment";

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.sendMessage = this.sendMessage.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        db.collection("messages")
            .orderBy("date")
            .onSnapshot(querySnapshot => {
                const messages = querySnapshot.docs.map(doc => {
                    return doc.data()
                });
                console.info(messages);

                this.setState({messages});

            });


        this.state = {
            messages: [],
            userName: window.localStorage.getItem('name'),
            authorized: window.localStorage.getItem('authorized'),
        };
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
    }

    render() {
        const messages = this.state.messages;

        return (
            <div>
                <Header userName={this.state.userName} authorized={this.state.authorized} title={'Chat'}/>
                <List id="messages-block" className='messages-block'>
                    {
                        messages.map(message => {
                            return (<ListItem>
                                    <span>
                                    </span>
                                    <ListItemText
                                        primary={message.message}
                                        secondary={`by ${(message.name || 'anonymous')}  ${moment(message.date).fromNow()}`}
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
                                   autoCmplete={false}
                                   autocomplete="off"
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