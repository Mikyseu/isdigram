import Component from "../../core/Component.mjs";

import UserList from "./UserList.mjs";
import MessageList from "./MessageList.mjs";
import SendMessageForm from "./SendMessageForm.mjs";

class Chat extends Component {
  constructor() {
    super("section");

    const userList = new UserList();

    this._messageList;
    let sendMessageForm;

    userList.onUserClick((userId) => {
      const usernameTitle = new Component("h3");
      usernameTitle.setText(user.username);
      if (!this._messageList) {
        this._messageList = new MessageList(user.id);
        sendMessageForm = new SendMessageForm(user.id);

        sendMessageForm.onSendMessage(() => this._messageList.refresh());

        this.add(this._messageList, sendMessageForm);
      } else {
        this._messageList.stopAutoRefresh();

        const oldMessageList = this._messageList;
        const oldSendMessageForm = sendMessageForm;

        this._messageList = new MessageList(user.id);
        sendMessageForm = new SendMessageForm(user.id);

        sendMessageForm.onSendMessage(() => this._messageList.refresh());

        this.replace(oldMessageList, this._messageList);
        this.replace(oldSendMessageForm, sendMessageForm);
      }
    });

    this.add(userList);
  }

  stopAutoRefresh() {
    this._messageList.stopAutoRefresh();
  }
}

export default Chat;
