import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import LayoutBox from 'components/layout/LayoutBox/LayoutBox';
import Hero from 'components/layout/Hero/Hero';
import Heading from 'components/common/Heading/Heading'
import Button from 'components/common/Button/Button'
import Text from 'components/common/Text/Text'
import Box from 'components/common/Box/Box'
import Header from 'components/layout/Header/Header'
import Footer from 'components/layout/Footer/Footer'
import TopBar from 'components/layout/TopBar/TopBar';

import { NewsMock } from 'utils/ui_constants';
import Marquee from 'react-fast-marquee';

export default function Home() {
  return (
    <StyledHome>
      <Head>
        <title>Decentraland Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        beforeNavbar={
          <TopBar href="/">
            Are you interested in joining the Decentraland Foundation?
          </TopBar>
        }
      >
        <Hero 
          className={'homepage-hero'}
          heroContent={
            <Box className="hero-content-wrapper">
              <Heading className={'heading'} size={1}>
                Decentraland <br/>Foundation
              </Heading>
              <Text className={'sub-heading'}>
                We foster the decentralization of Decentraland, along with the Decentraland community, and hold intellectual property assets.
              </Text>
              <Button>Go to Decentraland.org</Button>
            </Box>
          }
          heroSecondaryContent={
            <Box className="image-box">
                <Image src="/img/heroGraphic.svg" layout="responsive" width={586} height={820} priority alt="Decentraland Foundation"/>
            </Box>
          }
        />
      </Header>
      <main>
        <LayoutBox width={'padded'}>
          <Box className="breakdown" dataAos="fade-up">
            <Text strong textAlign={'center'} fontSize={'4rem'}>
              Brief History of the Foundation / Decentraland, Decentraland DAO and MANA. 
            </Text>
            <Text textAlign={'center'}>
              Brief History of the Foundation / Decentraland, Decentraland DAO and MANA. Brief History of the Foundation / Decentraland, Decentraland DAO and MANA. Brief History of the Foundation / Decentraland, Decentraland DAO and MANA. 
            </Text>
          </Box>
          <Box flexDirection="row" className="ip-assets" dataAos="fade-up">
            <Box flexDirection="row">
              <Box>
                <Heading size={3}>
                  IP Assets
                </Heading>
                <Text size="small">
                  The Foundation holds IP assets of the platform including trademarks, software and copyright for the benefit of the community and that in that capacity the Foundation undertakes actions against infringement.
                </Text>
                <Text size="small">
                  The Foundation holds IP assets of the platform including trademarks, software and copyright for the benefit of the community and that in that capacity the Foundation undertakes actions against infringement.
                </Text>
                <Button type="secondary" href="/">Read More</Button>
              </Box>
            </Box>
            <Box dataRellaxSpeed={4} className="graphic">
              <Image src="/img/IPAssetsGraphic.svg" alt="IP Assets" width={484} height={614} />
            </Box>
          </Box>
        </LayoutBox>
        <LayoutBox className="partners-marquee">
          <Heading size={5} textAlign="center">We work together with all these organizations to protect IP Assets</Heading>
          {/* <Marquee gradient={false} speed={100}>
            <Image src="/img/marqueeLogos.svg" alt="Partner logos" width={1000} height={150} />
          </Marquee>
          <Marquee gradient={false} speed={100} direction="right">
            <Image src="/img/marqueeLogos.svg" alt="Partner logos" width={1000} height={150} />
          </Marquee>
          <Marquee gradient={false} speed={100}>
            <Image src="/img/marqueeLogos.svg" alt="Partner logos" width={1000} height={150} />
          </Marquee> */}
        </LayoutBox>
        <LayoutBox className="news" width={'padded'} dataAos="fade-up">
          <Heading size={4} className="news-heading">Find out about the latest updates of the Decentraland Foundation</Heading>
          <Box className="news-list" flexDirection="row" justifyContent="space-between">
            {NewsMock.map((news, index) => (
              <Box dataAos="fade-up" width="45rem" className="news-item" flexDirection={'column'} key={index}>
                <Box className="thumbnail">
                  <Image src={news.imageUrl} width={300} height={180} alt="Decentraland Foundation News Thumbnail"/>
                </Box>
                <Heading className="news-item-heading" size={6}>{news.title}</Heading>
                <Text className="description">{news.details}</Text>
                <Link href={news.href}>Read more</Link>
              </Box>
            ))}
          </Box>
        </LayoutBox>
        <LayoutBox width={'main'}>
          <Box className="breakdown">
            <Heading textAlign={'center'} size={4}>
              Reach out to the foundation 
            </Heading>
            <Text textAlign={'center'}>
             Here we will have links to mail address and social media channels
            </Text>
          </Box>
        </LayoutBox>
      </main>
      <Footer/>
      <div className="lower-bar"/>
    </StyledHome>
  )
}

const StyledHome = styled.header`
  .homepage-hero {
    flex-grow: 1;
    justify-content: center;
    .hero-content-wrapper {
      max-width: 80rem;
      padding-left: 20rem;
    }
    .heading {
      margin-bottom: 3rem;
    }
    .image-box {
      /* padding-top: 5rem; */
      margin-right: 15rem;
      width: 60rem;
      height: 100%;
    }
  }
  main {
    .breakdown {
      margin: 20rem auto 20rem;
      width: 120rem;
    }
    .ip-assets {
      margin-bottom: 40rem;
      .graphic {
        position: relative;
        top: -10rem;
      }
    }
    .news {
      margin-bottom: 20rem;
      .news-heading {
        max-width: 100rem;
      }
      .news-item {
        padding: 3rem;
        background: ${props => props.theme.cardBackground};
        box-shadow: 0 1rem 2rem hsla(0,0%,0%,0.1);
        border-radius: 1rem;
        .news-item-heading {
          margin-bottom: 1rem;
        }
        .thumbnail {
          margin-bottom: 2rem;
        }
        .description {
          font-size: 2rem;
          line-height: 4rem;
          margin-bottom: 4rem;
        }
        a {
          font-size: 2rem;
          color: ${props => props.theme.primary};
          display: inline-block;
          height: 5rem;
          line-height: 5rem;
          padding: 0 2rem;
          width: fit-content;
          border-radius: 0.5rem;
          font-weight: 600;
          background: ${props => props.theme.readMoreButtonBackground};
          &:hover {
          }
          /* display: none; */
        }
      }
    }
    .partners-marquee {
      margin-bottom: 20rem;
      .marquee {
        margin: 0;
        .marquee-image-wrapper {
          opacity: 0.5;
        }
      }
    }
  }
  .lower-bar {
    height: 1rem;
    background: ${props => props.theme.primary};
  }
`;
