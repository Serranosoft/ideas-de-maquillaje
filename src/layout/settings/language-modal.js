import React, { useContext, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ui } from '../../utils/styles';
import RadioButton from '../../components/radio-button';
import { LangContext } from '../../DataContext';
import Button from '../../components/button';
import OkIcon from '../../icons/ok-icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userPreferences } from '../../utils/userPreferences';

export default function LanguageModal({ langModal, setLangModal }) {

    const { language, setLanguage } = useContext(LangContext);
    const [selected, setSelected] = useState(language._locale || false);

    async function updateLanguage(acronym) {
        setSelected(acronym)
        await AsyncStorage.setItem(userPreferences.LANGUAGE, acronym);
        setLanguage(acronym);
    }

    const languages = [
        { title: language.t("_langListSpanish"), acronym: "es" },
        { title: language.t("_langListEnglish"), acronym: "en" },
        { title: language.t("_langListArabic"), acronym: "ar" },
        { title: language.t("_langListGerman"), acronym: "de" },
        { title: language.t("_langListFrench"), acronym: "fr" },
        { title: language.t("_langListHindi"), acronym: "hi" },
    ]

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={langModal}
            onRequestClose={() => {
                setLangModal(!langModal);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={ui.h3}>{language.t("_langChangeLanguage")}</Text>
                    <View style={styles.options}>
                        {
                            languages.map((language, index) => {
                                return (
                                    <TouchableOpacity style={styles.row} key={index} onPress={() => updateLanguage(language.acronym)}>
                                        <Text style={ui.text}>{language.title}</Text>
                                        <RadioButton selected={language.acronym === selected} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    {/* <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setLangModal(!langModal)}>
                        <Text style={styles.textStyle}>{language.t("_langChangeLanguage")}</Text>
                    </Pressable> */}
                    <Button border evt={() => setLangModal(!langModal)}>
                        <Text></Text>
                        <Text style={ui.h3}>{language.t("_langChangeLanguage")}</Text>
                    </Button>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 370,
        margin: "auto"
    },
    modalView: {
        gap: 24,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    options: {
        gap: 8,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
    }
});