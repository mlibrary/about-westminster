import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 contact">
            <a href="/" className="block logo-link"><img src="/assets/uwp-logo-a-grey.svg" alt="University of Westminster Press" height="100" width="auto" /></a>
            <small className="mt-3 text-light d-block">London, UK
            </small>          
            <small className="mb-2 text-light d-block"><a href="/contact" className="text-light">Contact Us</a></small>            
          </div>                    
          <div className="col-md-3">
            <div className="partners">
              <span className="westminster"><a id="west" href="https://www.westminster.ac.uk/" aria-label="University of Westminster"><svg aria-labelledby="west" xmlns="http://www.w3.org/2000/svg" width="170.214" height="41.049" viewBox="0 0 170.214 41.049"><path d="M156.269 2.794V.327h-9.599v17.394h2.625v-7.463h5.654V7.791h-5.654V2.794h6.974zm-11.808 6.229c0-4.983-4.04-9.023-9.025-9.023s-9.024 4.04-9.024 9.023a9.025 9.025 0 0 0 18.049 0m-2.625 0a6.4 6.4 0 1 1-12.798.002 6.4 6.4 0 0 1 12.798-.002m-24.082 2.065L123.873.327h-3.031l-4.401 7.771-4.399-7.771H98.486v2.467h4.539v14.927h2.625V2.794h4.537v-.398l4.942 8.692v6.633h2.625v-6.633zm-23.965 6.633h2.625V.327h-2.625v17.394zM83.133 4.676c0-1.509 1.091-2.418 2.486-2.418 1.187 0 2.016.609 2.703 1.797l2.008-1.274C89.367 1.014 87.668 0 85.664 0 82.777 0 80.6 1.98 80.6 4.609c0 5.301 7.841 4.494 7.841 8.108 0 1.634-1.416 3.05-3.159 3.05-1.568 0-2.758-1.259-2.999-2.939l-2.428.624c.578 2.801 2.65 4.597 5.472 4.597 3.167 0 5.648-2.412 5.648-5.51 0-5.333-7.842-4.88-7.842-7.863m-3.71 13.045l-5.624-7.381c2.341-.578 4.03-2.136 4.03-4.848 0-3.663-2.756-5.165-6.385-5.165h-3.588v17.394h2.625v-7.12h.422l5.21 7.12h3.31zm-8.278-9.586h-.664V2.794h.664c1.711 0 4.06.205 4.06 2.671 0 2.465-2.349 2.67-4.06 2.67m-15.544 9.586h9.598v-2.467h-6.973v-4.996h5.654V7.791h-5.654V2.794h6.973V.327h-9.598v17.394zm-9.175.328L54.212.327h-2.844l-5.116 11.586L41.276.327h-2.845l7.573 17.722h.422zm-12.486-.328h2.625V.327H33.94v17.394zm-3.966.328h.421V.327H27.77V11.84L16.581 0h-.421v17.721h2.625V6.157l11.189 11.892zm-16.66-6.806V.327h-2.625v10.916c0 2.401-1.521 4.338-4.032 4.338-2.512 0-4.032-1.937-4.032-4.338V.327H0v10.916c0 3.87 2.864 6.794 6.657 6.794 3.792 0 6.657-2.924 6.657-6.794M39.404 27.436c0-1.327 1-2.114 2.424-2.114 1.187 0 2.015.546 2.704 1.733l2.006-1.273C45.577 24.014 43.876 23 41.873 23c-2.887 0-5.064 1.983-5.064 4.611 0 5.362 7.78 4.653 7.78 8.356 0 1.633-1.356 2.801-3.098 2.801-1.569 0-2.758-1.26-2.999-2.939l-2.428.623c.578 2.802 2.65 4.597 5.472 4.597 3.167 0 5.648-2.412 5.648-5.51 0-5.215-7.78-4.955-7.78-8.103m71.057 0c0-1.327 1-2.114 2.423-2.114 1.188 0 2.014.546 2.705 1.733l2.006-1.273c-.961-1.768-2.662-2.782-4.666-2.782-2.887 0-5.064 1.983-5.064 4.611 0 5.362 7.78 4.653 7.78 8.356 0 1.633-1.356 2.801-3.098 2.801-1.568 0-2.758-1.26-2.998-2.939l-2.43.623c.58 2.802 2.651 4.597 5.473 4.597 3.167 0 5.648-2.412 5.648-5.51 0-5.215-7.779-4.955-7.779-8.103m45.367 1.057c0-3.663-2.819-5.165-6.448-5.165h-3.588v17.393h2.625v-7.119h.421l5.21 7.119h3.309l-5.623-7.381c2.342-.576 4.094-2.135 4.094-4.847m-7.411 2.642v-5.34h.663c1.712 0 4.06.205 4.06 2.67s-2.348 2.67-4.06 2.67h-.663zm-15.212 9.586h9.599v-2.467h-6.974v-4.996h5.654v-2.467h-5.654v-4.996h6.974v-2.467h-9.599v17.393zm-108.513 0h9.598v-2.467h-6.973v-4.996h5.654v-2.467h-5.654v-4.996h6.973v-2.467h-9.598v17.393zm58.895 0h2.625V23.328h-2.625v17.393zm35.671-14.926h4.538v14.926h2.625V25.795h4.536v-2.467h-11.699v2.467zm-70.663 0h4.538v14.926h2.625V25.795h4.537v-2.467h-11.7v2.467zm27.741-2.794l-5.858 12.896-5.858-12.896h-.422l-3.694 17.72h2.662l2.096-9.959 5.005 10.287h.421l5.006-10.287 2.095 9.959h2.662l-3.694-17.72h-.421zM16.095 34.237l-4.67-11.236h-.422l-4.67 11.236-3.559-10.909H0l5.799 17.721h.421l4.994-11.714 4.994 11.714h.421l5.8-17.721h-2.774l-3.56 10.909zm85.893.603L90.799 23.001h-.421v17.72h2.625V29.158l11.188 11.891h.422V23.328h-2.625V34.84zm57.601-11.512V35.68l1.182-1.182v-2.551h1.965v1.948l.592.592.591-.592v-1.948h1.965v1.948l.591.592.591-.592v-1.948h1.966v2.551l1.182 1.182V23.328h-10.625zm3.147 7.434h-1.965v-2.535h1.965v2.535zm0-3.718h-1.965v-2.536h1.965v2.536zm3.148 3.718h-1.965v-2.535h1.965v2.535zm0-3.718h-1.965v-2.536h1.965v2.536zm3.148 3.718h-1.966v-2.535h1.966v2.535zm0-3.718h-1.966v-2.536h1.966v2.536z"/></svg></a></span>
              <span className="alpsp"><a href="https://www.alpsp.org/"><img src="/assets/ALPSP-white.png" alt="Association of Learned and Professional Society Publishers"/></a></span>
              <span className="aeup"><a href="https://www.aeup.eu/"><img src="/assets/aeup-white.png" alt="Association of European University Presses"/></a></span>
            </div>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled second-nav"> 
              <li><a href="https://uwestminsterpress.us10.list-manage.com/subscribe?u=0f53a03f20cc4e59ad95adce8&id=fa62397bae" className="text-light">Subscribe to our Newsletter</a></li>     
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
          <span className=" copyright text-light d-block mb-3 font-weight-normal">© {year}, University of Westminster Press · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="https://fulcrum.org/terms">Terms</a></span>
          </div>
          <div className="col-md-4 text-right">
            <small className="text-white">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
