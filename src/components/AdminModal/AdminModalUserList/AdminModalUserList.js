/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ListRowProps } from "../../SelectList/types";
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Text } from '@dlghq/react-l10n';
import styles from './AdminModalUserList.css';
import { List, AutoSizer } from 'react-virtualized';
import AdminModalUserListItem from './AdminModalUserListItem';

export type Props = {
  onUserClick: (index: number) => mixed
};

class AdminModalUserList extends PureComponent {
  props: Props;

  handleClick = (index) => {
    this.props.onUserClick(index);
  };

  renderRow = ({ index, key, style }: ListRowProps): React.Element<any> => {
    return (
      <AdminModalUserListItem
        key={key}
        style={style}
        onClick={this.handleClick}
        user={this.props.users[index]}
      />
    );
  };

  render() {
    console.debug('AdminModalUserList', this.props);

    return (
      <AutoSizer>
        {({ width, height }) => (
          <List
            className={styles.container}
            width={width}
            height={height}
            rowCount={this.props.users.length}
            rowHeight={50}
            rowRenderer={this.renderRow}
          />
        )}
      </AutoSizer>
    );
  }
}

export default AdminModalUserList;
