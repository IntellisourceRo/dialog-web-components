/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ChatMember } from '../../ActivityListMembers/types';
import type { SelectorState } from '../../../entities';
import React, { PureComponent } from 'react';
import styles from './AdminModalUserList.css';
import { AutoSizer } from 'react-virtualized';
import AdminModalUserListItem from './AdminModalUserListItem';
import SelectList from '../../SelectList/SelectList';

export type Props = {
  selector: SelectorState<ChatMember>,
  onChange: (selector: SelectorState<ChatMember>) => mixed,
  onSelect: (user: ChatMember) => mixed
};

class AdminModalUserList extends PureComponent {
  props: Props;

  handleChange = (selector: SelectorState<ChatMember>) => {
    this.props.onChange(selector);
  };

  handleUserSelect = (user: ChatMember) => {
    this.props.onSelect(user);
  };

  renderRow = ({ item, hovered }: $FlowIssue): React.Element<any> => {
    return (
      <AdminModalUserListItem
        hovered={hovered}
        onClick={this.handleUserSelect}
        user={item}
      />
    );
  };

  render() {
    return (
      <AutoSizer>
        {({ width }) => (
          <SelectList
            className={styles.container}
            width={width}
            itemHeight={51}
            itemVisibleCount={10}
            selector={this.props.selector}
            onChange={this.handleChange}
            renderItem={this.renderRow}
          />
        )}
      </AutoSizer>
    );
  }
}

export default AdminModalUserList;
