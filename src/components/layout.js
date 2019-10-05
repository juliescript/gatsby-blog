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
        <hr />
        <footer>
          <p>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a></p>

          <p><a href="https://juliescript.dev/rss.xml">RSS Feed</a></p>
        </footer>
      </div>
    )
  }
}

export default Layout
