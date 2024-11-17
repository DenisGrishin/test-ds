import React from 'react'
import { TypeMenuFooter } from '../typeFooter'
import NavTopFooter from './NavTopFooter.tsx'
import TopIconsFooter from './TopIconsFooter.tsx'
import MailFromContainer from '../../../containers/MailFromContainer.tsx'
import { TypeSubscription } from '../../Sections/typeSections'
import SocialNetworksFooter from '../SocialNetworksFooter.tsx'
import { TypeUseResize } from '../../../hooks/useResize.tsx'

interface PropsTopFooter {
  menu: TypeMenuFooter[]
  subscription: TypeSubscription
  socialLinks: {
    youtube: string
    facebook: string
    linkedIn: string
    instagram: string
  }
  isSizeWindow: TypeUseResize
}
const TopFooter: React.FC<PropsTopFooter> = ({
  menu,
  subscription,
  socialLinks,
  isSizeWindow,
}) => {
  return (
    <div className="footer__top top-footer">
      <div className="top-footer__subscribe">
        <TopIconsFooter />
        <MailFromContainer
          emailPlaceholder={subscription['email-placeholder']}
          submitText={subscription['submit-text']}
          formClassName="form-top"
          colorBtn="btn-purple"
        />
        <div className="top-footer__social">
          <SocialNetworksFooter
            socialLinks={{
              youtubeLink: socialLinks.youtube,
              facebookLink: socialLinks.facebook,
              linkedInLink: socialLinks.linkedIn,
              instagramLink: socialLinks.instagram,
            }}
          />
        </div>
      </div>

      <NavTopFooter isSizeWindow={isSizeWindow} menu={menu} />
    </div>
  )
}

export default TopFooter
