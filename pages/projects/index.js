import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from '../../components/Paragraph'

import { getProjects } from '../../lib/api'

export async function getStaticProps(){
    const projects = await getProjects();
    return {
        props : {
            projects
        }
    }
}

const ProjectsPage = ({ projects }) => {

    return <Layout>
        <Container>
            <Heading level="1">Projects</Heading>
            <Row>
                {projects.map((project, index) => {
                    const{title, slug, featuredImage} = project.node;

                    return <Col 
                        key={index}
                        xs="6"
                        xm="4"
                        md="3"
                    >
                        {featuredImage && 
                            <Image
                                src={featuredImage.node.sourceUrl}
                                alt={featuredImage.node.altText}
                                width={featuredImage.node.mediaDetails.width}
                                height={featuredImage.node.mediaDetails.height}
                            />
                        }
                        
                        <Heading level="3">
                            {title}
                        </Heading>
                        <Paragraph>
                            <Link href={`/projects/${slug}`}>
                                <a>
                                    view project
                                </a>
                            </Link>
                        </Paragraph>
                    </Col>
                })}
            </Row>
        </Container>
    </Layout>
}
export default ProjectsPage;