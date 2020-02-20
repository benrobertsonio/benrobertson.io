import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Heading } from "theme-ui"

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title="404: Not found" />
      <Heading as="h1">NOT FOUND</Heading>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
