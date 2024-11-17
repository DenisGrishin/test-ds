import React from 'react'
import moonIcon from '../../../assets/img/icons/moonIcon.svg'
import sunIcon from '../../../assets/img/icons/sunIcon.svg'

interface PropsSwitchThemaButton {
  toggleTheme: () => void
  isDark: boolean
}

const SwitchThemaButton: React.FC<PropsSwitchThemaButton> = ({
  toggleTheme,
  isDark,
}) => {
  return (
    <button
      onClick={() => {
        toggleTheme()
        localStorage.setItem('theme', isDark ? 'light' : 'dark')
      }}
      type="button"
      className="switch-thema-btn"
    >
      <img
        className="switch-thema-btn__sun"
        src={sunIcon}
        alt="Turn on the daytime theme"
      />
      <img
        src={moonIcon}
        className="switch-thema-btn__moon"
        alt="Turn on the night theme"
      />
    </button>
  )
}

export default SwitchThemaButton
