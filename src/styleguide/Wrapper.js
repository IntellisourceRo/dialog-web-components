import React, { Component, PropTypes } from 'react';
import { Provider } from '@dlghq/react-l10n';
import classNames from 'classnames';
import messages from './devMessages';
import Select from '../components/Select/Select';
import Switcher from '../components/Switcher/Switcher';
import styles from './Wrapper.css';
import createSequence from '../utils/createSequence';

const seq = createSequence();

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      locale: 'en',
      isTransparent: false
    };

    this.id = 'background_toggler_' + seq.next();
  }

  handleLocaleChange = (locale) => this.setState({ locale });
  handleBackgroundToggle = (isTransparent) => this.setState({ isTransparent });

  renderLocaleSelect() {
    const options = [{ value: 'en', title: 'English' }, { value: 'ru', title: 'Russian' }];

    return (
      <div className={styles.selectWrapper}>
        <Select
          value={this.state.locale}
          options={options}
          size="small"
          className={styles.select}
          onChange={this.handleLocaleChange}
        />
      </div>
    );
  }

  renderBackgroundToggle() {
    const { isTransparent } = this.state;

    return (
      <Switcher
        id={this.id}
        name="toggle"
        className={styles.toggle}
        value={isTransparent}
        onChange={this.handleBackgroundToggle}
      >
        Transparent background
      </Switcher>
    );
  }

  render() {
    const wrapperClassName = classNames(styles.wrapper, this.state.isTransparent ? styles.transparent : styles.white);

    return (
      <Provider
        locale={this.state.locale}
        messages={messages}
        globalValues={{ appName: 'dialog' }}
      >
        <div className={styles.container}>
          <header className={styles.header}>
            {this.renderBackgroundToggle()}
            <div className={styles.spacer} />
            {this.renderLocaleSelect()}
          </header>
          <div className={wrapperClassName}>
            {this.props.children}
          </div>
        </div>
      </Provider>
    );
  }
}

export default Wrapper;
