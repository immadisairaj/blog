import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import { useBlogPost } from '@docusaurus/theme-common/internal'
import BlogPostItem from '@theme-original/BlogPostItem'

export default function BlogPostItemWrapper(props) {
  const { metadata } = useBlogPost()
  const { frontMatter, title } = metadata
  const { comments = false, slug } = frontMatter

  return (
    <>
      <BlogPostItem {...props} />
      {comments && (
        <div class="license-wrapper
        d-flex justify-content-between align-items-center pt-2 pb-2">
          This post is licensed under
          &nbsp;
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
          &nbsp;
          by the author.
        </div>
      )}
      {comments && (
        <DiscussionEmbed
          shortname='immadisairaj-github-io'
          config={{
            url: 'https://immadisairaj.github.io/blog/'+slug,
            identifier: slug,
            title,
            language: 'en_US',
          }}
        />
      )}
    </>
  )
}