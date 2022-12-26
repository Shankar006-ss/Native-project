/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'


/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
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
      backgroundColor: color.AQUA,

    },
    textInput: {
      color: color.BLACK,
      backgroundColor: color.WHITE,
      borderLeftColor: color.AQUA,
    },
    footer1: {
      color: color.WHITE,
    },
    //Home page
    itemText: {
      color: color.BLACK,
    },
    sectionHeader: {
      color: color.BLACK,
    },
    container: {
      backgroundColor: color.WHITE,
    },
    //Header page
    Over: {
      backgroundColor: color.AQUA,
    },
    //header styles
    Center: {
      backgroundColor: color.AQUA,
   
    },
    back_container: {
      backgroundColor: color.AQUA
    },
    // signup style
    //name,email,password and confirmpassword textinput styles
    signup_textInput: {
      color: color.BLACK,
      borderLeftColor: color.AQUA,
      backgroundColor: color.WHITE,
    },
    //signup button styles
    signup_button: {
      backgroundColor: color.AQUA,
    },
    //login user text styles
    signup_footer: {
      color: color.WHITE,
    },
    //Account styles
    sub_container: {
      backgroundColor: color.WHITE,
    },
    //logout button text styles
    buttontext: {
      color: color.BLACK,
    },
    //forgotpassword title styles
    forgot_title: {
      color: color.WHITE,
    },
    //email textinput styles
    forgot_textInput: {
      color: color.BLACK,
      borderColor: color.AQUA,
      backgroundColor: color.WHITE,
    },
    //send button styles
    forgot_button: {
      backgroundColor: color.AQUA,
    },
    //change password title styles
    change_title: {
      color: color.WHITE,
    },
    //password and confirmpassword textinput styles
    change_textInput: {
      color: color.BLACK,
      borderColor: color.AQUA,
      backgroundColor: color.WHITE,
    },
    //savechanges button styles
    change_button: {
      backgroundColor: color.AQUA,
    },
  })
}
