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

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
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
      </Container>

  </Layout>
  )
}