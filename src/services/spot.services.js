import { db } from "../firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


const spotCollectionRef = collection(db, "spots");


class SpotDataService
{
    addSpot = (newSpot) =>
    {
        return addDoc(spotCollectionRef, newSpot);
    }

    updateSpot = (id, updatedSpot) =>
    {
        const spotDoc = doc(db, "spots", id);
        return updateDoc(spotDoc, updatedSpot);
    };

    deleteSpot = (id) =>
    {
        const spotDoc = doc(db, "spots", id);
        return deleteDoc(spotDoc);
    };

    getAllSpots = () =>
    {
        return getDocs(spotCollectionRef);
    };

    getSpot = (id) =>
    {
        const spotDoc = doc(db, "spots", id);
        return getDoc(spotDoc);
    };


}

export default new SpotDataService();