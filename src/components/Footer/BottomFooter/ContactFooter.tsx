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
          {whatsapp.replace(/^(\d{2})(\d{2})(\d{4})(\d{4})$/, '+$1 $2 $3-$4')}
        </a>
      </div>
      <div className="bottom-footre__tel">
        <div className="bottom-footre__label">Telefone</div>
        <a href={`tel:${phone}`} className="_hover-link">
          {phone.replace(/^(\d{2})(\d{2})(\d{4})(\d{4})$/, '+$1 $2 $3-$4')}
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
