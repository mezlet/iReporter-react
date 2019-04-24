/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PersonalDetails from "../../presentation/PersonalDetails/PersonalDetails";
import ContentHeader from "../../presentation/ContentHeader/ContentHeader";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <ContentHeader />
        <PersonalDetails />
      </div>
    );
  }
}
