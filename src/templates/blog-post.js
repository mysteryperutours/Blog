import React from 'react';

import BlogPostTemplate from './blog-post-template';
import { HTMLContent } from '../components/Content';


class BlogPost extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {markdownRemark: post} = this.props.data;
    return (
      <div className='blog-post'>
        <BlogPostTemplate
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          content={post.html}
          contentComponent={HTMLContent}
        />
      </div>
    )
  }
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
