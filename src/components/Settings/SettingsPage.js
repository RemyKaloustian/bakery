import React from "react";
import AddressSettings from "./AddressSettings";
import NavbarMenu from '../GeneralComponents/NavbarMenu';

class SettingsPage extends React.Component {
    
  render() {
    return (
      <div>
      <NavbarMenu/>
        Settings 
        <AddressSettings/>
      </div>
    );
  }
}//class
  
export default SettingsPage;