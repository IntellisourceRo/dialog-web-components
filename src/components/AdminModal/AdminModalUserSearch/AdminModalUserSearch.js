/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { SelectorState } from '../../../entities';
import type { ChatMember } from '../../ActivityListMembers/types';
import type { ProviderContext } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { LocalizationContextType } from '@dlghq/react-l10n';
import styles from './AdminModalUserSearch.css';

type Props = {
  selector: SelectorState<ChatMember>,
  onChange: (selector: SelectorState<ChatMember>) => void
}

type Context = ProviderContext;

class AdminModalUserSearch extends PureComponent {
  props: Props;
  context: Context;

  static contextTypes = {
    l10n: LocalizationContextType
  };

  handleChange = (event: SyntheticInputEvent) => {
    this.props.onChange(
      this.props.selector.setQuery(event.target.value)
    );
  };

  handleKeyDown = (event: SyntheticKeyboardEvent): void => {
    this.props.onChange(
      this.props.selector.handleKeyboardEvent(event)
    );
  };

  getPlaceholder = (): string => {
    return this.context.l10n.formatText('AdminModalUserSearch.placeholder');
  };

  render() {
    return (
      <div className={styles.container}>
        <input
          className={styles.input}
          placeholder={this.getPlaceholder()}
          value={this.props.selector.getQuery()}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AdminModalUserSearch;
