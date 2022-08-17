import {Container} from 'react-bootstrap';
import Title from '../title';
import Collection from '../MyTable/collection'

const MainLayout = ({children}) => {
    return (
        <Container>
            <Title/>
            {children}
        </Container>
    )
}

export default MainLayout