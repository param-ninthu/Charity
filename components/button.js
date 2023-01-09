import styled from 'styled-components';
import {StatusBar, View , Text , Image , TouchableOpacity ,TextInput} from 'react-native';
import Constants from 'expo-constants';
import COLORS from './../const/colors'

const StatusBarHeight = Constants.statusBarHeight;




export const StyledContainer = styled.View`
    flex:3;
    padding:25px;
    padding-top : ${StatusBarHeight +100}px;
    background-color :${'#ffffff'};
`

export const InnerContainer =styled.View`
    flex:1;
    width:100%;
    align-items: center;
`;

export const ButtonContainer =styled.View`
    flex:1;
    height:25px;
`;


export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${COLORS.blue};
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 5px;
    height:60px;
    align-items:center;

    ${(props) => props.google == true && `
        background-color : ${'#126E82'};
        flex-direction : row;
        justify-content : center;
    `}

`;

export const ButtonText = styled.Text`
    color:${'#ffffff'};
    font-size:17px;
    fontWeight:bold;

    ${(props) => props.google == true && `
     padding:25px;
    `}
`