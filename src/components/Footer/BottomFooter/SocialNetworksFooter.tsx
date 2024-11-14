import React from 'react'
import YoutubeIcon from '../../../assets/img/icons/iconSocial/youTube.svg'
import InstagramIcon from '../../../assets/img/icons/iconSocial/insta.svg'
import FaceBookIcon from '../../../assets/img/icons/iconSocial/faceBook.svg'
import LinkedInIcon from '../../../assets/img/icons/iconSocial/linkLind.svg'

interface PropsSocialNetworksFooter {
  youtubeLink: string
  linkedinLink: string
  instagramLink: string
  facebookLink: string
}
const SocialNetworksFooter: React.FC<PropsSocialNetworksFooter> = ({
  youtubeLink,
  linkedinLink,
  instagramLink,
  facebookLink,
}) => {
  const items = [
    { url: instagramLink, icon: InstagramIcon, alt: 'Instagram' },
    { url: facebookLink, icon: FaceBookIcon, alt: 'FaceBook' },
    { url: youtubeLink, icon: YoutubeIcon, alt: 'YouTube' },
    { url: linkedinLink, icon: LinkedInIcon, alt: 'LinkedIn' },
  ]

  return (
    <div className="social-networks">
      {items.map((it) => (
        <a href={it.url} className="social-networks__icon-link">
          <img src={it.icon} alt={`Come to ${it.alt}`} />
        </a>
      ))}
    </div>
  )
}

export default SocialNetworksFooter
