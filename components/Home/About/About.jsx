import React from 'react';
import items from '../../../utils/constants/services-items';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  TextWrapper,
  ServicesWrapper,
  AccordionToggle,
  AccordionContent,
} from './styles';

const About = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleMouseEnter = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      addCursorBorder();
    },
    [selectedItem, addCursorBorder],
  );

  const handleMouseLeave = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      removeCursorBorder();
    },
    [selectedItem, removeCursorBorder],
  );

  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <h2><i>
          An exclusive group, with access to an elite league of creative, technical, and entrepreneurial think tanks. We put together ideas, strategies, and real-world applications to scale businesses and build empowering stories.
          </i></h2>
          <p>
          Hunger to add value and create impact. We are a support network to facilitate members through challenges, disrupt the status quo, explore untapped territories, see blind spots, and align your vision of success with your values.
          </p>
          
        </TextWrapper>
        <ServicesWrapper>
          <h3>What do we love?</h3>
          {items.map(([item, services], itemIndex) => (
            <React.Fragment key={item}>
              <AccordionToggle
                aria-expanded={itemIndex === selectedItem}
                onClick={() => setSelectedItem(itemIndex)}
                onMouseEnter={() => handleMouseEnter(itemIndex)}
                onMouseLeave={() => handleMouseLeave(itemIndex)}
              >
                {item}
              </AccordionToggle>
              <AccordionContent
                animate={{ height: itemIndex === selectedItem ? '100%' : '0' }}
                transition={{ duration: 0.7, ease: [0, 0.7, 0.29, 0.97] }}
              >
                {services.map((service, serviceIndex) => (
                  <p key={`${itemIndex}_${serviceIndex}`}>{service}</p>
                ))}
              </AccordionContent>
            </React.Fragment>
          ))}
        </ServicesWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(About);
