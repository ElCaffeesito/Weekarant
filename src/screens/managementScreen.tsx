import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Platform } from "react-native";
import Topbar from "../components/topbar";
import { Dropdown } from 'react-native-element-dropdown';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/appNavigator";
import { GlobalState } from '../globals/globals';

type Props = NativeStackScreenProps<RootStackParamList, "Management">;

const data = [
  { label: 'Opción 1', value: '1' },
  { label: 'Opción 2', value: '2' },
  { label: 'Opción 3', value: '3' },
];

export default function ManagementScreen({ navigation }: Props) {

  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <Topbar
        title="Management"
      />

      <View style={styles.mainContainer}>
        <View style={styles.row}>
          <View style={styles.bigColumn}>
            <Text style={styles.text}>Aqui va todo el log o historial de calculos</Text>
            <View>
              {GlobalState.map((item, index) => (
                <View key={index}>
                  <Text>Fecha: {item.formattedDate}</Text>
                    <Text>Amount: ${item.amount}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.smallColumn}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={data}
              maxHeight={200}
              labelField="label"
              valueField="value"
              activeColor="#e0e0e0"
              placeholder={!isFocus ? 'Seleccionar' : '...'}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderItem={item => {
                const isSelected = item.value === value;
                return (
                  <View
                    style={[
                      styles.item,
                      isSelected && styles.selectedItem,
                    ]}
                  >
                    <Text style={isSelected ? styles.selectedItemText : styles.itemText}>
                      {item.label}
                    </Text>
                  </View>
                );
              }}
            />
            <Text style={styles.text}>En el dropdown van las fechas registradas y abajo van los textos con los datos y con colores de semaforo</Text>
          </View>
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "95%",
    height: "90%",
    backgroundColor: "#ccc",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  bigColumn: {
    flex: 2,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  smallColumn: {
    flex: 1,
    backgroundColor: '#e67e22',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  dropdown: {
    width: "90%",
    height: 50,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginVertical: 7,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',
  },
  item: {
    padding: 12,
    backgroundColor: 'white',
  },
  selectedItem: {
    backgroundColor: '#e0e0e0',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  selectedItemText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
