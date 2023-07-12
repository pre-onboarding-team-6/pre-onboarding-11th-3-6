import Spinner from './Spinner';

const ScrollObserver = ({ hasNextPage = true, observer = null }) => (
  <div ref={observer}>{hasNextPage && <Spinner />}</div>
);

export default ScrollObserver;
