import React from "react"
import { Link } from "gatsby"
import ('../style/juliescript.scss');


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
        >
          <Link
            to={`/`}
            style={{ color: `#cd6a9d`}}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
        >
          <Link
            to={`/`}
            style={{ color: `#cd6a9d`}}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <br />
          <a href="https://juliescript.dev/rss.xml">RSS Feed</a>
        </footer>
      </div>
    )
  }
}

export default Layout
