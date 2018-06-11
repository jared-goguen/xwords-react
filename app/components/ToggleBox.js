import React from 'react';

class ToggleBox extends React.Component {
  /*
  props
    enabledText: String enabled text
    disabledText: String disabled text
    onChange: function(event) { handles toggle }
    enabled: Boolean enabled
    id: String input id
  */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={ 'toggle-box toggle-box-' + (this.props.enabled ? 'enabled' : 'disabled') } >
        <input 
          type='checkbox' 
          id={ this.props.id }
          onChange={ this.props.onChange }
          checked={ this.props.enabled }
        />
        <label for={ this.props.id }> 
          { this.props.enabled ? this.props.enabledText : this.props.disabledText }
        </label>
      </span>
    );
  }
}

export default ToggleBox;


