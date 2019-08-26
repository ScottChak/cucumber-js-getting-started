Feature: Add

    Scenario: The user adds two numbers
        When The user adds 1 and 1
        Then The result should be 2
    
    Scenario Outline: The user adds two numbers multiple times
        When The user adds <a> and <b>
        Then The result should be <result>

        Examples:
            |  a |  b | result |
            |  1 |  2 |      3 |
            | -1 |  2 |      1 |
            |  1 | -1 |      0 |
            | -1 | -1 |     -2 |