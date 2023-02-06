import {
  H1,
  Section,
  Img,
  Content,
  Div,
  Wrap,
} from 'components/Hero/Hero.styled';
import AddImage from '../../images/hero/desktop/portrait.png';
import Heart from '../../images/hero/desktop/heart.png';

const Home = () => {
  return (
    <Section>
      <Content>
        <H1>Take good care of your small pets</H1>
        <Wrap>
          <Img src={AddImage} alt="Image"></Img>
          <Div>
            <img src={Heart} alt="Lovely heart" width={92} />
          </Div>
        </Wrap>
      </Content>
    </Section>
  );
};
export default Home;
