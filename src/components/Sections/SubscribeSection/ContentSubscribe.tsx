import React from 'react'

interface PropsContentSubscribe {
  text: string
  title: string
}

const ContentSubscribe: React.FC<PropsContentSubscribe> = ({ text, title }) => {
  return (
    <>
      <h2 className="section-subscribe__title big-title">{title}</h2>
      <p className="section-subscribe__text">{text}</p>
    </>
  )
}

export default ContentSubscribe
