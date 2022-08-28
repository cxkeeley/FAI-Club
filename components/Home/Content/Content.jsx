import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text, Text2 } from './styles';

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
            <b><i>Fuel The Entrepreneurial Spark Within You.</i></b>
            <br />
            <br />
          </Text>
          <Text2>
            We don’t think like the common man. And that’s where our strength lies. <br /> <br />
            We discuss, design, develop, and dominate. <br /><br />
            Our expertise comes from our collective experience as business creators and innovators. We know that sustained success is the product of like-minded individuals coming together in creativity, consciousness, and clout.
          </Text2>
          <Text>
            <br />
            <b><i>We Breed Brilliance.</i></b>
            
          </Text>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
