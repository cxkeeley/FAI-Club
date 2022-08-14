import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:+1.945.216.8127"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +1.945.216.8127
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:info@fai.club"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            info@fai.club
          </a>
        </div>
        <address className="column contact-text">
        57XG+PG, Downtown Dubai<br /> Dubai, United Arab Emirates
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
