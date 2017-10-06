/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */
import type { ProviderContext } from '@dlghq/react-l10n';
import React, { PureComponent } from 'react';
import { LocalizationContextType } from '@dlghq/react-l10n';
import styles from './AdminModalUserSearch.css';

type Props = {
  value: string,
  onChange: (value: string) => mixed
}

type Context = ProviderContext;

class AdminModalUserSearch extends PureComponent {
  props: Props;
  context: Context;

  static contextTypes = {
    l10n: LocalizationContextType
  };

  handleChange = (event: SyntheticInputEvent) => {
    this.props.onChange(event.target.value);
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
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AdminModalUserSearch;
