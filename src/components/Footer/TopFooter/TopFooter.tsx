import React from 'react'

interface PropsTopFooter {}
const TopFooter: React.FC<PropsTopFooter> = () => {
  return (
    <div className="footer__top top-footer">
      <div className="top-footer__subscribe">
        <div className="top-footer__icons">
          <a href="#" className=" top-footer__logo-link">
            <img
              loading="lazy"
              src="../img/icons/footerLogoIcon.svg"
              alt="Лого сайта"
            />
          </a>
          <img
            loading="lazy"
            className="top-footer__img"
            src="../img/icons/rewardIcon.jpg"
            alt="Награда за сайт"
          />
        </div>

        {/* <form className="top-footer__form-subcribe  subcribe-form">
          <div className="subcribe-form__input block-input">
            <input
              className=" block-input__email-input"
              type="text"
              placeholder="Su correo electrónico"
              required
              name="email"
            />
          </div>
          <button className="subcribe-form__submit btn-purple" type="submit">
            Suscribirse al boletín
          </button>
        </form> */}
        <div className="top-footer__social social-networks">
          <a href="#" className="social-networks__icon-link">
            <img
              src="../img/icons/iconSocial/insta.svg"
              alt="Прийти в Instagram"
            />
          </a>
          <a href="#" className="social-networks__icon-link">
            <img
              src="../img/icons/iconSocial/faceBook.svg"
              alt="Прийти в FaceBook"
            />
          </a>
          <a href="#" className="social-networks__icon-link">
            <img
              src="../img/icons/iconSocial/youTube.svg"
              alt="Прийти в YouTube"
            />
          </a>
          <a href="#" className="social-networks__icon-link">
            <img
              src="../img/icons/iconSocial/linkLind.svg"
              alt="Прийти в LinkedIn"
            />
          </a>
        </div>
      </div>

      <div className="top-footer__nav nav-footer">
        <nav data-spollers="767.98,max" className="nav-footer__wrapper">
          <div className="nav-footer__spoller">
            <button type="button" data-spoller className="nav-footer__title">
              CURSOS
            </button>
            <ul className=" nav-footer__list">
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Diseño
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Programación
                  <br />
                  & Data
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Gaming
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Marketing
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Software
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-footer__spoller">
            <button type="button" data-spoller className="nav-footer__title">
              WEBINARS
            </button>
            <ul className=" nav-footer__list">
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Próximamente
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Anteriores
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-footer__spoller">
            <button type="button" data-spoller className="nav-footer__title">
              SOBRE
            </button>
            <ul className=" nav-footer__list">
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Sobre nostros
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Centro de carreras
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Vacantes
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-footer__spoller">
            <button type="button" data-spoller className="nav-footer__title">
              BLOG
            </button>
            <ul className=" nav-footer__list">
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Diseño
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Programación
                  <br />
                  & Data
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Gaming
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Marketing
                </a>
              </li>
              <li className="nav-footer__item">
                <a href="#" className="nav-footer__link _hover-link">
                  Software
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default TopFooter
