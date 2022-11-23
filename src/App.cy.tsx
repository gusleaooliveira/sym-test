import App from "./App";
import { mount } from "cypress/react";

describe("hello world  app", () => {
  it("Testa se o componente app tem um hello world", () => {
    mount(<App />);
    cy.get("h1").should("have.text", "Hello, Cruel World!");
  });
});
