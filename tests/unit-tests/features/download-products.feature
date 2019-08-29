Feature: Download Products

    Scenario: The user downloads a signe products
        Given A product with SKU "EBU_001", title "ByteHappens T Shirt", price 25.99 and stock 0
        When The user downloads the products
        Then The products should be downloaded
        Then The result shoud be an array
        Then Their should be 1 product(s)

    Scenario: The user downloads multiple products
        Given A product with SKU "EBU_001", title "ByteHappens T Shirt", price 25.99 and stock 0
        Given A product with SKU "EBU_002", title "ByteHappens T Mug", price 10 and stock 0
        When The user downloads the products
        Then The products should be downloaded
        Then The result shoud be an array
        Then Their should be 2 product(s)
