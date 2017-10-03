/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { User } from '@dlghq/dialog-types';
import React, { PureComponent } from 'react';
import PeerInfoTitle from '../PeerInfoTitle/PeerInfoTitle';
import Avatar from '../Avatar/Avatar';
import styles from './AdminModal.css';

type Props = {
  user: User
};

class AdminModalUser extends PureComponent {
  props: Props;

  render() {
    const { user: { name, bigAvatar, placeholder } } = this.props;

    return (
      <div className={styles.user}>
        <Avatar
          className={styles.avatar}
          size={80}
          title={name}
          image={bigAvatar}
          placeholder={placeholder}
        />
        <div className={styles.info}>
          <PeerInfoTitle title={name} className={styles.title} />
        </div>
      </div>
    );
  }
}

export default AdminModalUser;
