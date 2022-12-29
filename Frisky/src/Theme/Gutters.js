import { StyleSheet } from 'react-native'

/**
 * Generate Styles depending on MetricsSizes vars availabled at ./Theme/Variables
 * Styles are like :
 * <size><direction><op>: {
 *    <op><direction>: <value>
 * }
 * where:
 * <size>: is the key of the variable included in MetricsSizes
 * <direction>: can be ['Bottom','Top','Right','Left','Horizontal','Vertical']
 * <op>: can be ['Margin', 'Padding']
 * <value>: is the value of the <size>
 */
import { color } from '@/Utility/Constants'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ MetricsSizes }) {
  return StyleSheet.create({
    //Signin page
    //screen total items styles
    itemContainer: {
      marginTop: 80,
      margin: 50,
    },
     //inputtext styles
    inputText1: {
      marginTop: 40,
    },
    //footer text styles
    footer: {
      paddingTop: 25,
      alignItems: "center",
    },
    //forgotpassword text styles
    footer1: {
      paddingTop: 30,
    },
      //create a new account text styles
    footer2: {
      paddingTop: 10,
    },
    //email and password textinput styles
    textInput: {
      height: 60,
      borderRadius: 25,
      borderLeftWidth: 15,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      width: 300,
    },
      //login button styles
    button: {
      alignItems: "center",
      paddingTop: 10,
      backgroundColor: color.BLUE,
      borderRadius: 25,
      marginTop: 50,
      width: 300,
      height: 60,
    },
    //Home page
    itemPhoto: {
      width: 150,
      height: 150,
      borderRadius: 10,
    },
    //all item styles
    item: {
      margin: 10,
    },
    //section header styles
    sectionHeader: {
      marginTop: 20,
      marginBottom: 5,
    },
     //parent styles
    container: {
      flex: 1,
    },
    //header page
    //header styles
    Center: {
      marginTop: 50,
      margin: 10,
      height: 60,
      paddingStart: 15,
      paddingEnd: 15,
      flexDirection: 'row',
      justifyContent: "space-between",
    },
    //logo styles
    Icon: {
      height: 40,
      width: 40,
      paddingRight: 10,
    },
    //icon styles
    Icon1: {
      height: 30,
      width: 30,
    },
    imageBackground: {
      height: "100%",
      width: "100%",
    },
    //signup page
    //page title styles
    signup_header: {
      marginTop: 20,
    },
    //inputtext styles
    signup_inputText: {
      marginTop: 20,
    },
    //name,email,password and confirmpassword textinput styles
    signup_textInput: {
      height: 60,
      marginTop: 20,
      marginBottom: 5,
      borderWidth: 1,
      borderLeftWidth: 15,
      paddingLeft: 30,
      borderRadius: 25,
      width: 300,
    },
    //signup button styles
    signup_button: {
      marginTop: 20,
      borderRadius: 25,
      paddingTop: 10,
      height: 60,
    },
    //login user text styles
    signup_footer: {
      paddingTop: 20,
    },
    //Account styles
    sub_container: {
      height: "100%",
      width: "100%",
      justifyContent: "center",
    },
    //forgotpassword screen total styles
    forgot_header: {
      marginTop: 100,
      margin: 50,
    },
    //forgotpassword title styles
    forgot_title: {
      marginTop: 30,
    },
    //inputtext styles
    forgot_input: {
      margin: 10,
    },
    //email textinput styles
    forgot_textInput: {
      height: 60,
      marginLeft: 5,
      borderColor: color.BLUE,
      borderLeftWidth: 15,
      paddingLeft: 20,
      borderRadius: 25,
      marginTop: 50,
      width: 300,
    },
    //send button styles
    forgot_button: {
      padding: 10,
      marginTop: 50,
      borderRadius: 25,
      height: 60,
    },
    //change password title styles
  change_title: {
    marginTop: 30,
    marginBottom:10
  },
  //input text box 1 styles
  change_inputtext1: {
    marginTop: 60,
  },
  //input text box 2 styles
  change_inputtext2: {
    paddingTop: 30,
  },
  //password and confirmpassword textinput styles
  change_textInput: {
    height: 60,
    borderColor: color.BLUE,
    borderLeftWidth: 15,
    paddingLeft: 30,
    borderRadius: 25,
    width: 300,
  },
  //savechanges button styles
  change_button: {
    marginTop: 60,
    height: 60,
    borderRadius: 25,
    width: 300,
    paddingTop: 10,
  },
  })
}
