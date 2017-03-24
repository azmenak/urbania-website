import ReactDOM from 'react-dom';
import { lifecycle } from 'recompose';

export default lifecycle({
  componentDidMount() {
    this.videoEl = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
  },
  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      setImmediate(() => {
        this.videoEl.load();
        this.videoEl.play();
      });
    }
  },
})('video');
