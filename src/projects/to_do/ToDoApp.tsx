import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'

export default function ToDoApp() {

    const [editId, setEditId] = useState(null)
    const inputRef = useRef<any>(null)

    const [task, setTask] = useState('')


    const [list, setList] = useState([
        { id: 1, task: 'wake up' },
        { id: 2, task: 'bath' }
    ])


    const renderItem = (item: any) => {
        return <View style={{ marginBottom: 10, padding: 6, display: 'flex', flexDirection: 'row', width: '100%', borderWidth: 1, justifyContent: 'space-between', alignItems: 'center', paddingLeft: 15 }}>
            <Text>{item.task}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Button onPress={() => {
                    setEditId(item.id)
                    setTask(item.task)
                    inputRef?.current?.focus()
                }} title='Edit' />

                <Button onPress={() => {
                    setList(list.filter((i) => i.id !== item.id))
                }} title='Delete' color={'red'} />
            </View>
        </View>
    }


    return (
        <View style={{ padding: 10 }}>

            <View style={{ display: 'flex', flexDirection: 'row', width: '80%', marginBottom: 30 }}>
                <TextInput ref={inputRef} value={task} onChangeText={(value) => setTask(value)} style={{ borderWidth: 1, width: '100%' }}></TextInput>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', marginLeft: 10 }}>
                    {
                        !editId ?
                            <Button color={'green'} title='ADD' onPress={() => { const nextId = list.length > 0 ? Math.max(...list.map(item => item.id)) + 1 : 1; setList([...list, { id: nextId, task: task }]); setTask('') }}></Button>
                            :
                            <Button title='Update' onPress={() => {
                                setList(list.map((item) =>
                                    item.id === editId ? { ...item, task: task } : item
                                )); setEditId(null); setTask('')
                            }}></Button>
                    }
                </View>
            </View>

            <FlatList
                data={list}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
            />




        </View>
    )
}

const styles = StyleSheet.create({})

