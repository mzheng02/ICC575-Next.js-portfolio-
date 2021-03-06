import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Row from '../components/Row'
import Col from '../components/Col'

import Layout from '../components/Layout'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import ProjectsByGenre from '../components/ProjectsByGenre'
import Container from '../components/Container'
import { getProjects } from '../lib/api'

export async function getStaticProps() {
    const items = await getProjects();

    return {
      props: {
        items
      }
    }
}

export default function Home({items}) {
  return (
    <Layout>
      <Head>
        <title>Min Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Heading level="2">Hard coded projects</Heading>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Image
                  src="/images/01.jpg"
                  alt="Rocky"
                  width={1500}
                  height={1000}
                  layout="responsive"
              />
            <Heading level="3"> Project 1 title</Heading>
            <Paragraph>
              <Link href="/projects/project-1-title">
                <a>
                  View Project
                </a>
              </Link>
            </Paragraph>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Image
                  src="/images/02.jpg"
                  alt="Rocky"
                  width={1500}
                  height={1000}
                  layout="responsive"
              />
            <Heading level="3"> Project 2 title</Heading>
            <Paragraph>
              <Link href="/projects/project-2-title">
                <a>
                  View Project
                </a>
              </Link>
            </Paragraph>
          </Col>          
          <Col xs="12" sm="6" md="4">
            <Image
                  src="/images/03.jpg"
                  alt="Rocky"
                  width={1500}
                  height={1000}
                  layout="responsive"
              />
            <Heading level="3"> Project 3 title</Heading>
            <Paragraph>
              <Link href="/projects/project-3-title">
                <a>
                  View Project
                </a>
              </Link>
            </Paragraph>
          </Col>
        </Row>

        <Heading level="2"> Data Array Projects</Heading>
        <Row>

        {items.map((item, index) => {
          const {title, image, slug} = item;
          return<Col key={index} xs="12" sm="6" md="4">
            <Image
                  src={`/images/${image}`}
                  alt={title}
                  width={1500}
                  height={1000}
                  layout="responsive"
              />
            <Heading level="3"> {title}</Heading>
            <Paragraph>
              <Link href={`/projects/${slug}`}>
                <a>
                  View Project
                </a>
              </Link>
            </Paragraph>
          </Col>
        })}
        </Row>
      </Container>

  </Layout>
  )
}