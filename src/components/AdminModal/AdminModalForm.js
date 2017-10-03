/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Text } from '@dlghq/react-l10n';
import Fieldset from '../Fieldset/Fieldset';
import Switcher from '../Switcher/Switcher';
import styles from './AdminModal.css';

type UserRights = {
  can_change_info: boolean,
  can_ban: boolean,
  can_pin_message: boolean,
  can_delete_message: boolean,
  can_invite: boolean,
  can_add_admins: boolean,
};

export type Props = {
  rights: UserRights
};

class AdminModalForm extends PureComponent {
  props: Props;

  handleChange = (value, event) => {
    console.debug('handleChange');
    this.props.onChange({
      ...this.props.rights,
      [event.target.name]: value
    })
  };

  render() {
    console.debug(this.props)
    const { rights: { can_change_info, can_ban, can_delete_message, can_pin_message, can_invite, can_add_admins } } = this.props;

    return (
      <form className={styles.form}>
        <Fieldset legend="AdminModal.title">
          <Switcher
            id="can_change_info"
            name="can_change_info"
            value={can_change_info}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_change_info" />
          </Switcher>
          <Switcher
            id="can_ban"
            name="can_ban"
            value={can_ban}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_ban" />
          </Switcher>
          <Switcher
            id="can_delete_message"
            name="can_delete_message"
            value={can_delete_message}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_delete_message" />
          </Switcher>
          <Switcher
            id="can_pin_message"
            name="can_pin_message"
            value={can_pin_message}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_pin_message" />
          </Switcher>
          <Switcher
            id="can_invite"
            name="can_invite"
            value={can_invite}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_invite" />
          </Switcher>
          <Switcher
            id="can_add_admins"
            name="can_add_admins"
            value={can_add_admins}
            onChange={this.handleChange}
            className={styles.switcher}
          >
            <Text id="AdminModal.can_add_admins" />
          </Switcher>
        </Fieldset>
      </form>
    );
  }
}

export default AdminModalForm;
