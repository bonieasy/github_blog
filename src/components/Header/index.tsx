import logo from '../../assets/Logo.svg';
import effectR from '../../assets/effect-right.svg';
import effectL from '../../assets/effect-left.svg';
import { Container } from './styles';

export function Header() {
    return(
        <Container>
            <img src={effectL} alt='' />
            <img src={logo} alt='' />
            <img src={effectR} alt='' />
        </Container>
    );
}