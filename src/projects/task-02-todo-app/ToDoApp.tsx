import { Button, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, commonStyles } from '../../theme'

export default function ToDoApp() {

    const [editId, setEditId] = useState(null)
    const inputRef = useRef<any>(null)

    const [task, setTask] = useState('')


    const [list, setList] = useState([
        { id: 1, task: 'wake up' },
        { id: 2, task: 'bath' }
    ])


    const renderItem = (item: any) => {
        return <View style={styles.listItem}>
            <Text style={styles.taskText}>{item.task}</Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity 
                    style={[styles.button, styles.editButton]} 
                    onPress={() => {
                        setEditId(item.id)
                        setTask(item.task)
                        inputRef?.current?.focus()
                    }}
                >
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, styles.deleteButton]} 
                    onPress={() => {
                        setList(list.filter((i) => i.id !== item.id))
                    }}
                >
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    }


    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <TextInput 
                    ref={inputRef} 
                    value={task} 
                    onChangeText={(value) => setTask(value)} 
                    style={styles.textInput}
                    placeholder="Enter a task..."
                    placeholderTextColor={colors.input.placeholder}
                />
                <TouchableOpacity 
                    style={[styles.addButton, editId ? styles.updateButton : styles.addButton]} 
                    onPress={() => { 
                        if (!editId) {
                            const nextId = list.length > 0 ? Math.max(...list.map(item => item.id)) + 1 : 1; 
                            setList([...list, { id: nextId, task: task }]); 
                            setTask('') 
                        } else {
                            setList(list.map((item) =>
                                item.id === editId ? { ...item, task: task } : item
                            )); 
                            setEditId(null); 
                            setTask('')
                        }
                    }}
                >
                    <Text style={styles.addButtonText}>
                        {editId ? 'Update' : 'ADD'}
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={list}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                style={styles.list}
            />

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 12,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.input.background,
    borderWidth: 1,
    borderColor: colors.input.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.input.text,
  },
  addButton: {
    backgroundColor: colors.button.success.background,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  updateButton: {
    backgroundColor: colors.button.primary.background,
  },
  addButtonText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  list: {
    flex: 1,
  },
  listItem: {
    backgroundColor: colors.background.card,
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: colors.text.primary,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    minWidth: 60,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: colors.button.primary.background,
  },
  deleteButton: {
    backgroundColor: colors.button.danger.background,
  },
  editButtonText: {
    color: colors.button.primary.text,
    fontSize: 14,
    fontWeight: '600',
  },
  deleteButtonText: {
    color: colors.button.danger.text,
    fontSize: 14,
    fontWeight: '600',
  },
})

