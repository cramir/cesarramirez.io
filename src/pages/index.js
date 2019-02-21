import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import SEO from '../components/SEO'

export default props => (
  <Layout>
    <SEO />
    <h1>Hi, I'm Cesar.</h1>
    <p>
      I’m an AWS-certified software engineer with 8 years of experience across frontend and backend development,
      application security and the software development lifecycle.
    </p>
    <p>I tend to keep my personal projects rather minimalistic. Over time I'll add a few here.</p>
    <div>
      <h2>Personal & Professional Passions</h2>
      <ul
        css={css`
          columns: 3;
        `}
      >
        <li>Family</li>
        <li>Technology</li>
        <li>Security</li>
        <li>Real Estate investing</li>
        <li>Finance</li>
        <li>Gaming</li>
        <li>Giving</li>
      </ul>
    </div>
    <div>
      <h2>Books & Podcasts </h2>
      <p>
        Here are some books that I’ve enjoyed reading and podcasts that I listen to daily. They have renewed my
        perspective on self development, personal finance and entrepreneurship. I hope you enjoy them, too.
      </p>
      <p>
        Drop me a line <a href="mailto:c.ramirez@programmer.net">c.ramirez@programmer.net</a> with a podcast or book
        that you would recommend to me.
      </p>
      <h4>Books</h4>
      <ul
        css={css`
          columns: 3;
        `}
      >
        <li>
          <a href="https://amzn.to/2EoWuuJ">Wealth Can't Wait</a>
        </li>
        <li>
          <a href="https://amzn.to/2BNnr9p">Digital Minimalism</a>
        </li>
        <li>
          <a href="https://amzn.to/2BKXwPY">Deep Work</a>
        </li>
        <li>
          <a href="https://amzn.to/2E6BHue">So Good They Can't Ignore You</a>
        </li>
        <li>
          <a href="https://amzn.to/2EocEo8">Rich Dad, Poor Dad</a>
        </li>
        <li>
          <a href="https://amzn.to/2EmynN4">The Definitive Book of Body Language</a>
        </li>
        <li>
          <a href="https://amzn.to/2Iu5UZX">Atomic Habits</a>
        </li>
        <li>
          <a href="https://amzn.to/2ElNpCx">The One Thing</a>
        </li>
        <li>
          <a href="https://amzn.to/2BJmEGE">The Third Door</a>
        </li>
        <li>
          <a href="https://amzn.to/2V9ZcJN">Giftology</a>
        </li>
        <li>
          <a href="https://amzn.to/2U1xHCa">Thinking in Bets</a>
        </li>
        <li>
          <a href="https://amzn.to/2VbKLFc">Never Split the Difference</a>
        </li>
        <li>
          <a href="ttps://amzn.to/2EoZC9J">The Richest Man in Babylon</a>
        </li>
        <li>
          <a href="https://amzn.to/2EoXnDz">Miracle Morning</a>
        </li>
        <li>
          <a href="https://amzn.to/2twxzil">The Entrepreneur Roller Coaster</a>
        </li>
        <li>
          <a href="https://amzn.to/2txeYTe">The 10x Rule</a>
        </li>
        <li>
          <a href="https://amzn.to/2T4ViVs">Long-Distance Real Estate Investing</a>
        </li>
        <li>
          <a href="https://amzn.to/2tuPGoS">Set for Life</a>
        </li>
      </ul>
      <h4>Podcasts</h4>
      <ul
        css={css`
          columns: 3;
        `}
      >
        <li>
          <a href="https://sidehustleschool.com/podcasts/">Side Hustle School</a>
        </li>
        <li>
          <a href="https://oldpodcast.com/episodes/">Optimal Living Daily</a>
        </li>
        <li>
          <a href="https://oldpodcast.com/episodes/">Optimal Business Daily</a>
        </li>
        <li>
          <a href="https://oldpodcast.com/episodes/">Optimal Finance Daily</a>
        </li>
        <li>
          <a href="https://www.biggerpockets.com/podcast">Bigger Pockets</a>
        </li>
        <li>
          <a href="https://www.biggerpockets.com/moneyshow">Bigger Pockets Money</a>
        </li>
        <li>
          <a href="https://mastersofscale.com/#/">Masters of Scale</a>
        </li>
        <li>
          <a href="https://www.choosefi.com/podcast-episodes/">ChooseFI</a>
        </li>
        <li>
          <a href="https://affordanything.com/podcast/">Afford Anything</a>
        </li>
      </ul>
    </div>
  </Layout>
)
