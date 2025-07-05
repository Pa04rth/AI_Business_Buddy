import { useEffect, useState } from 'react';
import { auth, db } from '../main'; // Import auth
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchUserType = async () => {
      if (currentUser) {
        // Fetch user type from Firestore
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserType(userDocSnap.data().type); // Assuming you store the type in a 'type' field
        }
      }
    };

    fetchUserType();
  }, [currentUser]); // Re-run when currentUser changes

  return (
    <div>
      {currentUser ? (
        <div className='min-h-screen flex flex-col'>
          <Navigation />
          <div className='flex-1 flex items-center justify-center flex-col'>
            <p className="text-xl">Welcome, {currentUser.displayName}!</p>
            {userType && <p className="text-lg mt-2">You are a: {userType}</p>}
          </div>
          <Footer />
        </div>
      ) : (
        <div className='min-h-screen flex flex-col'>
          <Navigation />
          <div className='flex-1 flex items-center justify-center'>
            <p className="text-xl">Please log in to view the dashboard.</p>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Dashboard;