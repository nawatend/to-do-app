import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { white } from '../utils/styles/Colors';

const Button = ({ deleteAllItems }) => (
	<TouchableOpacity onPress={deleteAllItems}>
		<MaterialIcons name="delete-sweep" size={24} color={white} />
	</TouchableOpacity>
)

export default Button