import React from 'react'
import { TypeContacts } from '../typeFooter'
import SocialNetworksFooter from '../SocialNetworksFooter.tsx'
import MailFromContainer from '../../../containers/MailFromContainer.tsx'
import ContactFooter from './ContactFooter.tsx'

interface PropsBottomFooter {
  contacts: TypeContacts
}
const BottomFooter: React.FC<PropsBottomFooter> = ({ contacts }) => {
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
  } = contacts

  return (
    <div className="footer__bottom bottom-footre">
      <div className="bottom-footre__contact-block">
        <ContactFooter whatsapp={whatsapp} phone={phone} email={email} />
        <div className="bottom-footre__social">
          <SocialNetworksFooter
            socialLinks={{
              youtubeLink: youtube,
              facebookLink: facebook,
              linkedInLink: linkedin,
              instagramLink: instagram,
            }}
          />
        </div>
      </div>
      {/* это форма появляется на мобилке */}
      <MailFromContainer
        emailPlaceholder={subscription['email-placeholder']}
        submitText={subscription['submit-text']}
        formClassName="mobile-form-bottom"
        colorBtn="btn-purple"
      />
      <div className="bottom-footre__conditions">
        {links.map((link, indx) => (
          <a
            href={link.url}
            key={indx}
            className="bottom-footre__link _hover-link"
          >
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default BottomFooter
