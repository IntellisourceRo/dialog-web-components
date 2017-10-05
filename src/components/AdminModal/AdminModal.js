/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { User, PeerInfo } from '@dlghq/dialog-types';
import type { UserRights } from './AdminModalForm';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Text } from '@dlghq/react-l10n';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import ModalBody from '../Modal/ModalBody';
import ModalHeader from '../Modal/ModalHeader';
import ModalClose from '../Modal/ModalClose';
import ModalFooter from '../Modal/ModalFooter';
import AdminModalUser from './AdminModalUser';
import AdminModalForm from './AdminModalForm';
import AdminModalUserList from './AdminModalUserList/AdminModalUserList';
import styles from './AdminModal.css';

type Props = {
  className?: string,
  user: User,
  users: PeerInfo[],
  rights: UserRights,
  onChange: () => any,
  onSubmit: () => any,
  onClose: () => any
}

class AdminModal extends PureComponent {
  props: Props;
  constructor(props: Props) {
    super(props);

    this.state = {
      current: null
    };
  }

  handleClick = (index) => {
    this.setState({ current: index });
  };

  handleCancel = () => {
    this.setState({ current: null });
  };

  handleSubmit =() => {};

  renderContent() {
    if (this.state.current) {
      return (
        <div>
          <ModalBody className={styles.body}>
            <AdminModalUser user={this.props.user} />
            <AdminModalForm
              id="edit_used_rights"
              rights={this.props.rights}
              onChange={this.props.onChange}
              onSubmit={this.props.onSubmit}
            />
          </ModalBody>
          <ModalFooter className={styles.footer}>
            <Button
              onClick={this.handleCancel}
              theme="primary"
              rounded={false}
              className={styles.footerButton}
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleSubmit}
              rounded={false}
              form="edit_used_rights"
              type="submit"
              theme="success"
              className={styles.footerButton}
            >
              Add administrator
            </Button>
          </ModalFooter>
        </div>
      );
    }

    return (
      <ModalBody className={styles.list}>
        <AdminModalUserList
          users={this.props.users}
          onUserClick={this.handleClick}
        />
      </ModalBody>
    );
  }

  render() {
    const className = classNames(styles.container, this.props.className);

    return (
      <Modal className={className} onClose={this.props.onClose}>
        <ModalHeader withBorder>
          {
            this.state.current ? (
              <Icon
                glyph="arrow_back"
                onClick={this.handleCancel}
                className={styles.back}
              />
            ) : null
          }
          <Text id="AdminModal.title" />
          <ModalClose onClick={this.props.onClose} />
        </ModalHeader>
        {this.renderContent()}
      </Modal>

    );
  }
}

export default AdminModal;
