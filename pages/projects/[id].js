// the waterfall
import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import Container from '../../components/Container'
import Image from 'next/image'
import Link from 'next/link'

import {getAllProjectSlugs, getSingleProjectData} from '../../lib/api'

export async function getStaticPaths(){
    const paths = await getAllProjectSlugs();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params}) {
    const projectData = await getSingleProjectData(params.id);
    return {
        props : {
            projectData
        }
    }
}


const SingleProjectPage = ({projectData}) => {
    //const { title, featuredImage, content } = projectData;
    const { title, image, content } = projectData.matchingProject;
    return <Layout>
        <Container>
            {/*featuredImage &&
                <Image
                src={featuredImage.node.sourceUrl}
                alt={featuredImage.node.altText}
                width={featuredImage.node.mediaDetails.width}
                height={featuredImage.node.mediaDetails.height}
                />
            */}
            {image &&
                <Image
                src={`/images/${image}`}
                alt={title}
                width={1500}
                height={1000}
                layout="responsive"
                />
            }

            <Heading level="1">{title}</Heading>
            <div dangerouslySetInnerHTML={{__html: content}}/>
            <Paragraph>
                <Link href="/projects">
                    <a>
                    back to all projects  
                    </a>
                </Link>
            </Paragraph>
        </Container>
    </Layout>
}

export default SingleProjectPage;