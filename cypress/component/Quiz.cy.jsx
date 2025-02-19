// Component tests for the Quiz component
import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  beforeEach(() => {
    // sets up a example question rather than actually making an API call to as server so we can run the test without a server running
    cy.intercept({
      method: "GET",
      url: "/api/questions/random"
    },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
    )
  });
