import {
  H2,
  Img,
  Content,
  Div,
  Wrap,
  Section,
  Container,
} from 'components/Hero/Hero.styled';
import AddImage from '../../images/hero/desktop/portrait.png';
import Heart from '../../images/hero/desktop/heart.png';

const Home = () => {
  return (
    <Section>
      <Container>
        <Content>
          <H2>Take good care of your small pets</H2>
          <Wrap>
            <Img src={AddImage} alt="Image"></Img>
            <Div>
              <img src={Heart} alt="Lovely heart" width={92} />
            </Div>
          </Wrap>
        </Content>
      </Container>
    </Section>
  );
};
export default Home;
