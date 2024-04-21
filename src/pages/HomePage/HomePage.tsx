import {
  HomeContainer,
  ImageContainer,
  ImgGirlSvg,
  InfoContainer,
  Lang,
  LinkStart,
  StartContainer,
  Text,
  Title,
} from './HomePage.styled';
import Girl from '../../assets/image/imagehero.png';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <InfoContainer>
        <StartContainer>
          <Title>
            The road to the <Lang>depths</Lang> of the human soul
          </Title>
          <Text>
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </Text>
          <LinkStart to="/psychologists">Get started</LinkStart>
        </StartContainer>
        <ImageContainer>
          <ImgGirlSvg src={Girl} alt="Girl" />
        </ImageContainer>
      </InfoContainer>
     
    </HomeContainer>
  );
};

export default Home;
