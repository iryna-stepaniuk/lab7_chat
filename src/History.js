import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {animateScroll} from "react-scroll";
import Header from "./Header";
import {db} from "./index.js";
import {getUserName, isUserAuthorized} from "./utils";
import {Redirect} from "react-router-dom";

class History extends React.Component {
    constructor(props) {
        super(props);

        this.getMessages().then(messages => {
            this.setState({messages: messages.reverse()});
        });

        this.state = {
            messages: [],
            userName: getUserName(),
            authorized: isUserAuthorized(),
        };
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        animateScroll.scrollToBottom({
            containerId: "messages-block"
        });
    }

    getMessages() {
        return db.collection('messages').orderBy("date", "desc").get().then((postObj) => {
            return postObj.docs.map(doc => {
                return doc.data()
            })
        });
    }

    getFormattedDate(dateString) {
        const date = new Date(dateString);
        return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }

    render() {
        const messages = this.state.messages;

        if (!this.state.authorized) {
            return (
                <Redirect to='/chat'/>
            )
        }

        return (
            <div>
                <Header userName={this.state.userName} authorized={this.state.authorized} title={'History'}/>

                <List id="messages-block" className='messages-block history'>
                    {
                        messages.map(message => {
                            return (<ListItem>
                                    <span>
                                    </span>
                                    <ListItemText
                                        primary={message.message}
                                        secondary={`by ${(message.name || 'anonymous')}  ${this.getFormattedDate(message.date)}`}
                                    />
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        );
    }
}

export default History