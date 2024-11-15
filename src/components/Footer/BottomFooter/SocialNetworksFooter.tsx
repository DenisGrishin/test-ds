import React from 'react'
import YoutubeIcon from '../../../assets/img/icons/iconSocial/youTube.svg'
import InstagramIcon from '../../../assets/img/icons/iconSocial/insta.svg'
import FaceBookIcon from '../../../assets/img/icons/iconSocial/faceBook.svg'
import LinkedInIcon from '../../../assets/img/icons/iconSocial/linkLind.svg'

interface PropsSocialNetworksFooter {
  socialLinks: {
    youtubeLink: string
    facebookLink: string
    linkedInLink: string
    instagramLink: string
  }
}
const SocialNetworksFooter: React.FC<PropsSocialNetworksFooter> = ({
  socialLinks,
}) => {
  const items = [
    { url: socialLinks.instagramLink, icon: InstagramIcon, alt: 'Instagram' },
    { url: socialLinks.facebookLink, icon: FaceBookIcon, alt: 'FaceBook' },
    { url: socialLinks.youtubeLink, icon: YoutubeIcon, alt: 'YouTube' },
    { url: socialLinks.linkedInLink, icon: LinkedInIcon, alt: 'LinkedIn' },
  ]

  return (
    <div className="social-networks">
      {items.map((it) => (
        <a
          href={it.url}
          key={Math.random().toString(36).slice(2, 9)}
          className="social-networks__icon-link"
        >
          <img src={it.icon} alt={`Come to ${it.alt}`} />
        </a>
      ))}
    </div>
  )
}

export default SocialNetworksFooter
