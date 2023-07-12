import Spinner from './Spinner';

const ScrollObserver = ({ observer = null }) => (
  <div ref={observer}>
    <Spinner />
  </div>
);

export default ScrollObserver;
