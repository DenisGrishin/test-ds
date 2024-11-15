import React from 'react'
import { ExtendedTypeSubscription } from '../typeSections'
import ContentSubscribe from './ContentSubscribe.tsx'
import imgDeskrop from '../../../assets/img/section-subscribe/subscribe-img.svg'
import imgTablet from '../../../assets/img/section-subscribe/subscribe-tablet-img.svg'
import imgMobile from '../../../assets/img/section-subscribe/subscribe-mobile-img.svg'
import MailFromContainer from '../../../containers/MailFromContainer.tsx'

interface PropsSubscribeSection {
  subscription: ExtendedTypeSubscription
}

const SubscribeSection: React.FC<PropsSubscribeSection> = ({
  subscription,
}) => {
  const {
    text,
    title,
    'email-placeholder': emailPlaceholder,
    'submit-text': submitText,
    'agreement-text': agreementText,
  } = subscription

  return (
    <div className="section-subscribe">
      <div className="section-subscribe__container">
        <div className="section-subscribe__wrapper decor-subscribe">
          <div className="section-subscribe__content">
            <ContentSubscribe text={text} title={title} />

            <div className="section-subscribe__form">
              <MailFromContainer
                emailPlaceholder={emailPlaceholder}
                submitText={submitText}
                checkboxText={agreementText}
                formClassName="subscribe-form"
                colorBtn="btn-coral-dark"
              />
            </div>
          </div>
          <picture className="section-subscribe__img">
            <source srcSet={imgMobile} media="(max-width: 767.98px)" />

            <source srcSet={imgTablet} media="(max-width: 1279.98px)" />
            <img
              loading="lazy"
              src={imgDeskrop}
              width="416"
              height="518"
              alt="Подпишитесь на нашу рассылку!"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default SubscribeSection
