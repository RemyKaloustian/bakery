import React from "react";
import SettingsPageAddressSection from "./SettingsPageAddressSection";
import NavbarMenu from '../GeneralComponents/NavbarMenu';

class SettingsPage extends React.Component {
    
  render() {
    return (
      <div>
      <NavbarMenu/>
        Settings 
        <SettingsPageAddressSection/>
      </div>
    );
  }
}//class
  
export default SettingsPage;