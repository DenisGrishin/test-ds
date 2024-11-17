import React from 'react'
import footerLogo from '../../../assets/img/icons/footerLogoIcon.svg'
import rewardIcon from '../../../assets/img/icons/rewardIcon.jpg'

interface PropsTopIconsFooter {}
const TopIconsFooter: React.FC<PropsTopIconsFooter> = () => {
  return (
    <div className="top-footer__icons">
      <a href="#" className=" top-footer__logo-link">
        <img loading="lazy" src={footerLogo} alt="Website logo" />
      </a>
      <img
        loading="lazy"
        className="top-footer__img"
        src={rewardIcon}
        alt="The reward for the site"
      />
    </div>
  )
}

export default TopIconsFooter
