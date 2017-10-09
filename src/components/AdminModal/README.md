```jsx
const { PeerInfoSelectorState } = require('../../entities');
const contacts = require('../ContactList/mock/contacts.json');
const chatMembers = contacts.map((contact) => {
  return {
    peerInfo: contact
  }
});

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
  selector: PeerInfoSelectorState.create(chatMembers)
};

const actions = {
  onChange: (selector) => setState({ selector }),
  onSelect: (user) => setState({ user }),
  onRightsChange: (rights) => setState({ rights }),
  onOwnershipTranfser: (user) => {
    console.debug('onOwnershipTranfser', user)
  },
  onSubmit: (rights) => setState({ rights }),
  onClose: () => setState({ isOpen: false })
};

const handleOpen = () => setState({ isOpen: true });

<div>
  <Button theme="primary" onClick={handleOpen}>Add admin</Button>
  {
    state.isOpen ? (
      <AdminModal
        rights={state.rights}
        selector={state.selector}
        {...actions}
      />
    ) : null
  }
</div>
```
