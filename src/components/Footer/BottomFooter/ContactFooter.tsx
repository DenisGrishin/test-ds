import React from 'react'

interface PropsContactFooter {
  whatsapp: string
  phone: string
  email: string
}
const ContactFooter: React.FC<PropsContactFooter> = ({
  whatsapp,
  phone,
  email,
}) => {
  return (
    <div className="bottom-footre__tel-email">
      <div className="bottom-footre__tel">
        <div className="bottom-footre__label">WhatsApp</div>
        <a
          href={`https://api.whatsapp.com/send?${whatsapp}`}
          className="_hover-link"
        >
          {whatsapp}
        </a>
      </div>
      <div className="bottom-footre__tel">
        <div className="bottom-footre__label">Telefone</div>
        <a href={`tel:${phone}`} className="_hover-link">
          {phone}
        </a>
      </div>
      <div className="bottom-footre__email">
        <div className="bottom-footre__label">email</div>
        <a href={`mailto:${email}`} className="_hover-link">
          {email}
        </a>
      </div>
    </div>
  )
}
export default ContactFooter
