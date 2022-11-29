import React from "react";
import axios from "axios";
import styles from "../styles/Todos.module.css"

import Topo from "../components/Topo"
import Base from "../components/Base"

function Todos({todos}){
    return (
        <div>
            <Topo/>
            <div class={styles.container_todos}>
                <h1>Catálogo de Usuários</h1>
                {todos.map((todo) => (
                    <>
                        <div class={styles.grid_cards}>
                            <div className={styles.card_todos}>
                                <p><span>User ID:</span> {todo.userId}</p>
                                <p><span>ID:</span> {todo.id}</p>
                                <p><span>Título:</span> {todo.title}</p>
                                <p><span>Completo:</span> {todo.completed}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <Base/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
    );
    const data = await response.data;

    return {
        props: {todos:data},
    }
}

export default Todos;