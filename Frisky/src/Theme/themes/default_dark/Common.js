import { StyleSheet } from "react-native"
export default function ({ color, ...args }) {
  return StyleSheet.create({
    //Signin page
    header: {
      color: color.WHITE,
    },
    footer2: {
      color: color.WHITE,
    },
    button: {
      backgroundColor: color.BLUE,
    },
    textInput: {
      color: color.BLACK,
      backgroundColor: color.WHITE,
      borderLeftColor: color.BLUE,
    },
    footer1: {
      color: color.WHITE,
    },
    //Home page
    itemText: {
      color: color.SILVER,
    },
    sectionHeader: {
      color: color.WHITE,
    },
    container: {
      backgroundColor: color.HOME,
    },
    //Header page
    Over: {
      backgroundColor: color.HOME,
    },
    //header styles
    Center: {
      backgroundColor: color.HOME,
      color: color.RED,
    },
    //bottom page
    back_container: {
      backgroundColor: color.BACK
    },
    // signup style
    //name,email,password and confirmpassword textinput styles
    signup_textInput: {
      color: color.BLACK,
      borderLeftColor: color.BLUE,
      backgroundColor: color.WHITE,
    },
    //signup button styles
    signup_button: {
      backgroundColor: color.BLUE,
    },
    //login user text styles
    signup_footer: {
      color: color.WHITE,
    },
    //subscreen styles
    sub_container: {
      backgroundColor: color.HOME,
    },
    //logout button text styles
    buttontext: {
      color: color.WHITE,
    },
    //forgotpassword title styles
    forgot_title: {
      color: color.WHITE,
    },
    //email textinput styles
    forgot_textInput: {
      borderColor: color.BLUE,
      backgroundColor: color.WHITE,
    },
    //send button styles
    forgot_button: {
      backgroundColor: color.BLUE,
    },
    //change password title styles
    change_title: {
      color: color.WHITE,
    },
    //password and confirmpassword textinput styles
    change_textInput: {
      borderColor: color.BLUE,
      backgroundColor: color.WHITE,
    },
    //savechanges button styles
    change_button: {
      backgroundColor: color.BLUE,
    }

  })
}