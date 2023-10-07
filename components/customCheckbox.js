import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomCheckbox = ({ checked, callback }) => {
    return (
        <TouchableOpacity onPress={callback}>
            <View style={{
                width: 25,
                height: 25,
                borderWidth: 2,
                borderColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff'
            }}>
                {checked && <AntDesign name="check" size={20} color="#000" />}
            </View>
        </TouchableOpacity>
    );
};

export default CustomCheckbox;
