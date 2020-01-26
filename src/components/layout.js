import React, { Fragment } from "react"
import { Link } from "gatsby"
import "../style/juliescript.scss"
import "./layout.scss"
import Menu from "./menu"
import Bio from "./bio"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Fragment>
          <h1>
            <Link to={`/`}>{title}</Link>
          </h1>
          <small>Blog personal de Julieta Campos</small>
        </Fragment>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      )
    }
    return (
      <div className="main-container">
        <Menu></Menu>
        <header className="main-header">{header}</header>
        <main>{children}</main>
        <footer className="footer">
          <Bio></Bio>
          <div className="footer__information">
            <p>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a target="_blank" href="https://www.gatsbyjs.org">
                Gatsby
              </a>
            </p>

            <p>
              <a href="https://juliescript.dev/rss.xml">RSS Feed</a>
            </p>
            <p>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
                target="_blank"
              >
                Pixel perfect
              </a>{" "}
              from{" "}
              <a
                target="_blank"
                href="https://www.flaticon.com/"
                title="Flaticon"
              >
                {" "}
                www.flaticon.com
              </a>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
