
import React from 'react';
import TimePicker from './TimePicker';
import timeHelper from '../utils/time';
import ICONS from '../utils/icons';
import { func } from 'prop-types';

class TimePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    const { defaultTime, meridiem, focused, showTimezone, timezone, values } = props;
    let hour = '';
    let minute = '';
    if (!defaultTime) {
      [hour, minute] = timeHelper.current().split(/:/);
    } else {
      [hour, minute] = defaultTime.split(/:/);
    }

    this.state = {
      hour,
      minute,
      meridiem,
      focused,
      timezone,
      showTimezone,
      values
    };

    this.onFocusChange = this.onFocusChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.handleFocusedChange = this.handleFocusedChange.bind(this);
  }

  onTimeChange(options) {
    const {
      hour,
      minute,
      meridiem
    } = options;
    this.setState({ hour, minute, meridiem });
    console.log(this.props.values)
    this.props.setValues({
      ...this.props.values,
      time: `${hour}:${minute}`
    })
  }

  onFocusChange(focused) {
    console.log(`onFocusChange: ${focused}`);
    this.setState({ focused });
  }

  handleFocusedChange() {
    const { focused } = this.state;
    this.setState({ focused: !focused });
  }

  get basicTrigger() {
    const { hour, minute } = this.state;
    return (
      <div
        onClick={this.handleFocusedChange}
        className="time_picker_trigger"
      >
        <div>
          Click to open panel<br />
          {hour}:{minute}
        </div>
      </div>
    );
  }

  get customTrigger() {
    return (
      <div
        onClick={this.handleFocusedChange}
        className="time_picker_trigger"
      >
        {ICONS.time}
      </div>
    );
  }

  get trigger() {
    const { customTriggerId } = this.props;
    const triggers = {
      0: (<div />),
      1: this.basicTrigger,
      2: this.customTrigger
    };
    return triggers[customTriggerId] || null;
  }

  render() {
    const {
      hour,
      minute,
      focused,
      meridiem,
      timezone,
      showTimezone,
    } = this.state;

    return (
      <div className="time_picker_wrapper">
        <TimePicker
          trigger={this.trigger}
          {...this.props}
          focused={focused}
          meridiem={meridiem}
          values={this.props.values}
          setValues={this.props.setValues}
          timezone={timezone}
          onFocusChange={this.onFocusChange}
          onTimeChange={this.onTimeChange}
          showTimezone={showTimezone}
          time={hour && minute ? `${hour}:${minute}` : null}
        />
      </div>
    );
  }
}

TimePickerWrapper.defaultProps = {
  customTriggerId: null,
  defaultTime: null,
  focused: false,
  meridiem: null,
  values: null,
  showTimezone: false,
  setValues: func
};

export default TimePickerWrapper;
