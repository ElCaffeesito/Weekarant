import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/authNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {

    return (
        <View>
              <Text>Login</Text>
        </View>
    );
}