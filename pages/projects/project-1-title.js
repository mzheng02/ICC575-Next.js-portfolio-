import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph';
import Image from 'next/image'
import Container from '../../components/Container';


const ProjectOnePage = () => {
    return <Layout>
        <Container>
            <Image
                src="/images/01.jpg"
                alt="Rocky"
                width={1500}
                height={1000}
                layout="responsive"
            />
            <Heading level="1">
                Project1 title
            </Heading>
            <Paragraph>
                This is a XXX
            </Paragraph>
        </Container>
    </Layout>
}

export default ProjectOnePage;
