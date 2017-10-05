/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Text } from '@dlghq/react-l10n';
import styles from './AdminModalUserList.css';
import Avatar from '../../Avatar/Avatar';
import getAvatarPlaceholder from '../../../utils/getAvatarPlaceholder';
import PeerInfoTitle from '../../PeerInfoTitle/PeerInfoTitle';

export type Props = {
};

class AdminModalUserListItem extends PureComponent {
  props: Props;

  handleClick = () => {
    this.props.onClick(this.props.user.peer.id);
  };

  renderAvatar() {
    const { user: { avatar, title, peer: { id } } } = this.props;
    const placeholder = getAvatarPlaceholder(id);

    return (
      <Avatar
        title={title}
        image={avatar}
        placeholder={placeholder}
        size={36}
        className={styles.avatar}
      />
    );
  }

  render() {
    return (
      <div onClick={this.handleClick} style={this.props.style} className={styles.user}>
        <div className={styles.userWrapper}>
          {this.renderAvatar()}
          <span className={styles.title}>
            <PeerInfoTitle title={this.props.user.title} />
          </span>
        </div>
      </div>
    );
  }
}

export default AdminModalUserListItem;
