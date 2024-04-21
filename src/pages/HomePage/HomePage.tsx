import {
  ContactIcon,
  HomeContainer,
  IconContainer,
  ImageContainer,
  ImgGirlSvg,
  ImgHomePage,
  InfoContainer,
  Lang,
  LinkStart,
  QuestionIcon,
  StartContainer,
  Text,
  Title,
} from './HomePage.styled';
import Girl from '../../assets/image/imagehero.png';
import block from '../../assets/image/block.png';
import Contact from '../../assets/icons/block-contact (1).svg';
import Icon from '../../assets/icons/Rectangle 34.svg';

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
          <LinkStart to="/psychologists">
            Get started{' '}
            <span style={{ paddingLeft: '10px', fontSize: '20px' }}>↗</span>
          </LinkStart>
        </StartContainer>
        <ImageContainer>
          <ImgGirlSvg src={Girl} alt="Girl" />
          <ImgHomePage src={block} alt="block" />
          <QuestionIcon src={Icon} alt="❓" />
          <IconContainer>
            <ContactIcon src={Contact} alt="Contact icon" />?
          </IconContainer>
        </ImageContainer>
      </InfoContainer>
    </HomeContainer>
  );
};

export default Home;
