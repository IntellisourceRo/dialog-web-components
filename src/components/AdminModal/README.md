```jsx
const initialState = {
  isOpen: false,
  rights: {
    can_change_info: true,
    can_ban: true,
    can_pin_message: true,
    can_delete_message: true,
    can_invite: true,
    can_add_admins: false
  }
};

const user = {
  "id": 1365010623,
  "name": "Nikita Gusakov",
  "nick": "nkt",
  "about": "¯\\_(ツ)_/¯\n¯\\_(ツ)_/¯",
  "sex": "unknown",
  "avatar": "https://cdn.dlg.im/ZfVVcxn7G80o5SCAf1KfCFNa/file_-226603708555311607/small-avatar.jpg?AWSAccessKeyId=3VPQW52VF5C0DJOZ7E1M&Expires=1507061831&Signature=xUJxEoc8HiFNkpdvbcnuTliQ0RI%3D",
  "bigAvatar": "https://cdn.dlg.im/ZfVVcxn7G80o5SCAf1KfCFNa/file_736227160311846332/large-avatar.jpg?AWSAccessKeyId=3VPQW52VF5C0DJOZ7E1M&Expires=1507061831&Signature=%2FeYiZFtx2ewku7AEyXLcHhJ%2Fo0Y%3D",
  "placeholder": "orange",
  "isContact": true,
  "isBot": false,
  "presence": null,
  "isOnline": false,
  "isBlocked": false,
  "phones": [],
  "emails": [],
  "timeZone": "+03:00"
};

const actions = {
  onChange: (rights) => setState({ rights }),
  onSubmit: (rights) => setState({ rights }),
  onClose: () => setState({ isOpen: false })
};

const handleOpen = () => setState({ isOpen: true });

<div>
  <Button theme="primary" onClick={handleOpen}>Add admin</Button>
  {
    state.isOpen ? (
      <AdminModal
        user={user}
        rights={state.rights}
        {...actions}
      />
    ) : null
  }
</div>
```
