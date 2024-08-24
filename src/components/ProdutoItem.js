import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../CommonStyles";

export default function ProdutoItem(props) {
    return (
        <View style={styles.container} id={props.produto.codigo}>
            <Text style={styles.textItem}>{props.produto.codigo} - {props.produto.nome}</Text>
            <Text style={styles.textItem}>Quantidade: {props.produto.quantidade}</Text>
            <View>
                <TouchableOpacity style={styles.deleteButton} onPress={props.onDelete}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}