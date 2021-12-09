## Testing documentation for Dev Swag ecommerce application.

***

#### 1. Cart Button actions 
```gherkin
Feature: Validate Cart user actions

Scenario: Validate the cart updates when user adds product from product widget
    When the user clicks on the cart icon under the product
    Then the cart icon in the navbar updates according to number of clicks


Scenario: Validate redirection message to products page with an empty cart
    Given the cart is empty
    When the user navigates to the cart page from the navbar button
    Then the cart page displays the message "You have no items in your shopping cart, start shopping!"
    When the user clicks the "start shopping" hyperlink
    Then the user is redirected to the products page

Scenario: Validate navigation to cart page with full cart
    Given the user has added products to shopping cart
    When user clicks shopping cart icon 
    Then user is redirected to cart page

```

#### 2. Che