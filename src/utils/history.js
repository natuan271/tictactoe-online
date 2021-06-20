import { firestore } from "../services/firebase"

export const history = async () => {
    const snapshot = await firestore
        .collection('rooms')        
        .limit(10)        
        .get()
    
    return snapshot.docs.map(doc => doc.data()).filter(doc => !doc.canJoin)
}