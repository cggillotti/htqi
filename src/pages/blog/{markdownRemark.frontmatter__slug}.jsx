import * as React from "react"
import { graphql } from "gatsby"
import { useStaticQuery } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'
import Link from 'gatsby-plugin-transition-link/AniLink'

const interestingExitAnimation = (exit, node) => {
  // do some animation here
  console.log(exit, node)
}

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id:{eq: $id}) {
      html
      frontmatter {
        title
      }
    }
  }`
