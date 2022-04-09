import React from 'react'
import styled from "styled-components"
import Section from "./Section"

const Div = styled.div`
    height: 100vh;
`

function home() {
  return (
    <Div>
        <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Solar Panels"
          description="Low Cost Solar Panels in India"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Solar Roofs"
          description="Low Cost Solar Panels in India"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Accessories"
          // description="Order Online for Touchless Delivery"
          backgroundImg="accessories.jpg"
          leftBtnText="Buy Now"
          // rightBtnText="Existing Inventory"
        />
    </Div>
  )
}

export default home

