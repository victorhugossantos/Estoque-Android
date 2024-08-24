import AsyncStorage from "@react-native-async-storage/async-storage";
import { Produto } from "./Produto";

const salvarProduto = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e){

    }
}
const removerProduto = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {

    }
}
const obterProdutoJSON = async () => {
    try {
        let keys = await AsyncStorage.getAllKeys();
        console.log(keys);
        return await AsyncStorage.multiGet(keys);
    } catch (e) {
        return [];
    }
}

const obterProduto = async () => {
    try {
        let objetos = [];
        let objJSON = await obterProdutoJSON();
        if (objJSON=null && objJSON.length>0) 
            objJSON.forEach(element => {
                let produto: Produto = JSON.parse(element[1]);
                objetos.push(produto);
            });
        return objetos;
    } catch (e) {
        return [];
    }

}

class GestorDados {
    public async remover(chave: number){
        removerProduto(chave.toString());
    }

    public async adicionar(produto: Produto){
        salvarProduto(produto.codigo.toString(), produto);
    }

    public async obterTodos(): Promise<Array<Produto>> {
        let lista: Array<Produto> = await obterProduto();
        return lista;
    }
}

export default GestorDados;

