/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import { Text } from '@dlghq/react-l10n';
import Fieldset from '../Fieldset/Fieldset';
import Switcher from '../Switcher/Switcher';
import Button from '../Button/Button';
import styles from './AdminModal.css';

type UserRights = {
  canChangeInfo: boolean,
  canBan: boolean,
  canPinMessage: boolean,
  canDeleteMessage: boolean,
  canInvite: boolean,
  canAddAdmins: boolean
};

export type Props = {
  rights: UserRights,
  onChange: (rights: UserRights) => mixed,
  onOwnershipTranfser: () => mixed
};

class AdminModalForm extends PureComponent {
  props: Props;

  handleChange = (value, event) => {
    this.props.onChange({
      ...this.props.rights,
      [event.target.name]: value
    });
  };

  render() {
    const { rights: { canChangeInfo, canBan, canDeleteMessage, canPinMessage, canInvite, canAddAdmins } } = this.props;

    return (
      <form className={styles.form}>
        <Fieldset legend="AdminModal.legend">
          <Switcher
            id="canChangeInfo"
            name="canChangeInfo"
            value={canChangeInfo}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_change_info" />
          </Switcher>
          <Switcher
            id="canBan"
            name="canBan"
            value={canBan}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_ban" />
          </Switcher>
          <Switcher
            id="canDeleteMessage"
            name="canDeleteMessage"
            value={canDeleteMessage}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_delete_message" />
          </Switcher>
          <Switcher
            id="canPinMessage"
            name="canPinMessage"
            value={canPinMessage}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_pin_message" />
          </Switcher>
          <Switcher
            id="canInvite"
            name="canInvite"
            value={canInvite}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_invite" />
          </Switcher>
          <Switcher
            id="canAddAdmins"
            name="canAddAdmins"
            value={canAddAdmins}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_add_admins" className={styles.dangerLabel} />
          </Switcher>
        </Fieldset>
        <Button
          theme="danger"
          view="link"
          className={styles.formButton}
          onClick={this.props.onOwnershipTranfser}>
          <Text id="AdminModal.tranfser_ownership" />
        </Button>
      </form>
    );
  }
}

export default AdminModalForm;
