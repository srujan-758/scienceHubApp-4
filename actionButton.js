import * as React from 'react'
import {Text,View,TouchableOpacity, StyleSheet} from 'react-native'

export default class ActionButton extends React.Component{
    constructor(props){
      super(props);
      this.state={
          displayText: this.props.name,
          displayStyle: this.props.style
      }
    }
    render(){
        return(
            <View>
               {this.state.displayStyle===" number" &&(
                   <TouchableOpacity
                     style = {[styles.button,{backgroundColor: "#E74C3C "}]}
                     onPress= {this.props.onPress}
                   >
                       <Text
                         style = {[styles.button,{backgroundColor: "white"}]}
                            >{this.state.displayText}
                        </Text>
                   </TouchableOpacity>
               )}

                {this.state.displayStyle==="operation" &&(
                   <TouchableOpacity
                     style = {[styles.button,{backgroundColor: "#1A5276"}]}
                     onPress= {this.props.onPress}
                   >
                       <Text
                         style = {[styles.button,{backgroundColor: "white"}]}
                            >{this.state.displayText}
                        </Text>
                   </TouchableOpacity>
               )}

                {this.state.displayStyle==="other" &&(
                   <TouchableOpacity
                     style = {[styles.button,{backgroundColor: "#6C3483"}]}
                     onPress= {this.props.onPress}
                   >
                       <Text
                         style = {[styles.button,{backgroundColor: "white"}]}
                            >{this.state.displayText}
                        </Text>
                   </TouchableOpacity>
               )}
 
               
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
     width:90,
     height:90,
     borderRadius:90,
     alignItems:'center',
     justifyContent:'center',
     margin:3,   
    }
})