import React  from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"

const ClearMessages = () => {
    const clearMessages = async (event) => {
        event.preventDefault();
        const colRef = collection(db, "messages");
        const docsSnap = await getDocs(colRef);
        docsSnap.forEach(document => {
            console.log(document)
            const docRef = doc(db, "messages", document.id);

            deleteDoc(docRef)
                .then(() => {
                    console.log("Document successfully deleted!");
                })
                .catch((error) => {
                    console.error("Error removing document: ", error);
                });
        });
    };
    return (
        <form onSubmit={(event) => clearMessages(event)} className="clear-messages">
            <button type="submit">Clear Messages</button>
        </form>
    );
};

export default ClearMessages;