import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

const MarkDown = styled(ReactMarkdown)`
  margin-left: 74px;
  padding: 20px 10px;
`;

const Post = ({ children }) => <MarkDown remarkPlugins={[remarkGfm]}>{children}</MarkDown>;

export default Post;
