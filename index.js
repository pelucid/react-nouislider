var React = require('react');

var nouislider = require('nouislider');

class Nouislider extends React.Component {
  componentDidMount() {
    var slider = this.slider = nouislider.create(React.findDOMNode(this), this.props);

    if (this.props.onUpdate) {
      slider.on('update', this.props.onUpdate);
    }

    if (this.props.onChange) {
      slider.on('change', this.props.onChange);
    }
  }

  componentWillReceiveProps(props) {
    this.slider.updateOptions(props);
    this.slider.set(props.start);
  }

  componentWillUnmount() {
    this.slider.destroy();
  }

  render() {
    return <div/>;
  }
}

Nouislider.propTypes = {
  // http://refreshless.com/nouislider/slider-options/#section-animate
  animate: React.PropTypes.bool,
  // http://refreshless.com/nouislider/slider-options/#section-Connect
  connect: React.PropTypes.oneOfType([
    React.PropTypes.oneOf(['lower', 'upper']),
    React.PropTypes.bool
  ]),
  // http://refreshless.com/nouislider/slider-options/#section-orientation
  direction: React.PropTypes.oneOf(['ltr', 'rtl']),
  // http://refreshless.com/nouislider/slider-options/#section-limit
  limit: React.PropTypes.number,
  // http://refreshless.com/nouislider/slider-options/#section-margin
  margin: React.PropTypes.number,
  // http://refreshless.com/nouislider/slider-options/#section-orientation
  orientation: React.PropTypes.oneOf(['horizontal', 'vertical']),
  // http://refreshless.com/nouislider/slider-values/#section-range
  range: React.PropTypes.object.isRequired,
  // http://refreshless.com/nouislider/slider-options/#section-start
  start: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  // http://refreshless.com/nouislider/slider-options/#section-step
  step: React.PropTypes.number,
  // http://refreshless.com/nouislider/events-callbacks/#section-update
  onUpdate: React.PropTypes.func,
  // http://refreshless.com/nouislider/events-callbacks/#section-change
  onChange: React.PropTypes.func,
  // http://refreshless.com/nouislider/slider-options/#section-tooltips
  tooltips: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object
  ]),
  // http://refreshless.com/nouislider/slider-options/#section-cssPrefix
  cssPrefix: React.PropTypes.string
};

module.exports = Nouislider;
