```jsx
const contacts = require('../ContactList/mock/contacts.json');
const initialState = {
  isOpen: false,
  rights: {
    canChangeInfo: true,
    canBan: true,
    canPinMessage: true,
    canDeleteMessage: false,
    canInvite: true,
    canAddAdmins: false
  },
  current: null
};

const user = {
  "id": 1365010623,
  "name": "Nikita Gusakov",
  "nick": "nkt",
  "about": "¯\\_(ツ)_/¯\n¯\\_(ツ)_/¯",
  "sex": "unknown",
  "avatar": "https://www.gravatar.com/avatar/19c935592c57cbeeec09a3b3d23b5b10",
  "bigAvatar": "https://www.gravatar.com/avatar/19c935592c57cbeeec09a3b3d23b5b10",
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
        users={contacts}
        current={state.current}
        {...actions}
      />
    ) : null
  }
</div>
```
