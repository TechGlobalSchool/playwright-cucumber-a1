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

  Scenario: Validate HTML Elements card, Toggle checkboxes and verify the state
    When user selects the "Microsoft" checkbox
    And user deselects the "Microsoft" checkbox
    Then the "Microsoft" checkbox should not be checked
    When user selects the "Apple" and "Tesla" checkboxes
    Then both "Apple" and "Tesla" checkboxes should be checked
    And the "Microsoft" checkbox remains unchecked