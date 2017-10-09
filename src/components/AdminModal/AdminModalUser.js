/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ChatMember } from '../ActivityListMembers/types';
import React, { PureComponent } from 'react';
import PeerInfoTitle from '../PeerInfoTitle/PeerInfoTitle';
import Avatar from '../Avatar/Avatar';
import styles from './AdminModal.css';
import getAvatarPlaceholder from '../../utils/getAvatarPlaceholder';

type Props = {
  user: ChatMember
};

class AdminModalUser extends PureComponent {
  props: Props;

  render() {
    const { user: { title, avatar, peer: { id }} } = this.props;
    const placeholder = getAvatarPlaceholder(id);

    return (
      <div className={styles.user}>
        <Avatar
          className={styles.avatar}
          size={82}
          title={title}
          image={avatar}
          placeholder={placeholder}
        />
        <div className={styles.info}>
          <PeerInfoTitle title={title} className={styles.title} />
        </div>
      </div>
    );
  }
}

export default AdminModalUser;
