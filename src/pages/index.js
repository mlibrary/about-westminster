import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link} from "gatsby"

import BookList from "../components/books/bookList"
import JournalList from "../components/journals/journalList"
import Tagline from "../components/tagline"
import NewsList from "../components/news/newsList"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
        buttonLabel
        buttonUrl
      }
    }
  }
  books: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "book" } }
    },
    sort: {
      fields: frontmatter___orderOnPage,
      order: ASC
    }
  ) {
    edges {
      node {
        fields {
          cover
        }
        id
        frontmatter {
          title
          author
          description
          readLink
          orderOnPage
        }
      }
    }
  }
  journals: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "journal" } }
    },
    sort: {
      fields: frontmatter___orderOnPage,
      order: ASC
    }
  ) {
    edges {
      node {
        fields {
          cover
        }
        id
        frontmatter {
          title
          author
          description
          readLink
          orderOnPage
        }
      }
    }
  }
    news: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "news" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    },
    limit: 3
  ) {
    edges {
      node {
        id
        fields{
          slug
        }
        html
        frontmatter {
          title
          summary
          date(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  const tagline = data.home.frontmatter.taglineSection
  const books = data.books.edges
  const journals = data.journals.edges
  const news = data.news.edges

  return (
    <Layout>
      <SEO title="Home" />      
      <section className="books-container container">
          <BookList books={books} />
          <div className="row mt-4">
            <div className="col-md-12">
              <p className="text-right">
                <a href="https://fulcrum.org/westminster">Browse our books</a>
              </p>
            </div>
          </div>
        </section>
        <section className="books-container container">
          <JournalList journals={journals} />
          <div className="row mt-4">
            <div className="col-md-12">
              <p className="text-right">
                <a href="/journals">Browse our journals</a>
              </p>
            </div>
          </div>
        </section>
        <section className="tagline-container">
          <div className="container">
            <div className="row">
              <div className="tagline col-md-10">                
                <Tagline text={tagline.text} />
              </div>
              <div className="cta-tagline col-md-2">
                <a className="btn btn-lg btn-primary" href={tagline.buttonUrl}>{tagline.buttonLabel}</a>
              </div>
            </div>
          </div>
        </section>
        <section className="news-events-container container">
          <div className="row">
            <div className="news-container col-md-12">
            <h2>News and Events</h2>
              <NewsList news={news} />
              <div className="row mt-4">
                <div className="col-md-12">
                  <p className="text-right">
                    <Link to="/news" className="btn btn-secondary">Read all News</Link>
                  </p>
                </div>
              </div>
            </div>            
          </div>
        </section>
    </Layout>
  )
}

export default IndexPage