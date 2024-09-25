import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Masthead } from './Masthead';
// import { Searchhead } from './Searchhead';
import { QuestionForm } from 'app/components/QuestionForm';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Masthead />
        {/* <Searchhead /> */}
        <QuestionForm />
      </PageWrapper>
    </>
  );
}
