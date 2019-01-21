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
      application security and the software development lifecycle. View my resume
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
        Drop me a line <a href="mailto:c.ramirezx@programmer.net">c.ramirez@programmer.net</a> with a podcast or book
        that you would recommend to me.
      </p>
      <h4>Books</h4>
      <ul
        css={css`
          columns: 3;
        `}
      >
        <li>Wealth Can't wait</li>
        <li>Deep Work</li>
        <li>Rich Dad, Poor Dad</li>
        <li>The Definitive Book of Body Language</li>
        <li>Atomic Habits</li>
        <li>The One Thing</li>
        <li>The Third Door</li>
        <li>Giftology</li>
        <li>Thinking in Bets</li>
        <li>Never Split the Difference</li>
        <li>The Richest Man in Babylon</li>
        <li>Miracle Morning</li>
        <li>The Entrepreneur Roller Coaster</li>
        <li>The 10x Rule</li>
        <li>Long Distance Realestate Investing</li>
      </ul>
      <h4>Podcast</h4>
      <ul
        css={css`
          columns: 3;
        `}
      >
        <li>Side Hustle School</li>
        <li>Optimal Living Daily</li>
        <li>Optimal Business Daily</li>
        <li>Optimal Finance Daily</li>
        <li>Bigger Pockets</li>
        <li>Bigger Pockers Money</li>
        <li>Masters of Scale</li>
        <li>ChooseFI</li>
        <li>Afford Anything</li>
      </ul>
    </div>
  </Layout>
)
