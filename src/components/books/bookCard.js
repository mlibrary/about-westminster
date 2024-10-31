import React from "react"
// import Img from "gatsby-image"

const Book = ({cover, book}) => {
  const {
    title,
    author,
    readLink,
    description,
  } = book

  return (
    <div className="card book-card">
      <div className="row">
        <div className="col-md-4">
          <img src={cover} alt={`cover of ${title}`} className="card-img m-3" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle text-muted h6">{author}</p>
            <p className="card-text">{description}</p>
            <a className="card-link btn btn-secondary btn-lg" role="button" href={readLink}>Read free online</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Book
