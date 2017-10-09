/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { SelectorState } from '../../entities';
import type { ChatMember } from '../ActivityListMembers/types';
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
import AdminModalUserSearch from './AdminModalUserSearch/AdminModalUserSearch';
import styles from './AdminModal.css';

type Props = {
  className?: string,
  selector: SelectorState<ChatMember>,
  rights: UserRights,
  onChange: (selector: SelectorState<ChatMember>) => any,
  onRightsChange: (rights: UserRights) => any,
  onSubmit: (rights: UserRights) => any,
  onOwnershipTranfser: (user: ?ChatMember) => mixed,
  onClose: () => any
}

type State = {
  current: ?ChatMember
};

class AdminModal extends PureComponent {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      current: null
    };
  }

  handleSelect = (user: ChatMember) => {
    this.setState({ current: user });
  };

  handleCancel = () => {
    this.setState({ current: null });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.props.rights);
    this.setState({ current: null });
  };

  handleChange = (selector: SelectorState<ChatMember>) => {
    this.props.onChange(selector);
  };

  handleOwnershipTranfser = () => {
    this.props.onOwnershipTranfser(this.state.current);
  };

  renderContent() {
    if (this.state.current) {
      return (
        <div>
          <ModalBody className={styles.body}>
            <AdminModalUser user={this.state.current} />
            <AdminModalForm
              id="edit_used_rights"
              rights={this.props.rights}
              onChange={this.props.onRightsChange}
              onSubmit={this.props.onSubmit}
              onOwnershipTranfser={this.handleOwnershipTranfser}
            />
          </ModalBody>
          <ModalFooter className={styles.footer}>
            <Button
              onClick={this.handleSubmit}
              rounded={false}
              form="edit_used_rights"
              type="submit"
              theme="success"
              className={styles.footerButton}
            >
              <Text id="AdminModal.add_admin" />
            </Button>
          </ModalFooter>
        </div>
      );
    }

    return (
      <ModalBody className={styles.body}>
        <AdminModalUserSearch
          selector={this.props.selector}
          onChange={this.handleChange}
        />
        <div className={styles.list}>
          <AdminModalUserList
            selector={this.props.selector}
            onSelect={this.handleSelect}
            onChange={this.handleChange}
          />
        </div>
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
