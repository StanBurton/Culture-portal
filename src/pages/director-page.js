import React from 'react';
import { FormattedMessage, injectIntl, IntlContextConsumer } from "gatsby-plugin-intl";
import "../queries/DirectorPersonalData";
import Layout from '../components/Layouts/Layout';
import Image from '../components/Image/Image';
import SEO from '../components/seo';
import Time from '../components/Timeline/Timeline';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

let directorData = {};

const Director = ({ intl, location }) => {
  if (location.state && location.state.directorData) {
    directorData = location.state.directorData;
  };
  return (
    <Layout>
      <Container>
        <IntlContextConsumer>
          {({ language: currentLocale }) => {
            const lang = currentLocale;
            return <>
              <div>
                <Row>
                  <Col lg={6} md={6} xs={12}>
                    <p>
                      {directorData[lang] && directorData[lang].bio}
                    </p>
                  </Col>
                  <Col lg={6} md={6} xs={12}>
                    <SEO
                      lang={intl.locale}
                      title={intl.formatMessage({ id: "directors.titleDirector" })}
                    />
                    <h1>
                      {directorData[lang] && directorData[lang].name}
                    </h1>
                    <p>
                      {directorData[lang] && directorData[lang].yearsOfLife}
                    </p>
                    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                      <Image src={`${directorData.galleryImages[0].image.slice(8)}`} />
                    </div>
                  </Col>
                </Row>
              </div>
            </>
          }
          }
        </IntlContextConsumer>
        <Time />
      </Container>
    </Layout>
  )
};

export default injectIntl(Director);
