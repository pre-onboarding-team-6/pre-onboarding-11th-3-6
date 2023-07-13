import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkDown = styled(ReactMarkdown)`
  margin-left: 74px;
  padding: 20px 10px;

  & pre {
    text-wrap: wrap;
  }

  & img,
  code {
    max-width: 100%;
  }
`;

const CodeBlock = styled.code`
  background-color: rgb(246, 248, 250);
  border-radius: 6px;
  padding: 0.2em 0.4em;
  font-size: 85%;
`;

const Post = ({ children }) => (
  <MarkDown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={{
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
          <SyntaxHighlighter style={vs} language={match[1]} PreTag="div">
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        ) : (
          <CodeBlock className={className} {...props}>
            {children}
          </CodeBlock>
        );
      },
    }}>
    {children}
  </MarkDown>
);

export default Post;
