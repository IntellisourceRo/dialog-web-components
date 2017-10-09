/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import { Text } from '@dlghq/react-l10n';
import Fieldset from '../Fieldset/Fieldset';
import Switcher from '../Switcher/Switcher';
import styles from './AdminModal.css';

export type UserRights = {
  canChangeInfo: boolean,
  canBan: boolean,
  canPinMessage: boolean,
  canDeleteMessage: boolean,
  canInvite: boolean,
  canAddAdmins: boolean,
  transferOwnership: boolean
};

export type Props = {
  rights: UserRights,
  onChange: (rights: UserRights) => mixed
};

class AdminModalForm extends PureComponent {
  props: Props;

  handleChange = (value: boolean, event: $FlowIssue) => {
    this.props.onChange({
      ...this.props.rights,
      [event.target.name]: value
    });
  };

  render() {
    const {
      canChangeInfo,
      canBan,
      canDeleteMessage,
      canPinMessage,
      canInvite,
      canAddAdmins,
      transferOwnership
    } = this.props.rights;

    return (
      <form className={styles.form}>
        <Fieldset legend="AdminModal.legend" className={styles.fieldset}>
          <div className={styles.switcherWrapper}>
            <Switcher
              id="canChangeInfo"
              name="canChangeInfo"
              value={canChangeInfo}
              onChange={this.handleChange}
              className={styles.switcher}
              disabled={transferOwnership}
            >
              <Text id="AdminModal.can_change_info" />
            </Switcher>
          </div>
          <div className={styles.switcherWrapper}>
            <Switcher
              id="canBan"
              name="canBan"
              value={canBan}
              onChange={this.handleChange}
              className={styles.switcher}
              disabled={transferOwnership}
            >
              <Text id="AdminModal.can_ban" />
            </Switcher>
          </div>
          <div className={styles.switcherWrapper}>
            <Switcher
              id="canDeleteMessage"
              name="canDeleteMessage"
              value={canDeleteMessage}
              onChange={this.handleChange}
              className={styles.switcher}
              disabled={transferOwnership}
            >
              <Text id="AdminModal.can_delete_message" />
            </Switcher>
          </div>
          <div className={styles.switcherWrapper}>
            <Switcher
              id="canPinMessage"
              name="canPinMessage"
              value={canPinMessage}
              onChange={this.handleChange}
              className={styles.switcher}
              disabled={transferOwnership}
            >
              <Text id="AdminModal.can_pin_message" />
            </Switcher>
          </div>
          <div className={styles.switcherWrapper}>
            <Switcher
              id="canInvite"
              name="canInvite"
              value={canInvite}
              onChange={this.handleChange}
              className={styles.switcher}
              disabled={transferOwnership}
            >
              <Text id="AdminModal.can_invite" />
            </Switcher>
          </div>
          <div className={styles.switcherWrapper}>
            <Switcher
              id="canAddAdmins"
              name="canAddAdmins"
              danger
              value={canAddAdmins}
              onChange={this.handleChange}
              className={styles.switcher}
              disabled={transferOwnership}
            >
              <Text id="AdminModal.can_add_admins" />
            </Switcher>
            <Text
              className={styles.hint}
              tagName="div"
              id={canAddAdmins ? 'AdminModal.can_add_admins_hint.enabled' : 'AdminModal.can_add_admins_hint.disabled'}
            />
          </div>
        </Fieldset>
        <Fieldset legend="AdminModal.tranfser_ownership_legend" className={styles.fieldset}>
          <Switcher
            id="transferOwnership"
            name="transferOwnership"
            danger
            value={transferOwnership}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.tranfser_ownership" />
          </Switcher>
        </Fieldset>
      </form>
    );
  }
}

export default AdminModalForm;
