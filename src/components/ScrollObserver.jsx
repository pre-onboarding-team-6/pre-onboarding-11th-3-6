import Spinner from './Spinner';

const ScrollObserver = ({ observer = null, isLoading = true }) => <div ref={observer}>{isLoading && <Spinner />}</div>;

export default ScrollObserver;
