import { View } from "react-native";

export default function RadioButton({ selected }) {

    return (
        <View style={{
            height: 26,
            width: 26,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {
                selected ?
                    <View style={{
                        height: 14,
                        width: 14,
                        borderRadius: 8,
                        backgroundColor: '#d18ead',
                    }} />
                    : null
            }
        </View>
    );
}