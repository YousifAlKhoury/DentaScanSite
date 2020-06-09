import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"
import Img from 'gatsby-image'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeHolderImage: file(relativePath: { eq: "dentaScanTextLogo.png"}) {
        childImageSharp{
          fixed(width: 200){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  
  return (
    <header>
      <Link to = "/"><Img className = {headerStyles.image} fixed={data.placeHolderImage.childImageSharp.fixed}></Img></Link>
      <nav className= {headerStyles.band}>
        <ul className= {headerStyles.navList}>
          <li>
            <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to = './'>
              Home
            </Link>
          </li>
          <li>
            <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} Link to = './about'>
              About DentaScan
            </Link>
          </li>
          <li>
            <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} Link to = './contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
