Feature: Substract

    Scenario: The user subtracts two numbers
        Given The source is set to 1
        When The user substracts 1
        Then The result should be 0
    
    Scenario Outline: The user subtracts two numbers multiple times
        Given The source is set to <a>
        When The user substracts <b>
        Then The result should be <result>

        Examples:
            |  a |  b | result |
            |  1 |  2 |     -1 |
            | -1 |  2 |     -3 |
            |  1 | -1 |      2 |
            | -1 | -1 |      0 |