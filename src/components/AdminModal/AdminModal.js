/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { User } from '@dlghq/dialog-types';
import type { UserRights } from './AdminModalForm';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Text } from '@dlghq/react-l10n';
import Modal from '../Modal/Modal';
import Icon from '../Icon/Icon';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalClose from '../Modal/ModalClose';
import AdminModalUser from './AdminModalUser';
import AdminModalForm from './AdminModalForm';
import styles from './AdminModal.css';

type Props = {
  className?: string,
  user: User,
  rights: UserRights,
  onChange: () => any,
  onSubmit: () => any,
  onClose: () => any
}

class AdminModal extends PureComponent {
  props: Props;

  render() {
    const className = classNames(styles.container, this.props.className);

    return (
      <Modal className={className} onClose={this.props.onClose}>
        <ModalHeader className={styles.header}>
          <AdminModalUser user={this.props.user} />
          {/* <ModalClose onClick={this.props.onClose} /> */}
        </ModalHeader>
        <ModalBody className={styles.body}>
          <AdminModalForm
            rights={this.props.rights}
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
          />
        </ModalBody>
      </Modal>

    );
  }
}

export default AdminModal;
