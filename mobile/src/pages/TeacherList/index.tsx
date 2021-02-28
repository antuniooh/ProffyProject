import React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import { BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function TeacherList(){
    const [isfiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isfiltersVisible);
    }

    return(
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponiveis" 
                headerRight={(
                    <BorderlessButton
                        onPress={handleToggleFiltersVisible}
                    >
                        <Feather name="filter" size={20} color="#FFF"></Feather>
                    </BorderlessButton>
                )}
            >

        { isfiltersVisible && (
            <View style={styles.searchForm}>

                <Text style={styles.label}>Matéria</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Qual a matéria?"
                    placeholderTextColor="#c1bccc"
                ></TextInput>

                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Dia da semana</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual o dia?"
                            placeholderTextColor="#c1bccc"
                        ></TextInput>
                    </View>

                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual horário?"
                            placeholderTextColor="#c1bccc"
                        ></TextInput>
                    </View>

                </View>


                <RectButton style={styles.submitButton}>
                    <Text style={styles.submitButtonText}> Filtrar </Text>
                </RectButton>

            </View>
        )}

            </PageHeader>
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
            <TeacherItem></TeacherItem>
            <TeacherItem></TeacherItem>
            <TeacherItem></TeacherItem>
            <TeacherItem></TeacherItem>
            <TeacherItem></TeacherItem>
            <TeacherItem></TeacherItem>
            <TeacherItem></TeacherItem>
            </ScrollView>
        </View>
    ) 
}

export default TeacherList;