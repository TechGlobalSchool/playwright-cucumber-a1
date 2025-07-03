Feature: Interactions with TechGlobal HTML Elements page

  Background: Scenario-1
    Given user navigates to "https://www.techglobal-training.com/frontend"
    When user clicks on the "HTML Elements" card
    Then user should see "HTML Elements" page heading
    And the URL should contain "elements"


  Scenario: Validate HTML elements card, Register and Sign in Buttons
    When user clicks on the "Register" button
    Then the text under it should be "You clicked on “Register”"
    When user clicks on the "Sign in" button
    Then the text under it should be "You clicked on “Sign in”"