import React from 'react';
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export const IndexPrueba = () => {
    // Simulated Data
    const recipes = [
        {
            id: 1,
            nombre: "test1",
            ingredientes: "test1",
            descripcion: "test1",
        },
        {
            id: 2,
            nombre: "test2",
            ingredientes: "test2",
            descripcion: "test2",
        },
        {
            id: 3,
            nombre: "test3",
            ingredientes: "test3",
            descripcion: "test3",
        },
        {
            id: 4,
            nombre: "test4",
            ingredientes: "test4",
            descripcion: "test4",
        },
        {
            id: 5,
            nombre: "test5",
            ingredientes: "test5",
            descripcion: "test5",
        },
    ];
    return (
        <>
            <Header />
            <main>
                <section>
                    <>
                        {animals.map((animal, index) => (
                            <div key={index}>
                                <div>Type: {animal.type}</div>
                                <div>Age: {animal.age}</div>
                            </div>
                        ))}
                    </>
                </section>
            </main>
            <Footer />
        </>
    );
};
