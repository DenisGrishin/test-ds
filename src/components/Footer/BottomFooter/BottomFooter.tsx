import React from 'react'
import { TypeContacts } from '../typeFooter'
import SocialNetworksFooter from './SocialNetworksFooter.tsx'
import ContactFooter from './ContactFooter.tsx'
import MailFromContainer from '../../../containers/MailFromContainer.tsx'

interface PropsBottomFooter {
  data: TypeContacts
}
const BottomFooter: React.FC<PropsBottomFooter> = ({ data }) => {
  const {
    links,
    facebook,
    instagram,
    linkedin,
    youtube,
    whatsapp,
    phone,
    email,
    subscription,
  } = data

  return (
    <div className="footer__bottom bottom-footre">
      <div className="bottom-footre__contact-block">
        <ContactFooter whatsapp={whatsapp} phone={phone} email={email} />
        <div className="bottom-footre__social">
          <SocialNetworksFooter
            facebookLink={facebook}
            instagramLink={instagram}
            linkedinLink={linkedin}
            youtubeLink={youtube}
          />
        </div>
      </div>
      <MailFromContainer
        emailPlaceholder={subscription['email-placeholder']}
        submitText={subscription['submit-text']}
        classNameBlock="bottom-footre"
        colorBtn="btn-purple"
      />
      <div className="bottom-footre__conditions">
        {links.map((link) => (
          <a href={link.url} className="bottom-footre__link _hover-link">
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default BottomFooter
